function genearete(size, min, max) {
    let numbers = new Array(size);
    for (let i = 0; i < numbers.length; i++) {
        numbers[i] = Math.floor(Math.random() * (max - min + 1) + min);
    }
    //console.log(numbers);
    return numbers;
}

// let numberss = genearete(15, 1, 30);
// let numbersss = genearete(15, 100, 500);
// console.log(numberss);
// console.log(numbersss .toString());
// console.log(genearete(15, 1, 30));
// console.log(genearete(15, 100, 500).toString());

// document.write(genearete(15, 100, 500))



//baitap
function find(value, array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == value) {
            return true;
        }
    }
    return false
}
let numbersss = genearete(10, 5, 10);
console.log(numbersss);


console.log(find(7, numbersss));