Array.prototype.getSumOfNumbers = function () {
    let sum = 0;
    this.forEach(function (item) {
        if (typeof item === "number") {
            sum += item;
        }
    })
    return sum;
}

let arr = [1, '3', { num: 7 }, 8, 'FunFunFunction', 10, () => `I'm a number`, 33]

console.log(arr.getSumOfNumbers());


let arr1 = [1, 2, 3, 4, 5, 6, { num: 7 }, "I am string", () => "I am function"];

console.log(arr1.getSumOfNumbers());