const findTheDifference = function(s, t) {
    const charTotals = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    const ctOffset = 97
    for(let i of s) {
        charTotals[i.charCodeAt(0) - ctOffset]++
    }
    for(let i of t) {
        charTotals[i.charCodeAt(0) - ctOffset]--
    }
    return String.fromCharCode(charTotals.indexOf(-1) + ctOffset)
};
console.log(findTheDifference('asdfgytrewq', 'asdfgyytrewq'))
console.log(findTheDifference('asdfgytrewq', 'asdfgytrevwq'))