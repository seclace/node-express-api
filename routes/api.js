var express = require('express');
var router = express.Router();
var osmosis = require('osmosis');

var headers = {
  'X-Requested-With': 'XMLHttpRequest'
};

var myHeaders = new Headers();
myHeaders.set('X-Requested-With', 'XMLHttpRequest');

var params = {
  method: 'POST',
  headers: myHeaders
};

var olimpUrl = 'https://www.olimp.kz/ajax_index.php?page=line&line_nums=1&action=2&mid=0&id=0&live[]=30101479&live[]=30086206';

var olimpBettingUrl = 'https://www.olimp.kz/betting';
var olimpBettingButtonCheckAll = 'input[value="Выделить все"]';
var olimpCheckboxes = getTrIds();
var olimpInputs = 'input[name="live\[\]"]';

var url = 'https://nl.1xbet.com/LiveFeed/Get1x2_Zip?' +
  'count=50&' +
  'tf=1440&' +
  'afterDays=2&' +
  'mode=4&' +
  'subGames=107577107&' +
  'country=1';

var yandexUrl = 'https://www.yandex.ru';
var yandexSubmit = 'button[type="submit"]';

router.get('/', function ( req, res ) {
  var q = [];
  osmosis
    .get(olimpBettingUrl)
    // .find(olimpCheckboxes)
    // .then(function ( window ) {
    //   var title = window.document.querySelectorAll('title');
    //   console.log(title);
    // })
    // .set({
    //   values: 'input@value'
    // })
    .find(olimpInputs)
    .set({
      values: ['@value']
    })
    .data(function ( data ) {
      console.log('Here is data callback!');
      q = data;
      console.log(data);
    })
    .done(function () {
      console.log('Successfully done!');
      res.send('done! ' + q);
    })
    .log(console.log)
    .error(console.log);
  // .debug(console.log);
});

/*
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
 */

module.exports = router;

function getTrIds( count ) {
  if ( !count ) count = 100;
  var result = "";
  for ( var i = 1; i < count; i++ ) {
    result += "#s" + i;
    if (i !== count - 1) result += ", ";
  }
  return result;
}