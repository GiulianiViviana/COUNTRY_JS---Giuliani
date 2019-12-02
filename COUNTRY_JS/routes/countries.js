var express = require('express'); //Carica il modulo express
var router = express.Router(); //Ottiene un oggetto router
var country = require('countryjs');

router.get('/info/:state/', function(req, res, next){ //Rendiamo lo stato un parametro
 res.send(country.info(req.params.state));
})
router.get('/pages/:state/', function(req, res, next){
 res.render('state', {state: country.info(req.params.state)}) ; //Rendiamo lo stato un parametro
})
module.exports = router;