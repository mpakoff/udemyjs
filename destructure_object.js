"use strict";

//const obj = new Object(); // cтарый формат записи


const option = {
    name: 'test',
    width: 1024,
    heigth: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    opacity: 100,
    gradient: true,
    makeTest: function() {
        console.log("test");
    }
};
option.makeTest();

console.log(Object.keys(option).length); //показывает число свойств объекта, но не видит свойства вложенного объекта. без length выводит их название

// console.log(option["colors"]["border"]); //доступ к вложенному значению свойства через двойные квадратные скобки


// delete option.name; //удаляет значение свойтва объекта

// перебор свойств объекта

// for ( let key in  option){
//     console.log(`Свойство ${key} имеет значение ${option[key]}`);   // перебирает все свойства объекта, но не умеет перебирать вложенные объекты при таком запросе



// }

// let counter = 0;
// // перебор внутри перебора
// for (let key in option) {
//     if (typeof(option[key]) === 'object') {
//         console.log(`найден вложенный объект - ${key}`);
//         for (let i in option[key]) {
//             console.log(`Свойство ${i} вложенного объекта ${key} имеет значение ${option[key][i]}`);
//             counter++
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${option[key]}`); // перебор вложенных объектов
//         counter++
//     }
// }
// console.log(counter); //счетчик колличества свойств объекта