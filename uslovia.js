// if (2*4 ==7) {                               //если результать вычисления true то выводим Verno
//     console.log("Verno")
// } else {                                     //иначе выводить Neverno, то есть else срабатывает когда if вернул false 
//     console.log("Neverno")              
// }

// let num = +prompt("VVedite chislo", "");     //если хотим получить число то не забываем поставить + перед prompt, ибо этот засранец всегда возвращает строку. 
                                                //а + преобразует в числовой тип введённые данные                                     
// if (num < 49) {                              //вложенные условия. если нужно проверить больше чем 2 условия. получается что тот блок который вернул true(соответствует условию) тот и выполняется
//     console.log("Neverno")
// } else if (num > 100) {
//     console.log("Mnogo")
// } else {
//     console.log("Verno")
// }

//тернарный оператор
let num = +prompt("VVedite chislo", "");

//если введёное число равно 50 ИЛИ 40 выполняет первый блок консоль.лог иначе последний консоль.лог
// (num == 50) || (num == 40) ? console.log("Verno") : console.log("Neverno");

//switch-case
// более продвинутый оператор проверки условий
// let num = 50;
switch (num) {
    case num < 49:
            console.log("Neverno");
            break;                                          //обязательно ставим break в каждом кейсе. иначе будет выполнятся пока не дойдёт до breakd другом кейсе
    case num >100:
            console.log("Mnogo");
            break;
    case num >80:
            console.log("опять много");
            break;
    case 50:
            console.log("Верно");                           //истинное условие не надо писать как num == 50. достаточно просто указать истинное значение.
            break;
    default:                                                //выполнится в любом случае если ни один из кейсов не выполнился. не обязательная часть
        console.log("Чтото пошло не так");                  //(в данном случае можно ввести вместо числа строку. и ни одно из условий не выполнится. тут то и пригодится default)
        break;                               
}