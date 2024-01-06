

let userNumber = +prompt('Введите число не больше 1000');
if (userNumber > 1000) {
    console.log(`некорректное число`);
}
else {
    console.log(getPrimeNumber(userNumber));
}
function getPrimeNumber(number) {
    if (number <= 1) {
        return `число ${number} не является простым`;
    }
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return `число ${number} не является простым`;
        }
        else {
            return `число ${number} является простым`;
        }
    }
}
