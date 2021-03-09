const arr = [10, 22, 34, 16, 8];
arr.sort(compareName);
console.log(arr);//[ 10, 16, 22, 34, 8 ] преобразует в строку и сортирует не логически, а порядково

function compareName(a, b) {//callback функция которая сравнивает два числа и позволяет сортировать числа логически а не порядково. передаётся в sort в качестве аргумента
	return a - b;
}
// arr.pop();//удаляет последний элемент
// arr.push(10)// добовляет элемент в конец

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {//перебор элементов массива
//     console.log(arr[i]);
// }

// for (let value of arr) {//перебор значенйи массива. в отличии от объектов тут используется  for...of, можно использовать break & continue
// 	console.log(value);
// }

arr.forEach(function(item, i, arr){		// в качестве аргументов тут значение, индекс и собственно массив
console.log(`${i}: ${item} внутри массива ${arr}`); //более гибкий перебор с callback функцией
});


// const arr1 = [2, 3, 5, 7, 8];
// arr1[99] = 0;
// console.log(arr1.length);
// console.log(arr1);//[ 2, 3, 5, 7, 8, <94 empty items>, 0 ] при присваивании значения 99 индексу, создаются пустые индексы. 

// const str = prompt("", "");
// const products = str.split(", ");//разделяет строку на массив используя запятую и пробел к качестве разделителя
// console.log(products);

const str = prompt("", "");
const products = str.split(", ");//разделяет строку на массив используя запятую и пробел к качестве разделителя
products.sort(); //сортировка значений. по умолчанию сортирует по имени
console.log(products.join('; ')); //склеивает массив, вревращая в строку, используя ; в качестве разделителя