
// 1 Esta função deve fazer um loop de 1 até maxValue (inclusive) e montar 
//uma string com as seguintes condições para cada número:

// 2 Se o número for ímpar, no lugar dele, concatenar "Snap" no final da string.

// 3 Se o número for múltiplo de 5, no lugar dele, concatenar "Crackle" no final 
//da string.

// 4 Se o número for tanto ímpar quanto múltiplo de 5, no lugar dele, 
//concatenar "SnapCrackle" no final da string.

// 5 Se número não for nem ímpar e nem múltiplo de 5, concatenar o próprio 
///número no final da string.

// 6 Seus itens devem ser separados sempre por vírgula e espaço (veja o 
//exemplo).

// 7 Esta função deve retornar a string obtida
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
    return result
}

console.log(snapCrackle(numbers))

const isPrime = (num) => {
  for (let i = 2; i < num; i++)
    if (num % i === 0) {
      return false;
    }
  return num > 1;
};
console.log(isPrime(2))