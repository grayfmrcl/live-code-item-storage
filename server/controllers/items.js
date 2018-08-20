const Item = require('../models/item')

module.exports = {
  search: (req, res, next) => {
    const { name, price_start, tag } = req.query
    Item.find({
      // $or: [
      //   { name: { $regex: new RegExp(`(?=.*${name})(?!.*help)(.+)`, "i") } },
      //   { price_start: price_start || 0 },
      //   { tags: { $in: tags } }
      // ]
    })
      .then(items => {
        res.status(200).json(items)
      })
      .catch(err => {
        console.log(err)
        res.status(400).json({ message: 'fail search items' })
      })
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