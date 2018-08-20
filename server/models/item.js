const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
  user: { type: String },
  name: String,
  price: Number,
  stock: Number,
  tags: [{ type: String }]
})

itemSchema.methods.getInfo = function () {
  const { user, name, price, stock, tags } = this
  return { user, name, price, stock, tags }
}

module.exports = mongoose.model('item', itemSchema)