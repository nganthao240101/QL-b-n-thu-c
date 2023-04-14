const util = require("util");
const multer = require("multer");
const maxSize = 2 * 1024 * 1024;
var path = require("path");
let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public");
  },
  filename: (req, file, cb) => {
    console.log(file.originalname);
    cb(null, file.originalname);
  },
});

let uploadFile = multer({
  storage: storage,
  limits: { fileSize: maxSize },
});
module.exports = uploadFile;
