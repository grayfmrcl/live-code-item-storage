const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const routers = require('./routers')

const app = express()
const port = process.env.PORT || 3000

mongoose.connect('mongodb://127.0.0.1/item-storage', { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('db connected!')
});

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

app.use('/', routers)

app.listen(port, () => console.log('listening to port 3000'))