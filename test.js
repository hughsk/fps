var test = require('tape')
  , fps = require('./')

test('10 fps', function(t) {
  t.plan(1)

  var ticker = fps()
  var n = 10

  var interval = setInterval(function() {
    if (n--) return ticker.tick()
    t.equal(Math.round(ticker.rate), 10)
    clearInterval(interval)
  }, 100)
})

test('60 fps', function(t) {
  t.plan(1)

  var ticker = fps()
  var n = 10

  var interval = setInterval(function() {
    if (n--) return ticker.tick()
    // +new Date isn't 100% accurate, and performance.now
    // isn't available in Node.
    t.ok(Math.abs(Math.round(ticker.rate) - 60) < 4)
    clearInterval(interval)
  }, 1000 / 60)
})

test('options: every', function(t) {
  t.plan(3)

  var ticker = fps({ every: 5 })
  var n = 11
  var a = 0

  var interval = setInterval(function() {
    if (n--) return ticker.tick()
    t.equal(a, 2)
    clearInterval(interval)
  }, 100)

  ticker.on('data', function() {
    t.equal(n % 5, 1)
    a += 1
  })
})
