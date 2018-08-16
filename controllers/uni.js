uni={
    splitUni(input){
        let uni = input;
        let indexOfNaN = /[a-z]+/;
        let matchReg= uni.match(indexOfNaN);
        let lowerCaseUni= String(matchReg);
        return lowerCaseUni;
        //this function works fine
    },
    isValid(value){
        value.toString();
        var input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
        let result = input.includes(value);
        return result;
    }//this functions works fine
}
module.exports = uni;