const Joi = require('joi');
// const email = require('../core/sendgrid');
const constants = require('../../constants');

var UserModel = require('../../database/models/user.model');

var BaseController = require('./BaseController');
var View = require('../../views/base');

const signInSchema = Joi.object({
    username: Joi.string()
        .pattern(/^[a-zA-Z0-9.\-_]{4,30}$/)
        .messages(constants.USERNAME_ERROR_MESSAGE),
    email: Joi.string().email().messages(constants.EMAIL_ERROR_MESSAGES),
    password: Joi.string().required().messages(constants.PASSWORD_ERROR_MESSAGES),
})
    .xor('username', 'email')
    .messages({ 'object.missing': 'Either username or email must be provided' });

const createSignInResponse = (user, provider) => {
    return {
        ...user.generateJwtToken(),
        signedInWith: provider,
        user: user.toJsonFor(user),
    };
};

// const signUpSchema = Joi.object({
//     username: Joi.string()
//         .required()
//         .pattern(/^[a-zA-Z0-9.\-_]{4,30}$/)
//         .messages(constants.username_ERROR_MESSAGE),
//     email: Joi.string()
//         .required()
//         .email()
//         .messages(constants.EMAIL_ERROR_MESSAGES),
//     password: Joi.string()
//         .required()
//         .min(8)
//         .messages(constants.PASSWORD_ERROR_MESSAGES),
// });

// const resetPasswordSchema = Joi.object({
//     email: Joi.string()
//         .required()
//         .email()
//         .messages(constants.EMAIL_ERROR_MESSAGES),
//     password: Joi.string()
//         .required()
//         .min(8)
//         .messages(constants.PASSWORD_ERROR_MESSAGES),
// });


// const sendVerificationEmailAsync = (user) => {
//     return sendEmailHelperAsync(
//         user,
//         'Verify your email',
//         `Welcome to ${config.app.title}`,
//         'Before you can start using your account, please verify it by following the link below:',
//         'Verify Email',
//         `${config.server.publicUrl}/verify-email/${user.token}` // FIXME: fix port number
//     );
// };

// const sendEmailHelperAsync = (
//     user,
//     subject,
//     title,
//     content,
//     buttonText,
//     url
// ) => {
//     return email.send({
//         to: user.email,
//         from: `${config.app.title} <${config.email.from}>`,
//         subject: `${config.app.title} - ${subject}`,
//         templatePath: `${config.paths.root}/templates/email.html`,
//         dynamicTemplateData: {
//             boxTitle: title,
//             first_name: user.first_name,
//             content,
//             buttonText,
//             url,
//             signature: config.email.signature,
//         },
//     });
// };



