uni={
    splitUni(input){
        let uni = input.split(/[0-9]/);
        // console.log('uni'+uni);
        let length = uni.length;

        // console.log('length '+length);
        let newUni = uni[length-1];
        if(newUni=='')return false;
        // console.log('newuni'+newUni);
        return newUni;
        console.log('new uni :'+newUni)
    },
    isValid(value){
        var input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];

        return input.includes(value);
    }
}
module.exports = uni;