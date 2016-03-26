/* global describe,it*/
require('mocha-generators').install()
var Nightmare = require('nightmare')
var expect = require('chai').expect

describe('test by book', function () {
  it('Select Book1', function * () {
    this.timeout(30000)
    var nightmare = Nightmare()
    var link = yield nightmare
      .goto('http://localhost:5000')
      .click('#book1')

      .evaluate(function () {
        return document.querySelector('#total').innerHTML
      })
    expect(link).to.equal('100')
  })
})
