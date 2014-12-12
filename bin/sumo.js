#!/usr/bin/env node

var sumo = require('..')({
  user: process.env.SUMOLOGIC_USER,
  pass: process.env.SUMOLOGIC_PASS
});

var args = require('minimist')(process.argv.slice(2));

var query = args._[0];

sumo(args._[0], { service: args.service, from: args.from }, function(err, result) {
  if (err) throw err;
  result.forEach(function(line) {
    console.log(line._raw);
  });
});
