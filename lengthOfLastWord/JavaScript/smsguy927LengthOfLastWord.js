const lengthOfLastWord = function(s) {
    let totalLength = 0
    const space = 32
    for(let i = s.length - 1; i > -1; i--) {
        if(s.charCodeAt(i) === space && totalLength) {
            return totalLength
        }
        if(s.charCodeAt(i) !== space) {
            totalLength++
        }
    }
    return totalLength
};
console.log(lengthOfLastWord('zzzz'))
console.log(lengthOfLastWord(' zzzz'))
console.log(lengthOfLastWord('zzzz zzzzzzzzzz'))
console.log(lengthOfLastWord('zz zzz   zzzz zz      '))
console.log(lengthOfLastWord('zzzz '))
console.log(lengthOfLastWord(' zzzz '))
console.log(lengthOfLastWord('             '))