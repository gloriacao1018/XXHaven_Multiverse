//server.js 

const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const mongoose = require('mongoose');

const app = express();
const upload = require('./upload');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB 连接字符串
const db = 'mongodb+srv://KitKatGo-chai:kitkatgochai@cluster0.xnn1ffb.mongodb.net/KitKatGo?retryWrites=true&w=majority&appName=Cluster0';

// 连接 MongoDB
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// 定义数据模型
const GameSchema = new mongoose.Schema({
  backgroundImage: String,
  items: [String],
  characters: [{
    image: String,
    items: [String],
  }],
  timerLength: Number,
  winnerScenarios: [String],
});

const Game = mongoose.model('Game', GameSchema);

// 路由来接收数据和文件
app.post('/submit-game', upload.array('images'), (req, res) => {
  // 这里处理上传的数据和文件
  // req.body 会包含文本字段，req.files 包含文件
  // 根据需要保存到数据库

  const { timerLength, winnerScenario, winnerScenario2, winnerScenario3 } = req.body;
  const newGame = new Game({
    // 根据您的需求设置字段
    timerLength,
    winnerScenarios: [winnerScenario, winnerScenario2, winnerScenario3],
    // 处理和保存文件和其他数据...
  });

  newGame.save()
    .then(game => res.json(game))
    .catch(err => res.status(400).json('Error: ' + err));
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
