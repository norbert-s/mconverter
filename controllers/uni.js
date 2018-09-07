uni={
    splitUni(input){
        let uni = input;
        let indexOfNaN = /[a-zA-Z]+/;
        let matchReg= uni.match(indexOfNaN);
        let lowerCaseUni= String(matchReg);
        return lowerCaseUni;
        console.log(lowerCaseUni);
        //this function works fine
    },
    isValid(value){
        value.toString();
        var input = ['gal','L','mi','km','lbs','kg'];
        let result = input.includes(value);
        return result;
    }//this functions works fine
}
module.exports = uni;