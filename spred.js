'use strict';

// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b); //10 создалась новая переменная, её меняем, исходная не трогается
// console.log(a); //5

// const obj = {
//     a: 5,
//     b: 1
// }

// const copy = obj;

// copy.a = 10;

// console.log(copy); //{ a: 10, b: 1 }  тут создаётся ссылка на объект, при измененнии значения в ссылке - меняется и основной объект
// console.log(obj); //{ a: 10, b: 1 }

//поверхностная копия
// function copy(mainObj) { // сюда мы пхаем в качестве аргумента любой объект.
//     let objCopy = {};
//     let key;

//     for (key in mainObj) {
//         objCopy[key] = mainObj[key]; // тут мы перебираем свойства объекта и копируем их в новый объект. но с оговорками - вложеные объекты передются в новый объект ссылками
//     }
//     return objCopy;
// }

const numbers = {
    a: 4,
    b: 3,
    c: {
        x: 6,
        y: 9
    }
}

// const newNumbers = copy(numbers) // объект numbers передан в качестве аргумента в функцию copy. 

// newNumbers.a = 10;
// newNumbers.c.x = 15; // в этом случае значение свойства будет и у основного и у скопированного объекта, так как вложенные объекты передаются ссылкой в данном случае(поверхностная копия)


// console.log(numbers);     //{ a: 4, b: 3, c: { x: 6, y: 9 } }
// console.log(newNumbers); // { a: 10, b: 3, c: { x: 6, y: 9 } }

//слияние объектов

const add = {
    e: 23,
    d: 42
};

const asgn = Object.assign({}, add); // ещё один способ поверхностного копирования

asgn.e = 55;


console.log(asgn);
console.log(add);

// console.log(Object.assign(numbers, add)); // { a: 4, b: 3, c: { x: 6, y: 9 }, e: 23, d: 42 } слияние двух объектов

//способ поверностного копирования, на этот раз с массивами  

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice(); //без slice создастся просто ссылка на исходный массив

newArray[2] = 'ganfglkjnbslf'

console.log(newArray);
console.log(oldArray);

//ES8/ES9

//spread оператор

const video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'blogger'];

internet = [...video, ...blogs, 'vk', 'facebook']; // разворачивает содержимое массивов(ES8) и объектов(ES9)

console.log(internet); //[	'youtube','vimeo','rutube','wordpress','livejournal','blogger','vk','facebook' ]

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 4, 6];

log(...num) // передаёт развернутый массив в функцию

const array = ["a", "b"];
const newAarray = [...array]; // создание поверхностной копии массива с помощью оператора spread
newAarray[0] = 'c'
console.log(newAarray);
console.log(array);
// spread объекта
const q = {
    one: 1,
    two: 2
}

const newObject = {...q };