// Desafio 1 - Crie a função compareTrue
function compareTrue(param1, param2) {
  if (param1 && param2) {
    return true;
  }
  return false;
}
// Desafio 2 - Crie a função splitSentence
function splitSentence(frase) {
  return frase.split(' ');
}
// Desafio 3 - Crie a função concatName
function concatName(arrayDeString) {
  let palavrasConcatenadas = [];
  palavrasConcatenadas.push(arrayDeString[arrayDeString.length - 1]);
  palavrasConcatenadas.push(arrayDeString[0]);
  return palavrasConcatenadas.join(', ');
}
// Desafio 4 - Crie a função footballPoints
function footballPoints(wins, ties) {
  const pontuacao = wins * 3 + ties * 1;
  return pontuacao;
}
// Desafio 5 - Crie a função highestCount
function ohMaiorNumero(array) {
  let ohMaior = array[0];
  for (let n of array) {
    if (n > ohMaior) {
      ohMaior = n;
    }
  }
  return ohMaior;
}

function highestCount(array) {
  let contadorDoMaior = 0;
  const ohMaior = ohMaiorNumero(array);
  for (let n of array) {
    if (n === ohMaior) {
      contadorDoMaior += 1;
    }
  }
  return contadorDoMaior;
}

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas
function calcTriangleArea(base, height) {
  const area = (base * height) / 2;
  return area;
}

function calcRectangleArea(base, height) {
  const area = base * height;
  return area;
}

function calcAllAreas(base, height, form) {
  if (form === 'triângulo') {
    return `O valor da área do triângulo é de: ${calcTriangleArea(
      base,
      height,
    )}`;
  }
  if (form === 'retângulo') {
    return `O valor da área do retângulo é de: ${calcRectangleArea(
      base,
      height,
    )}`;
  }

  return 'Não foi possível fazer o cálculo, insira uma forma geométrica válida';
}
// Desafio 7 - Crie a função catAndMouse
function catAndMouse(mouse, cat1, cat2) {
  const cat1Posicao = Math.abs(mouse - cat1);
  const cat2Posicao = Math.abs(mouse - cat2);
  if (cat1Posicao < cat2Posicao) {
    return 'cat1';
  }
  if (cat2Posicao < cat1Posicao) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}
// Desafio 8 - Crie a função fizzBuzz

// Desafio 9 - Crie a função encode e a função decode

// Desafio 10 - Crie a função techList

// Não modifique essas linhas
module.exports = {
  calcTriangleArea:
    typeof calcTriangleArea === 'function' ? calcTriangleArea : () => {},
  calcRectangleArea:
    typeof calcRectangleArea === 'function' ? calcRectangleArea : () => {},
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : () => {},
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : () => {},
  compareTrue: typeof compareTrue === 'function' ? compareTrue : () => {},
  concatName: typeof concatName === 'function' ? concatName : () => {},
  decode: typeof decode === 'function' ? decode : () => {},
  encode: typeof encode === 'function' ? encode : () => {},
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : () => {},
  footballPoints:
    typeof footballPoints === 'function' ? footballPoints : () => {},
  highestCount: typeof highestCount === 'function' ? highestCount : () => {},
  splitSentence: typeof splitSentence === 'function' ? splitSentence : () => {},
  techList: typeof techList === 'function' ? techList : () => {},
};
