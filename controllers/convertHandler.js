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
    l : 'liters'
}
function ConvertHandler() {

    this.getNum = function(input) {
        //false ot ad vissza a getNum vagy a szamot
        let num = splitNum(input);
        if(num=='' ){
            console.log('false num'+num);
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
        console.log('getunit unit'+unit);
        if(!unit)return false;
        //a valid booleant ad vissza
        let valid = isValid(unit);
        if(!valid)return false;
        // console.log(valid);
        if(valid)return unit;
        console.log('return unit'+unit);
    };

    this.getReturnUnit = function(initUnit) {
        var input = ['gal','l','mi','km','lbs','kg'];
        var expect = ['l','gal','km','mi','kg','lbs'];
        let index = input.indexOf(initUnit);
        let result = expect[index];
        return result;
    };

    this.spellOutUnit = function(initUnit,returnUnit) {

        // let init = this.(initUnit);
        // console.log('init unit'+init);
        // let returnU = convertSpelling(returnUnit);
        // console.log(returnU);
        // var result= {1:this.init,2:this.returnU};
        //
        // return result;
    };

    this.convert = function(number,unit) {
        //milyen egyseg az eredeti
        let unitThis = unit.toLowerCase();
        //console.log('unit this'+unitThis);
        //milyen egyseg a kivant
        let returnUnit = this.getReturnUnit(unitThis);
        //console.log('return unit'+returnUnit);
        // let array = [3.78541,0.453592,1.60934,0.621371192,2.20462262,0.264172052];
        let howTo = convertUnits[unitThis];
        //console.log('how to'+howTo);

        let result = (parseFloat(number *howTo));
        result = result.toFixed(5)*1;
        //console.log(`ez a ${unitThis}rol convert to ${returnUnit}: ${result}`);
        return result;
    };

    this.getString = function(initNum, initUnit, returnNum, returnUnit, spellout1,spellout2) {
        let string =  {"initNum":initNum,"initUnit":initUnit,"returnNum":returnNum,"returnUnit":returnUnit};

        return string;
    // ,"string":`
    //     ${initNum} ${spellOut1} converts to ${returnNum} ${spellout2}`
    };


}

module.exports = ConvertHandler;

const pref = require('./pref');
const uni = require('./uni');
const convertUnits = require('./convertUnits');
// const convertSpelling = require('./convertSpelling');
const {splitNum,contains} = pref;
const {splitUni,isValid} = uni;

// const {convertUnits} = convertUnit;

// let branches = require('./branches');
// let {base,dec,frac,decFrac} = branches;
