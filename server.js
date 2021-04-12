import config from './config'
import express from 'express'
import sassMiddleware from 'node-sass-middleware'
import path from 'path'
import apiRouter from './api'

const server = express()

import serverRender from './serverRenders'

server.get('/', (req, res) => {
    serverRender()
    .then( content => {
        res.render('index', {content})
    })
    .catch(console.error)
})

server.use(sassMiddleware({
    src: path.join(__dirname, 'sass'),
    dest: path.join(__dirname, 'public')
}))
server.set('view engine', 'ejs')
server.use(express.static('public'))
server.use('/api', apiRouter)

server.listen(config.port, config.host, () => {
    console.info('Express listening on port', config.port)
})