/*
*
*
*       Complete the handler logic below
*
*
*/
units = {
    kg :'kilograms',
    lbs : 'pounds',
    mi : 'miles',
    km : 'kilometers',
    gal : 'gallons',
    l : 'liters',
    L : 'liters'

}

function ConvertHandler() {

    this.getNum = function(input) {
        //false ot ad vissza a getNum vagy a szamot
        let num = splitNum(input);
        if(num=='' ){
            return false;
        }
        else{
            if(!contains(num))return false;
            else{
                let result = contains(num);
                return result;
            }
        }
    };

    this.getUnit = function(input) {
        let unit = splitUni(input);
        console.log('unit'+unit);
        if(unit=='')return false;
        let valid = isValid(unit);
        if(!valid)return false;
        if(valid)return unit;
    };

    this.getReturnUnit = function(initUnit) {
        let _initUnit = initUnit;
        var input = ['gal','l','mi','km','lbs','kg'];
        var expect = ['l','gal','km','mi','kg','lbs'];
        let index = input.indexOf(_initUnit);
        let result = expect[index];
        return result;
    };

    this.spellOutUnit = function(initUnit,returnUnit) {
        let _initUnit = initUnit;
        let returnInitUnit = units[_initUnit];
        let _returnUnit = returnUnit;
        returnReturnUnit = units[_returnUnit];
        let result = [returnInitUnit,returnReturnUnit];
        console.log('spellout init and return '+result[0]+" "+result[1]);
         return result;
    };


    this.convert = function(number,unit) {
        //ez oldja meg a konvertálást lowercasere
        let unitThis = unit.toLowerCase();
        let returnUnit = this.getReturnUnit(unitThis);
        let howTo = convertUnits[unitThis];
        let result = (parseFloat(number *howTo));
        result = result.toFixed(5)*1;
        return result;
    };

    this.getString = function(initNum, initUnit, returnNum, returnUnit, ez) {
        let numThis = initNum;
        let rNum= returnNum;
        let string =  {"initNum":numThis,"initUnit":initUnit,"returnNum":rNum,"returnUnit":returnUnit,"string":numThis+" "
        +ez[0]+' converts to '+rNum+ " "+ez[1]};
        return string;
    };
}

module.exports = ConvertHandler;

const pref = require('./pref');
const uni = require('./uni');
const convertUnits = require('./convertUnits');
const {splitNum,contains} = pref;
const {splitUni,isValid} = uni;

