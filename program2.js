/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let count =0;
    const rom = {
        'I':1,
        'V':5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000
    };
    for (let i=0; i<s.length-1;i++){
        if(rom[s[i]]< rom[s[i+1]]){
            count -= rom[s[i+1]];

        }else{
            count +=rom[s[i]];
        }
    }
    return count+ rom[s[s.length-1]]
};


module.exports={romanToInt}