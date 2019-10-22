function first() {
    setTimeout (
        function() {
            console.log(1);
            }, 500 );
}

function second() {
    console.log(2);
}

first();
second();

function learnJS (lang, callback) {
    console.log("Я учу " + lang);
    callback();                     //должна быть выполнена после того как другая функция завершила своё выполнение
}

learnJS ("JS", function(){                  //здесь мы може вприхнуть функцию при вызове learnJS
    console.log(" я прошёл третий урок")
    
})



// function done() {
//     console.log("Я прошёл 3-й урок");           /* изначально при создании learnJS мы указали что она будет принимать какието значения lang и  callback */
// }   

// learnJS("JS", done);                    

