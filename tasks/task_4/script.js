let a = +prompt('Введите первое число');
let b = +prompt('Введите второе число');
const intervalId = setInterval(function () {
    if (a === b) {
        clearInterval(intervalId);
    }
    console.log(a);
    a++;
}, 1000);



