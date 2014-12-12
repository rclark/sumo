var request = require('request');

module.exports = function(query, options, callback) {
  var qs = { q: query };

  if (options.service)
    qs.q = [ '_collector=*', options.service, '*' ].join('') + ' ' + qs.q;
  if (options.from)
    qs.from = Date.now() - options.from * 60 * 1000;

  request({
    url: 'https://api.sumologic.com/api/v1/logs/search',
    qs: qs,
    auth: {
      user: process.env.MAPBOX_CLI_SUMOLOGIC_USER,
      pass: process.env.MAPBOX_CLI_SUMOLOGIC_PASS
    },
    json: true
  }, function (err, result, json) {
    if (err) return callback(err);
    if (result.statusCode !== 200) return callback(new Error(json.message));

    callback(null, json.reverse());
  });
};
