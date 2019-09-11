const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('你好 师姐!'))
app.get('/login', (req, res) => res.send('真是有够好笑的呢!'))


app.listen(port, () => console.log(`Example app listening on port ${port}!`)) 