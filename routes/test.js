var express = require('express');
var router = express.Router();
var Promise = require('bluebird');
var fetch = require('isomorphic-fetch');

url = 'https://nl.1xbet.com/LiveFeed/Get1x2_Zip?' +
  'count=50&' +
  'tf=1440&' +
  'afterDays=2&' +
  'mode=4&' +
  'subGames=107577107&' +
  'country=1';

/* GET users listing. */
router.get('/', function ( req, res ) {
  // var data = fetch(url)
  //   .then(function ( response ) {
  //     if ( response.status >= 400 ) {
  //       throw new Error("Bad response from server");
  //     }
  //     return response.json();
  //   })
  //   .catch(function ( error ) {
  //     console.log(error);
  //   });

  var data = {
    value: [
      {
        p: 1,
        t: 2
      },
      {
        p: 1,
        t: 2
      }
    ]
  };

  res.render('test', { data: data.value });
});

module.exports = router;
