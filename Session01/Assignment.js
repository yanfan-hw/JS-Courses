// * 01
const fortmatMoney = (money) => {
    moneyFormat = Intl.NumberFormat('en-US')
    money = moneyFormat.format(money)
    return money
}
// console.log(fortmatMoney(1000.0011))

// * 02
const formatWallet = (money, param) => {
    let Symbols = ''
    if (money >= 1000000000) {
        money /= 1000000000
        Symbols = 'B'
    }
    if (money >= 1000000) {
        money /= 1000000
        Symbols = 'M'
    }
    if (money >= 1000) {
        money /= 1000
        Symbols = 'K'
    }
    return money.toFixed(param).concat(Symbols)
}
// console.log("Money ", formatWallet(1120,2));

// * 03
const factorial = (number) => {
    if (number === 0 || number === 1)
        return 1

    for (let i = number - 1; i >= 1; i--) {
        number *= i
    }
    return number
}
// console.log(factorial(3))

// * 04
const getRandomElement = (array) => {
    let randomElement = array[Math.floor(Math.random() * array.length)]
    return randomElement
}
// console.log(getRandomElement([1,2,3,4,5,6,8,9]))

// * 05
const pickOutRandomElement = (array) => {
    let randomIndex = Math.floor(Math.random() * array.length)
    let pickOutRandomElement = array.splice(randomIndex, 1)
    return pickOutRandomElement
}
// console.log(pickOutRandomElement([1,2,3,4,5,6,7,8]))

// * 06
const findMissingElements = (arr1, arr2) => {
    let missingArr = []
    arr2.forEach(element => {
        if (!arr1.includes(element)) {
            missingArr.push(element)
        }
    })
    return missingArr
}
// console.log(findMissingElements([1,2,3], [1,3,5,7,9]))

// * 07
const cashOut = (money) => {
    // * money = 50*x1 + 20*x2 + 10*x3 + 1*x4
    let x1 = Math.floor(money / 50)
    let balance = money - x1 * 50

    let x2 = Math.floor(balance / 20)
    balance = balance - x2 * 20

    let x3 = Math.floor(balance / 10)
    balance = balance - x3 * 10

    let x4 = balance
    let cashOutMoney = {
        '50K': x1,
        '20K': x2,
        '10K': x3,
        '1K': x4
    }
    return cashOutMoney
}
// console.log(cashOut(32))

// * 08
const convertToRomanNumber = (number) => {
    if (number > 1000) {
        return number
    } else {
        let romanSymbols = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 }
        let numberToRoman = ''
        for (let property in romanSymbols) {
            while (number >= romanSymbols[property]) {
                numberToRoman += property;
                number -= romanSymbols[property];
            }
        }
        return numberToRoman
    }
}
// console.log(convertToRomanNumber(500))

// * 09
const readNumber = (number) => {
    let numberToString = number.toString()
    let needZeroCount = numberToString.length % 3
    if (needZeroCount != 0)
        needZeroCount = 3 - needZeroCount

    numberToString = '0'.repeat(needZeroCount) + numberToString

    const units = ['', 'nghìn', 'vạn']
    const digits = ['không', 'một', 'hai', 'ba', 'bốn', 'năm', 'sáu', 'bảy', 'tám', 'chín']

    const readThree = (a, b, c) => {
        return [a, b, c]
    }

    const output = []

    for (let i = 0; i < numberToString.length / 3; i++) {
        let [a, b, c] = numberToString.substr(i * 3, 3)
        output.push(...readThree(a, b, c))
        output.push(units[numberToString.length / 3 - 1 - i])
    }
    const readTwo = (b, c) => {
        const output = []

        switch(b) {
            case 0:
                output.push(digits[c])
                break
            
            case 1:
                
        }
    }

    return output.join(' ')
}
console.log(readNumber(708001))