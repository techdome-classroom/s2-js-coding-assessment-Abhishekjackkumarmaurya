/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let myArr = s.split("");
    const map = new Map();
    map.set('{','}');
    map.set('(',')');
    map.set('[',']');
     let count = 0;
     for ( let i =0; i<s.length;i++){
        for(let j=0; j<myArr.length;j++){
            if(map.get(myArr[i])== myArr[j]){
                myArr[i],myArr[j]=0;
                tcount+=2;
            }
        }
     }
     if(myArr.length==count)
        return true;
    return false;
};

module.exports = { isValid };


