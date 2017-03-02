var express = require('express');
var router = express.Router();

var olimpUrl = 'https://www.olimp.kz/ajax_index.php?page=line&line_nums=1&action=2&mid=0&id=0';

/* GET home page. */
router.get('/', function(req, res, next) {
  var data = fetch(olimpUrl)
    .then(function ( response ) {
      if ( response.status >= 400 ) {
        throw new Error("Bad response from server");
      }
      return response.json();
    })
    .catch(function ( error ) {
      console.log(error);
    });

  res.send(data);
});

module.exports = router;
