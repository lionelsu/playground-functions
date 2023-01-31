// Desafio 11 - Crie a função generatePhoneNumber
function checkSmallerGreater(array) {
  for (const number of array) {
    if (number < 0 || number > 9) {
      return false;
    }
  }
  return true;
}
function objOfSameNumbers(array) {
  let numberObj = {};
  for (const num of array) {
    if (numberObj[num] === undefined) {
      numberObj[num] = 1;
    } else {
      numberObj[num] += 1;
    }
  }
  return numberObj;
}
function checkGteq3(array) {
  const sameNumChain = objOfSameNumbers(array);
  for (const num of array) {
    if (sameNumChain[num] >= 3) {
      return false;
    }
  }
  return true;
}
function phoneNumberFormater(array) {
  const areaCode = `(${array[0]}${array[1]}) `;
  const fstSequence = `${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-`;
  const finalSequence = `${array[7]}${array[8]}${array[9]}${array[10]}`;
  return areaCode + fstSequence + finalSequence;
}
function generatePhoneNumber(array) {
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (!checkSmallerGreater(array) || !checkGteq3(array)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return phoneNumberFormater(array);
}
// Desafio 12 -  Crie a função triangleCheck

// Desafio 13 - Crie a função hydrate

/* eslint no-undef: 0 */

// Não modifique essas linhas
module.exports = {
  generatePhoneNumber:
    typeof generatePhoneNumber === 'function' ? generatePhoneNumber : () => {},
  triangleCheck: typeof triangleCheck === 'function' ? triangleCheck : () => {},
  hydrate: typeof hydrate === 'function' ? hydrate : () => {},
};
