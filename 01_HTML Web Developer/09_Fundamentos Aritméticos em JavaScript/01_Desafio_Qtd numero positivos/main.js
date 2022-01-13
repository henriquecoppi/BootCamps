/*
//### Desafio Quantidade de Números Positivos
Crie um programa que leia 6 valores. Você poderá receber valores negativos e/ou positivos como entrada, devendo desconsiderar os valores nulos. Em seguida, apresente a quantidade de valores positivos digitados.
//### Entrada
Você receberá seis valores, negativos e/ou positivos.
//### Saída
Exiba uma mensagem dizendo quantos valores positivos foram lidos assim como é exibido abaixo no
exemplo de saída. Não esqueça da mensagem "valores positivos" ao final.
|------------------------------------------|
| Exemplo de Entrada |  Exemplo de Saída   |
|--------------------|---------------------|
| 7                  |                     |
| -5                 |                     |
| 6                  |                     |
| -3.4               |                     |
| 4.6                |                     |
| 12                 | 4 valores positivos |
|------------------------------------------|

var c = [7,-5,6,-3.4,4.6,12]
var numero = [6]
  for(let i=0; i<numero.length; i++){
    numero [i] = parseFloat(c)
  }
  let totalPositivos = numero
  .filter((n) => n && n >= 0)
  .length
  console.log(`${c} valores positivos`)
*/

const inputs = [7, 5, 6, -3.4, 4.6] //para uso local

const numeros = [6]
for (let i = 0; i < numeros.length; i++) {
  // numeros[i] = parseFloat(gets())) //para uso na DIO
  numeros[i] = parseFloat(inputs[i]) //para uso local
}

let totalPositivos = numeros
  .filter((n) => n && n >= 0)
  .length
console.log(`${totalPositivos} valores positivos`);










//for (c=0;c<=6;c++);
//console.log