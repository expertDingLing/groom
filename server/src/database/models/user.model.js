const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const _ = require('lodash');
const { v4: uuidv4 } = require('uuid');
const config = require('../../config');
const { ObjectId } = require('mongoose');

// Define Schema
const userSchema = new mongoose.Schema(
  {
    username: { 
      type: String,
      unique: true,
      trim: true,
      required: [true, 'Username is required'],
      match: [
        /^[a-zA-Z0-9.\-_]{4,30}$/,
        'Must be between 4 to 30 characters and may contain only alphanumeric chacracters, hyphen, dot or underscore',
      ], 
    },
    email: {
      type: String,
      unique: true,
      trim: true,
      required: [true, 'Email is required'],
      match: [
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'Invalid email',
      ],
    },
    profile: {
      firstName: { type: String, required: true, trim: true },
      lastName: { type: String, required: true, trim: true },
      gender: { type: String, enum: ['Male', 'Female'] },
      birthDate: { type: Date },
      phoneNumber: { type: String },
      country: { type: String },
      state: { type: String },
      city: { type: String },
      address: { type: String },
      photo: { type: String, default: '/assets/layout/img/avatar.png' },
      governmentId: { type: String },
      emergencyContact: {type: String },
    },
    
    // Do NOT set directly, call user.setPasswordAsync(password)
    hashedPassword: { type: String },
    // subId is used to validate JWT token.
    // Do NOT set directly, call user.setSubId().
    // subId: { type: String, unique: true },
    ipAddress: { type: String },
    loginCount: { type: Number, default: 0 },
    status: {
      type: String,
      enum: ['active', 'disabled', 'unverified-email'],
      default: 'active',
      index: true,
    },
    role: {
      type: String,
      enum: ['customer', 'shop-owner', 'shop-manager', 'service-provider', 'super-admin', 'admin', 'contributor'],
      default: 'customer',
      index: true,
    },
    // The permissions field will allow a normal user to perform
    // admin-like actions.
    // By default, superadmin and admin can do any thing (permissions field is ignored).
    // So, call user.hasPermission(permission) to determine the permission.
    // The rules for updating and deleting are implemented in createXAuthorizationMiddleware middleware.
    permissions: {
      user: {
        add: { type: Boolean, default: false },
        edit: { type: Boolean, default: false },
        delete: { type: Boolean, default: false },
        read: { type: Boolean, default: false },
      },
      shop: {
        add: { type: Boolean, default: false },
        edit: { type: Boolean, default: false },
        delete: { type: Boolean, default: false },
      },
      professional: {
        add: { type: Boolean, default: false },
        edit: { type: Boolean, default: false },
        delete: { type: Boolean, default: false },
      },
      service: {
        add: { type: Boolean, default: false },
        edit: { type: Boolean, default: false },
        delete: { type: Boolean, default: false },
      },
      booking: {
        add: { type: Boolean, default: false },
        edit: { type: Boolean, default: false },
        delete: { type: Boolean, default: false },
      },
      financial: {
        add: { type: Boolean, default: false },
        edit: { type: Boolean, default: false },
        delete: { type: Boolean, default: false },
      },
      promotion: {
        add: { type: Boolean, default: false },
        edit: { type: Boolean, default: false },
        delete: { type: Boolean, default: false },
      },
      review: {
        flag: { type: Boolean, default: false },
        delete: { type: Boolean, default: false },
      },
      location: {
        flag: { type: Boolean, default: false },
        delete: { type: Boolean, default: false },
      },
    },
    // token for veryfication email or reset password purpose, NOT JWT token
    // Do NOT set directly, call user.setToken(tokenPurpose) user.clearToken()
    // to set and clear token and tokenPurpose
    token: { type: String, index: true },
    tokenPurpose: { type: String, enum: ['verify-email', 'reset-password'] },

  },
  { timestamps: true }
);

userSchema.virtual('fullName').get(function () {
  return `${this.profile.firstName} ${this.profile.lastName}`;
});

/**
 * @returns {object} The user profile object without sensitive info such as hashed password
 */
userSchema.methods.toJsonFor = function (user) {
  const userObj = this.toObject();
  if (user && (user.hasPermission('user', 'read') || user.id === this.id)) {
    return {
      id: userObj._id,
      username: userObj.username,
      email: userObj.email,
      profile: userObj.profile,
      status: userObj.status,
      role: userObj.role,
      permissions: userObj.permissions,
      createdAt: userObj.createdAt,
      updatedAt: userObj.updatedAt,
    };
  } else {
    // public profile
    return {
      id: userObj._id,
      username: userObj.username,
      email: userObj.email,
      createdAt: userObj.createdAt,
      updatedAt: userObj.updatedAt,
    };
  }
};

/**
 * Set subId to this user.
 * Invalidate all existing JWT tokens
 *
 */
// userSchema.methods.setSubId = function () {
//   this.subId = new mongoose.Types.ObjectId().toHexString();
// };

/**
 * Set password to this user
 * The password will be hashed and assigned to hashedPassword field
 *
 * Call this function when updating the user password
 *
 * @param {Promise} password Resolve with null value
 */
userSchema.methods.setPasswordAsync = function (password) {
  const saltRounds = 10;
  return bcrypt.hash(password, saltRounds).then((hash) => {
    this.hashedPassword = hash;
  });
};

/**
 * Compare candidate password with the stored one
 *
 * @returns {Promise} Resolve with a boolean value
 */
userSchema.methods.comparePasswordAsync = function (candidatePassword) {
  if (!this.hashedPassword) {
    return Promise.resolve(false);
  }
  return bcrypt.compare(candidatePassword, this.hashedPassword);
};

/**
 * Generate JWT token for authentication
 *
 * @returns {object} An object contains JWT token and expiresAt (seconds) property
 */
userSchema.methods.generateJwtToken = function () {
  const iat = Math.floor(Date.now() / 1000);
  const expiresAt = iat + config.jwt.expiresIn;
  const token = jwt.sign(
    { userId: this._id, iat },
    config.jwt.secret,
    {
      algorithm: config.jwt.algorithm,
      expiresIn: config.jwt.expiresIn, // seconds
    }
  );
  return { token, expiresAt };
};

/**
 * Set token and token purpose field based on given token purpose
 *
 * @param {string} purpose The purpose of the token.
 */
userSchema.methods.setToken = function (purpose) {
  this.token = uuidv4();
  this.tokenPurpose = purpose;
};

/**
 * Clear token and token purpose field
 */
userSchema.methods.clearToken = function () {
  this.token = undefined;
  this.tokenPurpose = undefined;
};

/**
 * Determine whether this user has a permission
 * based on user role and user's permissions properties
 *
 * @param {string} permission A permission
 * @returns {boolean} true if this user has the given permission.
 * Otherwise, false
 */
userSchema.methods.hasPermission = function (permission, action) {
  if (this.role === 'admin' || this.role === 'super-admin') {
    return true;
  }
  return !!this.permissions[permission][action];
};

module.exports = mongoose.model('user', userSchema);
