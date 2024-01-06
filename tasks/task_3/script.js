

function getSum(number) {
    return function (num) {
        return num + number;
    }
}

console.log(getSum(5)(10));