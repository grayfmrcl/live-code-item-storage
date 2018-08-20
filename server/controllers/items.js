const Item = require('../models/item')

module.exports = {
  search: (req, res, next) => {
    res.send('search item')
  },

  create: (req, res, next) => {
    const { name, price, stock, tags } = req.body

    Item.create({ name, price, stock, tags })
      .then(new_item => {
        res.status(201).json(new_item.getInfo())
      })
      .catch(err => {
        res.status(400).json({ message: 'fail create item' })
      })
  }
}