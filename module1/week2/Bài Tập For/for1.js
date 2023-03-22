let index = +prompt("nhập")
let numbers = new Array (index)
for (let i = 0; i < numbers.length; i++){
    numbers[i] = prompt("nhập số ") + i
}
document.write(numbers)