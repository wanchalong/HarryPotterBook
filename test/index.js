/* global describe,it*/
require('mocha-generators').install()
var Nightmare = require('nightmare')
var expect = require('chai').expect

describe('test by book', function () {
  it('Case 1 : Select Book1-7 Pay Money', function * () {
    this.timeout(30000)
    var nightmare = Nightmare()
    var link = yield nightmare
      .goto('http://localhost:5000')
      .click('#book1')
      .click('#book2')
      .click('#book3')
      .click('#book4')
      .click('#book5')
      .click('#book6')
      .click('#book7')
      .evaluate(function () {
        return document.querySelector('#total').innerHTML
      })
    expect(link).to.equal('280')
  })
  it('Case 2 : Select Book1-7 Discount price', function * () {
    this.timeout(30000)
    var nightmare = Nightmare()
    var link = yield nightmare
      .goto('http://localhost:5000')
      .click('#book1')
      .click('#book2')
      .click('#book3')
      .click('#book4')
      .click('#book5')
      .click('#book6')
      .click('#book7')
      .evaluate(function () {
        return document.querySelector('#discount').innerHTML
      })
    expect(link).to.equal('420')
  })
  it('Case 3 : Select Book1 2 picec Book2 2 picec Book3 2 picec Pay Money', function * () {
    this.timeout(30000)
    var nightmare = Nightmare()
    var link = yield nightmare
      .goto('http://localhost:5000')
      .click('#book1')
      .click('#book1')
      .click('#book2')
      .click('#book2')
      .click('#book3')
      .click('#book3')
      .evaluate(function () {
        return document.querySelector('#total').innerHTML
      })
    expect(link).to.equal('480')
  })

  it('Case 4 : Select Book1 1 picec Book2 2 picec Book3 3 picec', function * () {
    this.timeout(30000)
    var nightmare = Nightmare()
    var link = yield nightmare
      .goto('http://localhost:5000')
      .click('#book1')
      .click('#book2')
      .click('#book2')
      .click('#book3')
      .click('#book3')
      .click('#book3')
      .evaluate(function () {
        return document.querySelector('#total').innerHTML
      })
    expect(link).to.equal('520')
  })

  it('Case 5 : Select Book1 1 picec Book2 2 picec Book3 3 picec Discount price', function * () {
    this.timeout(30000)
    var nightmare = Nightmare()
    var link = yield nightmare
      .goto('http://localhost:5000')
      .click('#book1')
      .click('#book2')
      .click('#book2')
      .click('#book3')
      .click('#book3')
      .click('#book3')
      .evaluate(function () {
        return document.querySelector('#discount').innerHTML
      })
    expect(link).to.equal('80')
  })
})
