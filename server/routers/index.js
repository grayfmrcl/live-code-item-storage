const router = require('express').Router()

const items = require('../controllers/items')

router.get('/', items.search)
router.post('/items', items.create)

module.exports = router