const express = require('express')
const handler = require('./api/index')
require('dotenv').config()
const app = express()
const port = process.env.APP_PORT || 3033
const host = process.env.APP_HOST || 'localhost'

app.get('/:title', (req: any, res: any) => {
    handler.default(req, res)
})

app.listen(port, host, () => {
    console.log(`listening on ${host}:${port}`)
})