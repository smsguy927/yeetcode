const constructNote = function (ransomNote, magazine) {
    const letterCount = {}
    for (let char of ransomNote) {
        if(letterCount[char]) {
            letterCount[char]++
        } else {
            letterCount[char] = 1
        }
    }
    for(let char of magazine) {
        if(letterCount[char]) {
            letterCount[char]--

        }
    }
    return Object.values(letterCount).every(x => x <= 0)
}
console.log(constructNote('aa', 'abc')) // false
console.log(constructNote('abc', 'dcba')) // true
console.log(constructNote('aabbcc', 'bcabcaddff')) // true
console.log(constructNote('abc','abcd')) // true
console.log(constructNote('abc','abcc')) // true
console.log(constructNote('aa','ab')) // false
console.log(constructNote('abcc','abc')) // false
console.log(constructNote('abcddd','abcd')) // false
console.log(constructNote('abcdddeee','abcd')) // false
console.log(constructNote('a','aaaaaaa'))
console.log(constructNote('',''))

