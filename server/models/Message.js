const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../db_config");
const User = require("./User");

const Message = sequelize.define(
  "Message",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sender: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    receiver: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    seen: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    timestampSent: {
      type: DataTypes.DATE,
      allowNull: false,
      field: "timestamp_sent",
      defaultValue: Sequelize.NOW,
    },
  },
  { tableName: "messages", timestamps: false },
);
module.exports = Message;
