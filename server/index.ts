const express = require('express')
const handler = require('./api/index')
const app = express()
const port = 3033

app.get('/:title', (req: any, res: any) => {
    handler.default(req, res)
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})