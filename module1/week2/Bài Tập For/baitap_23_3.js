
let matric = []
for (let i = 0; i < 5; i++) {
    matric[i] = [];
    for (let j = 0; j < 7; j++) {
        matric[i][j] =  Math.ceil(Math.random()*(50-10)+10)
    }
}
console.log(matric);
