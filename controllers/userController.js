const sequelize = require("../db_config");
const Message = require("../models/Message");
const User = require("../models/User");
const { Op, QueryTypes } = require("sequelize");

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

/**
 * Get users that have had a conversation with userId
 *  @param {number} userId
 */
function conversedWith(userId) {
  return sequelize.query(
    `SELECT u.id,
              u.first_name,
              u.last_name,
              u.birthday,
              u.gender,
              u.username,
              MAX(latest_interaction) AS latest_interaction
       FROM users u
                JOIN (SELECT sender              AS user_id,
                             MAX(timestamp_sent) AS latest_interaction
                      FROM messages
                      WHERE receiver = :userId
                      GROUP BY sender
                      UNION ALL
                      SELECT receiver            AS user_id,
                             MAX(timestamp_sent) AS latest_interaction
                      FROM messages
                      WHERE sender = :userId
                      GROUP BY receiver) AS interactions ON u.id = interactions.user_id
       GROUP BY u.id
       ORDER BY MAX(latest_interaction) DESC`,
    {
      replacements: { userId: userId },
      type: QueryTypes.SELECT,
      model: User,
      mapToModel: true,
    },
  );
}

exports.byPredicate = async (req, res) => {
  const users = await byPredicate(req.query);
  res.status(200).json(users);
};

exports.conversedWith = async (req, res) => {
  const users = await conversedWith(req.params.userId);
  console.log(users);
  res.status(200).json(users);
};
