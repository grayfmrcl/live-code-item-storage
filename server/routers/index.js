const router = require('express').Router()
const jwt = require('jsonwebtoken')

const items = require('../controllers/items')
const users = require('../controllers/user')

const authenticate = (req, res, next) => {
  if (req.headers['authorization']) {
    let tokens = req.headers['authorization'].split(' ')
    console.log("tokens", tokens)
    if (tokens[0].toLowerCase() == 'basic') {
      jwt.verify(tokens[1], process.env.JWT_SECRET, (err, decoded) => {
        if (!err && decoded) {
          req.user = decoded
          next()
        } else {
          console.log(err)
          res.status(400).json({ "error": "You are not authorized to access this API" })
        }
      })
    }
  } else {
    res.status(400).json({ "error": "You are not authorized to access this API" })
  }
}

router.get('/', items.search)
router.post('/items', authenticate, items.create)
router.post('/register', users.register)
router.post('/request_token', users.requestToken)
module.exports = router