const express = require('express')
const pgp = require('pg-promise')();

const app = express()
const port = 3000


const connectionConfig = {
  host: 'localhost',
  port: '5432',
  database: 'wehikulczasu',
  user: 'marcin',
  password: 'Calendar2023'
};

const db = pgp( connectionConfig);

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.get('/', (req, res) => {
  res.render('index.html', { title: 'Express with EJS' });
})

app.get('/game', async (req, res) => {
  const encodedPath = encodeURIComponent('images/example.jpg');
  const data = await db.one('select path from images order by random() limit 1')
  res.render('game.html', { title: 'gra', image: 'images/example.jpg' });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})