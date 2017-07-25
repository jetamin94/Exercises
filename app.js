// 5. Exercise - Request-Promise
const rp = require('request-promise')

var api_key = '2aba70b70fc744c2862647a3a9a62f9a'

var options = {
    uri: 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=' + api_key,
    json: true
}

rp(options)
    .then(function (response) {
        console.log(response)
    })
    .catch(function (err) {
        console.log(err)
    });


// 4. Exercise – Module
// const express = require('express')
// const path = require('path')
// const http = require('http')
// const moment = require('moment')
// const app = express()

// const main_controller = require('./controllers/mainController')
// app.get('/', main_controller.get_message)

// console.log(moment().format())

// app.use(express.static('public'))

// app.listen(3000, function () {
//     console.log('My Server running at http://localhost:3000')
// })

// 2,3. Exercise - Create a server
// const http = require('http')
// const path = require('path')
// const fs = require('fs')
// const app = require('express')()
// const moment = require('moment')

// app.set('views', path.join(__dirname, 'views'))
// app.set('view engine', 'pug')


// console.log(moment().format())

// app.listen(3000, function () {
//     console.log('My Server running at http://localhost:3000')
//     console.log(__dirname)
//     var fileContents;
//     try {
//         fileContents = fs.readFileSync('input.txt');
//         console.log(fileContents.toString())
//     } catch (err) {
//         err.status = 404
//         console.log(err)
//     }
// })

// app.get('/', function (req, res) {
//     res.send('Hello World!')
// })

// app.get('/nodetest', function (req, res) {
//     res.render('nodetest')
// })

// app.get('/about', function (req, res) {
//     res.render('nodetest')
// })

// app.get('/:mess', function (req, res, next) {
//     if (req.params.mess == 'nodejsfresher') {
//         res.render('index', { message: req.params.mess })
//     }
//     else next()
// })

// app.use(function (req, res, next) {
//     res.status(404);
//     res.render('err')
// });

// 1. Exercise - Node Console
// console.log('hello world')
// console.log('there are ' + 60 * 60 * 24 * 365 + ' seconds in a year')
// const timeTillChristmas = () => {
//     let today = new Date();
//     let christmas = new Date(today.getFullYear(), 11, 25)
//     let time = 0
//     let day = 1000*60*60*24
//     if(today.getMonth() == 11 && today.getDate() >=25){
//         christmas.setFullYear(christmas.getFullYear() + 1)
//     }
//     time = Math.floor((christmas.getTime() - today.getTime())/day)
//     return time
// }
// console.log(timeTillChristmas() + ' Days left until Christmas!')