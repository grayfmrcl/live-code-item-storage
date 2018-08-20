const router = require('express').Router()

router.get('/', (req, res) => {
  res.status(200).json({ message: 'connected to item-storage' })
})

module.exports = router