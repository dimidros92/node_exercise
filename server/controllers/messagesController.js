const Message = require("../models/Message");
const { Op } = require("sequelize");

/**
 * Get messages exchanged by two users
 * @param(number[])
 */
function byUsers(users) {
  let where = {
    [Op.or]: [
      {
        [Op.and]: [{ sender: users[0] }, { receiver: users[1] }],
      },
      {
        [Op.and]: [{ sender: users[1] }, { receiver: users[0] }],
      },
    ],
  };
  return Message.findAll({ where, order: [["timestampSent", "DESC"]] });
}

exports.byUsers = async (req, res) => {
  const messages = await byUsers(req.query.users);
  res.status(200).json(messages);
};
