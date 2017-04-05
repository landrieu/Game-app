

const express = require('express');
var router = express.Router();
const cors = require('cors');
const multer = require('multer');
const path = require('path');
 
const app = express();
app.use(cors());
 
const upload = multer({
  dest: 'uploads/',
  storage: multer.diskStorage({
    filename: (req, file, cb) => {
      let ext = path.extname(file.originalname);
      cb(null, `${Math.random().toString(36).substring(7)}${ext}`);
    }
  })
});
 
app.post('/upload', upload.any(), (req, res) => {
  res.json(req.files.map(file => {
    let ext = path.extname(file.originalname);
    return {
      originalName: file.originalname,
      filename: file.filename
    }
  }));
});

 

module.exports=router;


 

 
