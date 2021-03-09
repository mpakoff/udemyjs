'use strict';

let a = 5,
    b = a;

b = b + 5;

console.log(b);//10 создалась новая переменная, её меняем, исходная не трогается
console.log(a);//5

const obj = {
    a: 5,
    b: 1
}

const copy = obj;

copy.a = 10;

console.log(copy);//{ a: 10, b: 1 }  тут создаётся ссылка на объект, при измененнии значения в ссылке - меняется и основной объект
console.log(obj);//{ a: 10, b: 1 }