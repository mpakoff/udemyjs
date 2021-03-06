const arr = [1, 2, 3, 6, 8]

// arr.pop();//удаляет последний элемент
// arr.push(10)// добовляет элемент в конец

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {//перебор элементов массива
//     console.log(arr[i]);
// }

for (let value of arr) {//
	console.log(value);
}