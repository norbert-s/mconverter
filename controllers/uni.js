uni={
    splitUni(input){
        let uni = input;
        let indexOfNaN = /[a-z]+/;
        let matchReg= uni.match(indexOfNaN);

        let lowerCaseUni= String(matchReg).toLowerCase();

        return lowerCaseUni;
        //this function works fine
    },
    isValid(value){
        value.toString();
        var input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
        console.log('value in isvalid'+value);
        let result = input.includes(value);
        console.log('is valid result'+result);
        return result;
    }//this functions works fine
}
module.exports = uni;