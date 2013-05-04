# fps #

A little module for measuring FPS (frames per second) rates in the browser
and Node. Note that this module only covers measuring and not display, so
if you're looking for something more "plug and play" you should try
[stats.js](https://github.com/mrdoob/stats.js/) or
[FPSMeter](http://darsa.in/fpsmeter/).

## Installation ##

``` bash
npm install fps
```

## Usage ##

``` javascript
var fps = require('fps')
var ticker = fps({
    every: 10   // update every 10 frames
})

setInterval(function() {
  ticker.tick()
}, 1000 / 60)

var element = document.getElementById('fps')
ticker.on('data', function(framerate) {
  fps.innerHTML = String(framerate)
})
```

**ticker = require('fps')([options])**

Returns a new FPS monitor. Takes the following options:

* `every`: how many frames to tick before emitting. Defaults to 1.
* `decay`: the rate of change between old and new results. 1 is instantaneous,
  0 is never.

**ticker.tick()**

Call this method at the beginning of each frame to update the measurements and
emit new results.

**ticker.on('data', callback)**

Called when periodically for every `options.every` ticks.

**ticker.rate**

The current framerate can be accessed directly here.
