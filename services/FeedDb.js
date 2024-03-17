const Message = require("../models/Message");
const readXlsxFile = require("read-excel-file/node");
const fs = require("fs");
const User = require("../models/User");

async function batchInsertFromFile() {
  const users = (
    await readXlsxFile(fs.createReadStream("seeds.xlsx"), {
      sheet: 1,
    })
  ).map((row) => ({
    id: row[0],
    firstName: row[1],
    lastName: row[2],
    birthday: row[3],
    gender: row[4],
    username: row[5],
  }));

  await User.bulkCreate(users);
  const messages = (
    await readXlsxFile(fs.createReadStream("seeds.xlsx"), {
      sheet: 2,
    })
  ).map((row) => ({
    id: row[0],
    content: row[1],
    sender: row[2],
    receiver: row[3],
    seen: row[4],
    timestampSent: row[5],
  }));
  await Message.bulkCreate(messages);
}

module.exports = { batchInsertFromFile };
