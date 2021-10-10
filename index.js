'use strict'

let stream = require('stream')

if (~process.version.indexOf('v0.8.')) {
  stream = require('readable-stream')
}

module.exports = stream
