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

};

module.exports = { isValid };


