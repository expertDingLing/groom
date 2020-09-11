const mongoose = require('mongoose');
const chalk = require('chalk');

const { usersSeed } = require('../database/seeds/users')

/**
 * @function createUsers
 * Seed the given list of users
 *
 * @param {string} users The array of user info to be created
 * @returns {Promise} Resolve with a list of newly added users
 */
module.exports.createUsers = () => {

  const User = mongoose.model('user');
  let addedUsers = [];

  return usersSeed
    .reduce((sequence, userInfo) => {
      return sequence
        .then(() => {
          return User.findOne({
            $or: [{ username: userInfo.username }, { email: userInfo.email }],
          });
        })
        .then((existingUser) => {
          if (existingUser) {
            throw new Error(
              chalk.yellow(
                `[-] [Warning] Database seeding: Email (${userInfo.email}) or username (${userInfo.username}) already in use.`
              )
            );
          }
          const user = new User(userInfo);
          // user.setSubId();
          return user.setPasswordAsync(userInfo.password).then(() => {
            return user.save();
          });
        })
        .then((user) => {
            console.log(
              chalk.green(
                `[+] Database Seeding: A new user added (${userInfo.username} - ${userInfo.email} - ${userInfo.password})`
              )
            );
          addedUsers.push(user);
        })
        .catch((err) => {
            console.log(err.message);
        });
    }, Promise.resolve())
    .then(() => Promise.resolve(addedUsers));
};
