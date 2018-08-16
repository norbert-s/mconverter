

branches = {
    base(num){
        return num;
    },
    dec(num){
        return parseFloat(num);
    },
    frac(num){
        let index = num.indexOf('/');
        let newFirst= parseInt(num.slice(0,index));
        let newSecond=parseInt(num.slice(index+1,num.length));
        let newNum = newFirst / newSecond;
        return parseFloat(newNum.toFixed(5));
    },
    decFrac(num){
        let indexOfFrac = num.indexOf('/');
        let indexOfDec = num.indexOf('.');
        if(indexOfDec<indexOfFrac){
            let newBase = parseFloat(num.slice(0,indexOfFrac));
            let newFrac = parseInt(num.slice(indexOfFrac+1,num.length));
            let newNum = newBase / newFrac;
            return newNum.toFixed(5);
        }
        else if(indexOfFrac<indexOfDec){
            let newBase = parseInt(num.slice(0,indexOfFrac));
            let newDec = parseFloat(num.slice(indexOfFrac+1,num.length));
            let newNum = newBase / newDec;
            return newNum.toFixed(5);
        }
    }
}

module.exports = branches;