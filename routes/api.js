var express = require('express');
var router = express.Router();

var headers = {
  'X-Requested-With': 'XMLHttpRequest'
};

var myHeaders = new Headers();
myHeaders.set('X-Requested-With','XMLHttpRequest');

var params = {
  method: 'POST',
  headers: myHeaders
};

var olimpUrl = 'https://www.olimp.kz/ajax_index.php?page=line&line_nums=1&action=2&mid=0&id=0&live[]=30101479&live[]=30086206';

var url = 'https://nl.1xbet.com/LiveFeed/Get1x2_Zip?' +
  'count=50&' +
  'tf=1440&' +
  'afterDays=2&' +
  'mode=4&' +
  'subGames=107577107&' +
  'country=1';

router.get('/', function ( req, res, next ) {
  var data = fetch(olimpUrl, params)
    .then(function ( response ) {
      if ( response.status >= 400 ) {
        throw new Error("Bad response from server");
      }
      return response.text().then(function ( text ) {
        res.send(text);
      });
    })
    .catch(function ( error ) {
      res.send(error);
    });
});

module.exports = router;
