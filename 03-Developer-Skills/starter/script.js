// Remember, we're gonna use strict mode in all scripts now!
'use strict';

///////////////////////////////////////
// Using Google, StackOverflow and MDN

// PROBLEMA 1:
// Trabalhamos para uma empresa que constrói um termômetro doméstico inteligente. Nossa tarefa mais recente é esta: "Dada uma matriz de temperaturas de um dia, calcule a amplitude da temperatura. Tenha em mente que às vezes pode haver um erro no sensor."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Entendendo o problema
// - O que é amplitude de temperatura? Resposta: diferença entre a temperatura mais alta e a mais baixa
// - Como calcular as temperaturas máxima e mínima?
// - O que é um erro de sensor? E o que fazer?

// 2) Dividindo em subproblemas
// - Como ignorar erros?
// - Encontra o valor máximo no array temporário
// - Encontra o valor mínimo no array temporário
// - Subtrai min de max (amplitude) e retorna

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);
