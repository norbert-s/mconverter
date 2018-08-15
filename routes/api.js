/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      let input = req.query.input;
      console.log('input:'+input);
      let initNum = (convertHandler.getNum(input));
        console.log('initNum'+initNum);
      let initUnit = convertHandler.getUnit(input);
        console.log('api initUnit'+initUnit);
        if(!initNum && !initUnit) {
            console.log('invalid num');
            res.json({"number and unit":"invalid number and unit"});
        }
        if(!initNum ){
            res.json({"number":"invalid number"});

        }
        if(!initUnit){
            res.json({"unit":"invalid unit"});

        }
      let returnNum = convertHandler.convert(initNum, initUnit);
        console.log('returnNum'+returnNum);
      let returnUnit = convertHandler.getReturnUnit(initUnit);
        console.log('returnUnit'+returnUnit);
        // let spellOut = convertHandler.spellOutUnit(initUnit,returnUnit);
        // console.log('spellout'+spellOut);
      let toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
      console.log(toString);
        if(initNum && initUnit) res.json(toString);
    });
    
};
