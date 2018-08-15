

branches = {
    base(num){
        //console.log('base num'+num);
        return num;
    },
    dec(num){
        //console.log('dec'+num);
        return num.toFixed(5);
    },
    frac(num){
        //console.log('frac'+num);
        let index = num.indexOf('/');
        let newFirst= parseInt(num.slice(0,index));
        let newSecond=parseInt(num.slice(index+1,num.length));
        let newNum = newFirst / newSecond;
        //console.log('newnum : '+newNum);
        return newNum.toFixed(5);
    },
    decFrac(num){
        //console.log('decFrac'+num);
        let indexOfFrac = num.indexOf('/');
        let indexOfDec = num.indexOf('.');
        if(indexOfDec<indexOfFrac){
            let newBase = parseFloat(num.slice(0,indexOfFrac));
            let newFrac = parseInt(num.slice(indexOfFrac+1,num.length));
            let newNum = newBase / newFrac;
            //console.log('newnum : '+newNum);
            return newNum.toFixed(5);
        }
        else if(indexOfFrac<indexOfDec){
            let newBase = parseInt(num.slice(0,indexOfFrac));
            //console.log('newBase'+newBase);
            let newDec = parseFloat(num.slice(indexOfFrac+1,num.length));
            //console.log('newDec'+newDec);
            let newNum = newBase / newDec;
            //console.log('newnum : '+newNum);
            return newNum.toFixed(5);
        }

    }

}

module.exports = branches;