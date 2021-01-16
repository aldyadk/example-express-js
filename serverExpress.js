const express = require('express')
const path = require('path')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.static('asset'))
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.listen(3000, function () {
    console.log('server jalan di PORT 3000 pake nodemon')
})

// app.get('/', function (req, res) {
//     console.log('ini request get',req.query)
//     res.send(`ini balikan dari server ${JSON.stringify(req.query)}`)
// })


app.get('/', function (req, res) {
    const file = path.join(__dirname,'pages','index.html')
    res.sendFile(file)
})

app.get('/about', function (req, res) {
    const file = path.join(__dirname,'pages','about.html')
    res.sendFile(file)
})

app.get('/contact', function (req, res) {
    const file = path.join(__dirname,'pages','contact.html')
    res.sendFile(file)
})

app.get('/list', function (req, res) {
    const file = path.join(__dirname,'pages','list.html')
    res.sendFile(file)
})

// app.get('/kucing', function (req, res) {
//     const file = path.join(__dirname,'asset','kucing.webp')
//     res.sendFile(file)
// })
// app.get('/kucing2', function (req, res) {
//     const file = path.join(__dirname,'asset','kucing2.jpg')
//     res.sendFile(file)
// })
// app.get('/kucing3', function (req, res) {
//     const file = path.join(__dirname,'asset','kucing3.png')
//     res.sendFile(file)
// })

app.get('/api/tes',function (req, res) {
    res.json({
        "result": true
    })
})

app.post('/api/question',function (req, res) {
    // do something
    res.json({
        "Nama Penanya": req.body.user_name,
        "Pertanyaan": req.body.question
    })
})