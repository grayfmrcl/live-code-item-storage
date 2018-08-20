const Item = require('../models/item')

module.exports = {
  search: (req, res, next) => {
    let param_name = req.query.name || ''
    let param_price = req.query.price_start || 0
    let param_tag = req.query.tag || ''

    Item.find({
      name: { $regex: new RegExp(`(?=.*${param_name})(?!.*help)(.+)`, "i") },
      price: { $gt: param_price },
      tags: { $regex: new RegExp(`(?=.*${param_tag})(?!.*help)(.+)`, "i") }
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