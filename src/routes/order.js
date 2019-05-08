var express = require('express');
var router = express.Router();

var ordController = require('../controllers/orderController');

//POST
router.post('/order', ordController.addOrder);


//GET
router.get('/order', ordController.showOrder);

//PUT
router.put('/order', ordController.changeOrder);

//DELETE
router.delete('/order', ordController.deleteOrder);

module.exports = router;