module.exports = BaseController.extend({
    name: 'AuthController',

    login: async function (req, res) {
        let v;
        v = new View(res, 'pages/auth/login');
        v.render({
            title: 'Sign In',
            session: req.session,
            error: req.flash("error"),
            success: req.flash("success"),
        });
    },

    // register: async function (req, res) {
    //     let v;
    //     if (this.isLogin(req)) {
    //         return res.redirect('/dashboard');
    //     }
    //     v = new View(res, 'auth/register');
    //     v.render({
    //         title: 'Sign Up',
    //         session: req.session,
    //         error: req.flash("error"),
    //         success: req.flash("success"),
    //     })
    // },

    validateLocalSignInPayload: function (req, res, next) {
        signInSchema
            .validateAsync(req.body)
            .then((payload) => {
                req.body = payload;
                req.body.usernameOrEmail = req.body.username || req.body.email;
                next();
            })
            .catch((error) => {
                req.flash('error', error.details[0].message)
                next();
            });
    },

    localSignIn: async function (req, res, next) {
        if (req.user) {
            var signinData = createSignInResponse(req.user, 'local');

            var userInfo = await UserModel.findOne({ username: req.user.username });

            if (userInfo.status != 'active') {
                req.flash('error', 'Your account does not be activated, it should be activated by admin');
                return res.redirect('/auth/login');
            }

            //Set Login Number
            let logincnt = (userInfo.loginCount) ? userInfo.loginCount : 0;
            userInfo.loginCount = logincnt + 1;
            userInfo.ipAddress = this.getClientIp(req);
            await userInfo.save();

            req.session.login = true;
            req.session.user = userInfo;
            req.session.signinData = signinData;
            await req.session.save();

            let backURL = req.session.redirectTo || '/';
            delete req.session.redirectTo;

            return res.redirect(backURL);
        }
    },

    // signUp: async function (req, res, next) {
    //     let newUser;
    //     let isOauthAccount = false;
    //     signUpSchema
    //         .validateAsync(req.body)
    //         .then((payload) => {
    //             req.body = payload;
    //             return User.findOne({
    //                 $or: [{ email: payload.email }, { username: payload.username }],
    //             });
    //         })
    //         .then((existingUser) => {
    //             if (existingUser) {
    //                 if (existingUser.email === req.body.email) {
    //                     if (existingUser.provider.local) {
    //                         req.flash('error', 'Email is already in use');
    //                         return res.redirect('/auth/register');
    //                     } else {
    //                         newUser = existingUser;
    //                         isOauthAccount = true;
    //                     }
    //                 } else {
    //                     req.flash('error', 'Username is already in use');
    //                     return res.redirect('/auth/register');
    //                 }
    //             } else {
    //                 newUser = new User(req.body);
    //                 newUser.setSubId();
    //             }

    //             newUser.provider.local = {
    //                 userId: newUser._id,
    //                 picture: '/assets/images/dashboard/man.jpg'
    //             };
    //             return newUser.setPasswordAsync(req.body.password);
    //         })
    //         .then(() => {
    //             if (config.auth.verifyEmail && !isOauthAccount) {
    //                 newUser.setToken('verify-email');
    //                 newUser.status = 'unverified-email';
    //             }
    //             return newUser.save();
    //         })
    //         .then((user) => {
    //             if (config.auth.verifyEmail && !isOauthAccount) {
    //                 return sendVerificationEmailAsync(user).then((result) => {
    //                     req.flash('success', 'A verification email has been sent to your email');
    //                     return res.redirect('/auth/register');
    //                 });
    //             }

    //             req.flash('success', 'Your account has been created successfully');
    //             return res.redirect('/auth/login');
    //         })
    //         .catch((e) => {
    //             var messages = [];
    //             e.details.map(function (detail) {
    //                 messages.push(detail.message);
    //             })
    //             console.log('-- e : ', messages.join('\n'))
    //             req.flash('error', messages.join('\n'));
    //             return res.redirect('/auth/login');
    //         });
    // },

    // verifyEmail: (req, res, next) => {
    //     if (!config.auth.verifyEmail) {
    //         req.flash('error', 'Email verification functionality is not available');
    //         return res.redirect('/auth/register');
    //     }

    //     if (!req.params.token) {
    //         req.flash('error', 'No token provided');
    //         return res.redirect('/auth/register');
    //     }

    //     return User.findOne({
    //         token: req.params.token,
    //         token_purpose: 'verify-email',
    //     })
    //         .then((user) => {
    //             if (!user) {
    //                 req.flash('error', 'Token expired');
    //                 return res.redirect('/auth/register');
    //             }
    //             user.clearToken();
    //             user.status = 'active';
    //             return user.save();
    //         })
    //         .then((user) => {
    //             req.flash('success', "Email verified");
    //             return res.redirect('/auth/login');
    //         })
    //         .catch(next);
    // },

    logout: async function (req, res) {
        req.session.login = false;
        req.session.user = null;
        req.session.maxLoginCnt = null;
        await req.session.save();
        return res.redirect('/auth/login');
    },

    // showForgotPassword: async function (req, res) {
    //     let v;
    //     if (this.isLogin(req)) {
    //         return res.redirect('/dashboard');
    //     }
    //     v = new View(res, 'auth/forgot-password');
    //     v.render({
    //         title: 'Forgot Password',
    //         session: req.session,
    //         error: req.flash("error"),
    //         success: req.flash("success"),
    //     })
    // },

    // forgotPassword: (req, res, next) => {
    //     sendTokenSchema
    //         .validateAsync(req.body)
    //         .then((payload) => {
    //             req.body = payload;
    //             if (!config.auth.resetPassword) {
    //                 req.flash('error', 'Password reset functionality is not available');
    //                 return res.redirect('/auth/forgot-password');
    //             }

    //             User.findOne({ email: req.body.email })
    //                 .then((user) => {
    //                     if (!user) {
    //                         req.flash('error', 'Email not associated with any acount');
    //                         return res.redirect('/auth/forgot-password');
    //                     }
    //                     user.setToken(req.body.token_purpose);
    //                     return user.save();
    //                 })
    //                 .then((user) => {
    //                     return sendEmailHelperAsync(
    //                         user,
    //                         'Password reset',
    //                         'Password reset',
    //                         `Someone requested a new password for your ${config.app.title} account.
    //                         If this was you, click button below to reset your password.
    //                         Otherwise, ignore this email.`,
    //                         'Reset Password',
    //                         `${config.server.publicUrl}/reset-password/${user.token}` // FIXME: Fix port number
    //                     );
    //                 })
    //                 .then((result) => {
    //                     req.flash('success', 'A password-reset email has been sent to your email');
    //                     return res.redirect('/auth/forgot-password');
    //                 })
    //                 .catch(next);
    //         })
    //         .catch(next);
    // },

    // showResetPassword: async function (req, res, next) {
    //     let token, userinfo;
    //     token = req.params.token;
    //     userinfo = await UserModel.findOne({ token: token });
    //     if (userinfo != null) {
    //         var v = new View(res, 'auth/change-password');
    //         v.render({
    //             token: token,
    //             session: req.session,
    //             error: req.flash("error"),
    //             success: req.flash("success"),
    //             title: 'Change Password'
    //         });
    //     } else {
    //         return res.redirect('/auth/login');
    //     }
    // },

    // resetPassword: async function (req, res, next) {
    //     if (!config.auth.resetPassword) {
    //         req.flash('error', 'Password reset functionality is not available');
    //         return res.redirect('/auth/forgot-password');
    //     }

    //     if (!req.params.token) {
    //         req.flash('error', 'Password reset functionality is not available');
    //         return res.redirect('/auth/forgot-password');
    //     }

    //     let existingUser;

    //     resetPasswordSchema
    //         .validateAsync(req.body)
    //         .then((payload) => {
    //             req.body = payload;

    //             return User.findOne({
    //                 email: req.body.email,
    //                 token: req.params.token,
    //                 token_purpose: 'reset-password',
    //             });
    //         })
    //         .then((user) => {
    //             existingUser = user;
    //             if (!existingUser) {
    //                 req.flash('error', 'Token expired');
    //                 return res.redirect('/auth/forgot-password');
    //             }
    //             existingUser.clearToken();
    //             existingUser.setSubId(); // invalidate all issued JWT tokens
    //             return existingUser.setPasswordAsync(req.body.password);
    //         })
    //         .then(() => {
    //             return existingUser.save();
    //         })
    //         .then((user) => {
    //             req.flash("success", 'New password set successfully.');
    //             return res.redirect('/auth/login');
    //         })
    //         .catch(next);
    // },
});