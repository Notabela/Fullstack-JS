import config from './config'
import express from 'express'

const server = express()

server.get('/', (req, res) => {
    res.render('index', {
        content: 'Hello Express and EJS!'
    })
})

server.set('view engine', 'ejs')


server.use(express.static('public'))
server.listen(config.port, () => {
    console.info('Express listening on port', config.port)
})