let branches = require('./branches');
let {base,dec,frac,decFrac} = branches;
pref = {
    splitNum(num){
        num = num.split(/[a-zA-Z]/);
        num = num[0];
        return num;
    },
    contains(num){
        //elso
        let regex= /[^=[0-9a-zA-Z./]]*/g;
        let matching = regex.test(num);
        num = num.toString();
        if(matching){
            return false;
        }

        else{
            if(!num.includes('/') && !num.includes('.')) {return base(num)}
            else if (num.includes('.')|| num.includes('/')){
                let _dec=0;
                let _frac=0;
                for (let value of num)
                {
                    if (value === '.') {
                        _dec++
                    }
                    else if (value === '/') {
                        _frac++
                    }
                }
                if(_dec<=1 && _frac===0)return dec(num);
                else if(_dec===0 && _frac===1)return frac(num);
                else if(_dec===1 && _frac===1)return decFrac(num);
                else if(_dec>1 || _frac>1){
                    return false;
                }
            }
            else if(num===''||num==undefined){
                return false;
            }
        }
    }
}



module.exports = pref;