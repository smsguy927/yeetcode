const isPalindrome = function (x) {
    if(x >= 0 && x < 10) {
        return true
    }
    else if(x < 0 || x % 10 === 0) {
        return false
    }
    const digitArr = []
    let start = x
    while (start > 0) {
        digitArr.push(start % 10)
        start = Math.floor(start / 10)
    }
    let leftIt = 0
    let rightIt = digitArr.length - 1
    while(leftIt < rightIt) {
        if(digitArr[leftIt] !== digitArr[rightIt]) {
            return false
        }
        leftIt++
        rightIt--
    }
    return true
};
console.log(isPalindrome(5))
console.log(isPalindrome(50))
console.log(isPalindrome(55))
console.log(isPalindrome(505))
console.log(isPalindrome(5050))
console.log(isPalindrome(50505))
console.log(isPalindrome(5005))
console.log(isPalindrome(50055))
console.log(isPalindrome(123432))
console.log(isPalindrome(1234321))
console.log(isPalindrome(567765))
console.log(isPalindrome(5555055))