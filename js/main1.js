// Whole-script strict mode syntax
'use strict';
console.log('hello World');
// var (don't ever use this!)
// var hoisting (move declaration from bottom to top) 항상 제일 위로 선언을 끌어 올려주는것
// has no block scope
// Contants
// faver immutable data type always for a few reasons:
// const daysinweek = 7; 변하지 않는 선언문.
// variable type;
// number 정수의 길이와 상관없이 선언
// let a: number = 12;
// let b: number = 1.2;
// 
const infinity = 1/0;
const nAn = 'not a number' / 2;
console.log('infinity');
console.log('nAn');

const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
// false
const gsymbol1 = Symbol.for('id');
const gsymbol2 = Symbol.for('id');
console.log( gsymbol1 === gsymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`); // value: id, type: symbol
let text = 'hello';
console.log(text.charAt(0)); //h 문자열 변경charAt
const ellie = {name: 'ellie', age: 20};
ellie.age = 21;



