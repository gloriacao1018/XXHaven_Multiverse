//server.js 

// 引入必要的模块
const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

// 初始化Express应用
const app = express();

// 配置CORS策略允许来自指定源的跨域请求
app.use(cors({
  origin: 'http://localhost:3000'
}));

// 设置请求体解析中间件
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 引入文件上传配置模块
const upload = require('./upload');

// 设置静态文件服务目录
app.use(express.static(path.join(__dirname, '..', 'public')));

// 设置EJS为模板引擎并配置视图文件的目录
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

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
    accepting: [String], // 使用accepting数组替代原来的items数组，直接存储可接受的物品名称
  }],
  timerLength: Number,
  winnerScenarios: [String],
});

const Game = mongoose.model('Game', GameSchema);

// 路由来接收数据和文件
app.post('/submit-game', upload.fields([
  { name: 'backgroundImage' },
  { name: 'item1' },
  { name: 'item2' },
  { name: 'item3' },
  { name: 'item4' },
  { name: 'character1' },
  { name: 'character2' },
  { name: 'character3' },
  { name: 'character4' },
  { name: 'character1Items' },
  { name: 'character2Items' },
  { name: 'character3Items' },
  { name: 'character4Items' },
  { name: 'timerLength' },
  { name: 'winnerScenario1' },
  { name: 'winnerScenario2' },
  { name: 'winnerScenario3' },
]), (req, res) => {
  // req.files将包含文件的信息
  console.log(req.body); // 打印请求体
  // req.body将包含非文件的表单字段

  // 访问非文件数据
  const timerLength = req.body.timerLength;
  const winnerScenario1 = req.body.winnerScenario1;
  const winnerScenario2 = req.body.winnerScenario2;
  const winnerScenario3 = req.body.winnerScenario3;
  const character1Items = req.body.character1Items;
  const character2Items = req.body.character2Items;
  const character3Items = req.body.character3Items;
  const character4Items = req.body.character4Items;

  // 访问文件数据
  const backgroundImage = req.files['backgroundImage'] ? req.files['backgroundImage'][0].path : '';
  const item1 = req.files['item1'] ? req.files['item1'][0].path : '';
  const item2 = req.files['item2'] ? req.files['item2'][0].path : '';
  const item3 = req.files['item3'] ? req.files['item3'][0].path : '';
  const item4 = req.files['item4'] ? req.files['item4'][0].path : '';
  const character1 = req.files['character1'] ? req.files['character1'][0].path : '';
  const character2 = req.files['character2'] ? req.files['character2'][0].path : '';
  const character3 = req.files['character3'] ? req.files['character3'][0].path : '';
  const character4 = req.files['character4'] ? req.files['character4'][0].path : '';

  // 你可以在这里创建一个新的游戏对象
  // 确保你的游戏模型与你期望的数据结构匹配
  const GameData = {
    backgroundImage: req.files['backgroundImage'] ? req.files['backgroundImage'][0].path : '',
    items: [
      req.files['item1'] ? req.files['item1'][0].path : '',
      req.files['item2'] ? req.files['item2'][0].path : '',
      req.files['item3'] ? req.files['item3'][0].path : '',
      req.files['item4'] ? req.files['item4'][0].path : '',
    ],
    characters: [
      {
        image: req.files['character1'] ? req.files['character1'][0].path : '',
        accepting: req.body['character1Items'] ? req.body['character1Items'].split(',') : []
      },
      {
        image: req.files['character2'] ? req.files['character2'][0].path : '',
        accepting: req.body['character2Items'] ? req.body['character2Items'].split(',') : []
      },
      {
        image: req.files['character3'] ? req.files['character3'][0].path : '',
        accepting: req.body['character3Items'] ? req.body['character3Items'].split(',') : []
      },
      {
        image: req.files['character4'] ? req.files['character4'][0].path : '',
        accepting: req.body['character4Items'] ? req.body['character4Items'].split(',') : []
      }
    ],
    timerLength: req.body.timerLength,
    winnerScenarios: [
      req.body.winnerScenario1,
      req.body.winnerScenario2,
      req.body.winnerScenario3,
    ]
  };
  

  const newGame = new Game(GameData);

//   newGame.save()
//     .then(game => res.json(game))
//     .catch(err => res.status(400).json('Error: ' + err));

newGame.save()
  .then(game => {
    // 返回保存的游戏数据给前端
    res.json(game);
    // 这里的 `game` 是保存到数据库后的游戏实例，它包含了所有保存的数据及其数据库ID等
  })
  .catch(err => res.status(400).json('Error: ' + err));
});

// 删除游戏的API
app.delete('/delete-game/:id', async (req, res) => {
  try {
    const result = await Game.findByIdAndDelete(req.params.id);
    if (result) res.send({ message: 'Game deleted successfully' });
    else res.status(404).send({ message: 'Game not found' });
  } catch (error) {
    res.status(500).send({ message: 'Error deleting game' });
  }
});

// 获取游戏的API
app.get('/play-game/:id', async (req, res) => {
  try {
    const game = await Game.findById(req.params.id);
    if (game) {
      // 使用EJS模板渲染页面，传入游戏数据
      res.render('GameTemplate', { game: game });
    } else {
      res.status(404).send('Game not found');
    }
  } catch (error) {
    res.status(500).send('Error fetching game');
  }
});


// 启动服务器监听端口
const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});