const jwt = require('jsonwebtoken')

const User = require('../models/user')

module.exports = {
  register: (req, res, next) => {
    const { username, password } = req.body
    User.create({
      username,
      password
    })
      .then(new_user => {
        res.status(201).json({
          success: true,
          message: `Account ${new_user.username} registered`
        })
      })
      .catch(err => {
        console.log(err)
        res.status(400).json({
          success: false,
          message: 'Failed to registered'
        })
      })
  },
  requestToken: (req, res, next) => {
    const { username, password } = req.body
    User.findOne({ username: username })
      .then(user => {
        if (user && user.password == password) {
          jwt.sign(user.id, process.env.JWT_SECRET, (err, token) => {
            if (err) { console.log(err) }
            else {
              res.status(201).json({ token })
            }
          })
        } else {
          res.status(400).json({ message: 'invalid username/password' })
        }
      })
      .catch(err => res.status(400).json({ message: 'failed to request token' }))
  }
}