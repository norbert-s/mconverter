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
        .get(function (req, res) {
            let input = req.query.input;
            let initNum = (convertHandler.getNum(input));
            let initUnit = convertHandler.getUnit(input);
            if (!initNum && !initUnit) {
                // console.log('invalid num');
                res.json({"string": "invalid number and unit"});
            }
            if ((!initNum || initNum ==undefined)&&initUnit!=undefined) {
                res.json({"string": "invalid number"});
            }
            if (!initUnit || initNum ==undefined && initNum!=undefined) {
                res.json({"string": "invalid unit"});
            }
            let returnNum = convertHandler.convert(initNum, initUnit);
            let returnUnit = convertHandler.getReturnUnit(initUnit);
            let ez = convertHandler.spellOutUnit(initUnit,returnUnit);
            let toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit,ez);
            if (initNum && initUnit) res.json(toString);
        });
}
