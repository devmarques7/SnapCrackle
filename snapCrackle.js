
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

const snapCrackle = (maxValue) => {
    let result = []

    for (let i = 0; i < maxValue.length; i++) {
      
        if (maxValue[i] % 5 == 0 && maxValue[i] % 2 !== 0) {
            maxValue[i] = `SnapCrackle`
            result.push(maxValue[i])
        } else if (maxValue[i] % 5 === 0) {
            maxValue[i] = `Crackle`
            result.push(maxValue[i])
        } else if (maxValue[i] % 2 !== 0) {
            maxValue[i] = `Snap`
            result.push(maxValue[i])
        } else if (maxValue[i] % 2 == 0) {
            result.push(maxValue[i])
        }
    }
    return result.join(' ')
}

snapCrackle(numbers)
