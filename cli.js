#!/usr/bin/env node
var fs = require('fs')
var concat = require('concat-stream')

var md = require('./')

var input = process.argv.length > 2
      ? fs.createReadStream(process.argv[2])
      : process.stdin

input.pipe(concat(function (markdown) {
  process.stdout.write(md(markdown.toString()))
}))
