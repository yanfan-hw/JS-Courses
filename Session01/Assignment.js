// * 01
const fortmatMoney = (money) => {
    moneyFormat = Intl.NumberFormat('en-US')
    money = moneyFormat.format(money)
    return money
}
console.log(fortmatMoney(1000.0011))

// * 02
const formatWallet= (money, param) => {
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
    const chuSo = new Array (' không ', ' một ', ' hai ', ' ba ', ' bốn ', ' năm ', ' sáu ', ' bảy ', ' tám ', ' chín ')
    const docSo = new Array ('', ' nghìn', ' triệu', 'tỷ', ' nghìn tỷ', ' triệu tỷ')

    const docBaChuSo = (baSo) => {
        let soHangTram, soHangChuc, soDonVi
        let ketQua = ''
        soHangTram = parseInt(baSo / 100)
        soHangChuc = parseInt((baSo % 100) / 10)
        soDonVi = baSo % 10

        if (soHangTram == 0 && soHangChuc == 0 && soDonVi == 0) return '' // * 000

        // * x00 || x0y
        if (soHangTram != 0) {
            ketQua += chuSo[soHangTram] + ' trăm '
            if ((soHangChuc == 0) && (soDonVi != 0)) ketQua += ' linh '
        }

        // * xyz || x0y
        if ((soHangChuc != 0) && (soHangChuc != 1)) {
            ketQua += chuSo[soHangChuc] + " mươi";
            if ((soHangChuc == 0) && (soDonVi != 0)) ketQua = ketQua + ' linh '
        }

        // * x1y
        if (soHangChuc == 1) ketQua += " mười "

        switch (soDonVi) {
            case 1:
                if ((soHangChuc != 0) && (soHangChuc != 1)) {
                    ketQua += " mốt ";
                }
                else {
                    ketQua += chuSo[soDonVi]
                }
                break;
            case 5:
                if (soHangChuc == 0) {
                    ketQua += chuSo[soDonVi]
                }
                else {
                    ketQua += " lăm "
                }
                break;
            default:
                if (soDonVi != 0) {
                    ketQua += chuSo[soDonVi];
                }
                break
        }
        return ketQua
    }

    let lan, i = 0
    let ketQua, temp = ''
    let viTri = []

    if (number < 0) return ''
    if (number == 0) return 0

    if (number > 10 ** 6) return 'Số quá lớn'

    viTri[5] = Math.floor(number / 1000000000000000);
    if (isNaN(viTri[5]))
        viTri[5] = "0";
    number = number - parseFloat(viTri[5].toString()) * 1000000000000000;
    viTri[4] = Math.floor(number / 1000000000000);
    if (isNaN(viTri[4]))
        viTri[4] = "0";
    number = number - parseFloat(viTri[4].toString()) * 1000000000000;
    viTri[3] = Math.floor(number / 1000000000);
    if (isNaN(viTri[3]))
        viTri[3] = "0";
    number = number - parseFloat(viTri[3].toString()) * 1000000000;
    viTri[2] = parseInt(number / 1000000);
    if (isNaN(viTri[2]))
        viTri[2] = "0";
    viTri[1] = parseInt((number % 1000000) / 1000);
    if (isNaN(viTri[1]))
        viTri[1] = "0";
    viTri[0] = parseInt(number % 1000);
    if (isNaN(viTri[0]))
        viTri[0] = "0";
    if (viTri[5] > 0) {
        lan = 5;
    }
    else if (viTri[4] > 0) {
        lan = 4;
    }
    else if (viTri[3] > 0) {
        lan = 3;
    }
    else if (viTri[2] > 0) {
        lan = 2;
    }
    else if (viTri[1] > 0) {
        lan = 1;
    }
    else {
        lan = 0;
    }
    
    for (i = lan; i >= 0; i--) {
        temp = docBaChuSo(viTri[i]);
        ketQua += temp;

        if (viTri[i] > 0) ketQua += docSo[i];
        if ((i > 0) && (temp.length > 0)) ketQua += '';
    }
    if (ketQua.substring(ketQua.length - 1) == ',') {
        ketQua = ketQua.substring(0, ketQua.length - 1);
    }
    ketQua = ketQua.substring(1, 2).toUpperCase() + ketQua.substring(2);

    return ketQua
}
console.log(readNumber(700004))