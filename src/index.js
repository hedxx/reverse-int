module.exports = function reverse (n) {
    n = Math.abs(n);

    let strNum = n + '';
    let resultNum = 0;  

    for ( let i = strNum.length - 1; i >= 0; i -- ) {

        resultNum = resultNum + strNum[i] * 10**i;
    }
    
    return resultNum;
}
