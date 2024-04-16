// upload.js

const path = require('path');

const multer = require('multer');
// 设置存储配置
const storage = multer.diskStorage({
  // 定义文件保存的目录
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '..', 'public', 'uploads'));
    console.log(path.join(__dirname, '..', 'public', 'uploads'));
  },  
  // 定义文件的命名规则
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 1024 * 1024 * 5 }, // 限制为5MB
    fileFilter: (req, file, cb) => {
      if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true); // 接受这个文件
      } else {
        cb(new Error('Only .jpeg or .png files are allowed!'), false); // 拒绝这个文件，并提供错误信息
      }
    }
  });

module.exports = upload;
  
