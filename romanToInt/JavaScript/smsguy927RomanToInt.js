/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function(s) {
    const romanDigits = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    if(s.length <= 1) {
        return romanDigits[s]
    }


    let first, second
    let total = 0
    for(let i = 0; i < s.length; i++) {
        first = romanDigits[s[i]]
        second = romanDigits[s[i + 1]]

        if (second > first) {
            total += second - first
            i++
        } else {
            total += first
        }

    }
    return total

}