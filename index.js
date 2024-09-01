const express = require('express')

const app = express()
app.use(express.json())

app.get('/test', (req, res) => {
    res.send({app : "work"})
    res.end()
})

app.listen(process.env.PORT || 3000)