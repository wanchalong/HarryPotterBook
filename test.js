var Nightmare = require('nightmare')
var nightmare = Nightmare({show: true, paths: {userData: './public/index.html'}})

nightmare
  .goto('http://localhost:8000/')
  .wait('#book1')
  .click('#book1')
  .click('#book1')
  .click('#book1')
  .wait(1000)
  .click('#book2')
  .click('#book2')
  .click('#book2')
  .click('#book4')
  .wait(1000)
  .click('#cart')
  .wait(4000)
  .click('#delete3')
  .wait(4000)
  .evaluate(function () {
    return document.querySelector('#total').innerHTML
  })
  .end()
  .then(function (result) {
    if (result === '540') {
      console.log(true)
    }else {
      console.log(false)
    }
  })
