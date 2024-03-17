const User = require("../models/User");
const { Op, fn, col } = require("sequelize");
/**
 * Get users by predicate
 *  @param {object} predicate
 *  @param {number} predicate.id
 *  @param {string} predicate.firstName
 *  @param {string} predicate.lastName
 *  @param {Date} predicate.birthday
 *  @param {string} predicate.gender
 *  @param {string} predicate.username
 */
function byPredicate(predicate) {
  let where = {};

  if (predicate.id) {
    where.id = predicate.id;
  }
  if (predicate.firstName) {
    where.firstName = {
      [Op.iLike]: "%" + predicate.firstName + "%",
    };
  }
  if (predicate.lastName) {
    where.lastName = {
      [Op.iLike]: "%" + predicate.lastName + "%",
    };
  }
  if (predicate.birthday) {
    where.birthday = predicate.birthday;
  }
  if (predicate.gender) {
    where.gender = predicate.gender;
  }

  if (predicate.username) {
    where.username = {
      [Sequelize.Op.iLike]: "%" + predicate.username + "%",
    };
  }
  return User.findAll({ where });
}

module.exports = { byPredicate };
