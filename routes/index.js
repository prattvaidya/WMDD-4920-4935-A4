const express = require('express')
const router = express.Router()

const songRouter = require('./songs.js')
const albumsRouter = require('./albums.js')

router.use('/songs', songRouter)
router.use('/albums', albumsRouter)

module.exports = router