const express = require('express');
const moneyRoute=express()
const bodyParser = require('body-parser');
const { createMoney } = require('../controllers/moneyControllers');


moneyRoute.use(bodyParser.json());
moneyRoute.use(bodyParser.urlencoded({extended: false}));
moneyRoute.use(express.json())





moneyRoute.post('/createmoney',createMoney)


module.exports=moneyRoute;


