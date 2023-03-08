const numberToWords = function(num) {
    if (num === 0) {
        return "Zero"
    }
    const ions = ['Thousand', 'Million', 'Billion']
    const twentyToNinety = [
        'Twenty',
        'Thirty',
        'Forty',
        'Fifty',
        'Sixty',
        'Seventy',
        'Eighty',
        'Ninety',
    ]
    const underTwenty = [
        'One',
        'Two',
        'Three',
        'Four',
        'Five',
        'Six',
        'Seven',
        'Eight',
        'Nine',
        'Ten',
        'Eleven',
        'Twelve',
        'Thirteen',
        'Fourteen',
        'Fifteen',
        'Sixteen',
        'Seventeen',
        'Eighteen',
        'Nineteen'
    ]
    let resultArr = []
    let start = num
    let ionsIndex = 0
    while(start > 0) {
        let tensOnes = start % 100
        if (tensOnes >= 20) {
            let ones = tensOnes % 10
            let tens = Math.floor(tensOnes / 10)
            if(ones) {
                resultArr.unshift(underTwenty[ones - 1])
            }
            resultArr.unshift(twentyToNinety[tens - 2])
        } else if (tensOnes) {
            resultArr.unshift(underTwenty[tensOnes - 1])
        }
        start = Math.floor(start / 100)
        if(start === 0) {
            break
        }
        let hundreds = start % 10
        if(hundreds) {
            resultArr.unshift('Hundred')
            resultArr.unshift(underTwenty[hundreds - 1])
        }
        start = Math.floor(start / 10)
        if(start === 0) {
            break
        }
        if(start % 1000 > 0) {
            resultArr.unshift(ions[ionsIndex])
        }
        ionsIndex++
    }
    return resultArr.join(' ')
    
}
console.log(numberToWords(100))
console.log(numberToWords(100000))
// Testing loop
/*
for(let i = 0; i <= 100; i++) {
    let random = (Math.floor(Math.random() * 4000000000))
        console.log(`Number: ${random} \n Words: ${numberToWords(random)} \n`)
}
*/