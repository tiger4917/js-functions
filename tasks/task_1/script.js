
let array = [1, 34, 0, 34, -5, 0, 16, '', 'et45', 'kjhgkj'];
let countOfEvenEls = 0;
let countOfOddEls = 0;
let countOfZiro = 0;
let result = 0;
let resultZero = 0;
function getEvenElsAndOddEls(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number' && typeof arr[i] !== NaN) {
            if (arr[i] === 0) {
                countOfZiro++;
            }
            else {
                arr[i] % 2 === 0 ? countOfEvenEls++ : countOfOddEls++;
            }
        }
    }
    result = console.log(`в массиве чётных элементов - ${countOfEvenEls} нечётных элементов - ${countOfOddEls}`);
    resultZero = console.log(`в том числе элементов, значения которых равно ноль - ${countOfZiro}`);
    return [result, resultZero];
}
getEvenElsAndOddEls(array);
