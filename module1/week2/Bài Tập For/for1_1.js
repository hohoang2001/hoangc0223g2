
//    let min = +prompt("Nhập giá trị thấp nhất");
//     let max = +prompt("nhập giá trị cao nhất");
//         while(min > max ){
//             alert("max không hợp lệ")
//             max = +prompt('nhập lại max lớn hơn min')
//         }
//     let size = +prompt("nhập kích cỡ mảng");
//     let numbers = new Array(size);
//     for (let i = 0; i < numbers.length; i++) {
//         numbers[i] = Math.floor(Math.random() * (max - min + 1) + min)
//     }
//     document.write(numbers)




//  let a
// for(let i = 0; i < 100; i++){
//    if (i == 99){
//    alert("Đã Hoàn Thành")  //Sử dụng vòng lặp để đếm từ 1 đến 100. Khi số là 99, hiển thị hộp thoại thông báo là đã hoàn thành.
//    }
//    else{
//     a = i + "<br>"
//     document.write(a)
//    }
// }






// let temperature = prompt("nhập nhiệt độ")
// let max = 100
// let min = 20
// while(temperature > 100 || temperature < min){ // yêu cầu người dùng nhập lại khi nhập vào nhiệt độ quá 100độ hoặc nhỏ hơn 20độ 
//     alert("vui lòng nhập lại")
//     temperature = prompt("nhập lại nhiệt độ")
// }




// document.write(temperature)
// let fibnsi = 0;
// let fibnsi1 = 1;
// let count = 0;
// while(count < 20) {
//     document.write(fibnsi+','); //hiển thị ra 20 số fibonasi đầu tiên
//     const total = fibnsi + fibnsi1;
//     fibnsi = fibnsi1;
//     fibnsi1 = total;
//     count++;
// }




// let fibnsi = 0;
// let fibnsi1 = 1;
// let count = 0;
// while(true) {
//     if(fibnsi % 5 === 0){
//         document.write(fibnsi);
//         break;
//     }
//     const total = fibnsi + fibnsi1;
//     fibnsi = fibnsi1;
//     fibnsi1 = total;
// }





// let fibnsi = 0;
// let fibnsi1 = 1;
// let count;
// while (true){
//     count = fibnsi + fibnsi1; // số fibbonasi đầu tiên chia hết cho 5
//     fibnsi = fibnsi1;
//     fibnsi1 = count;
//     if (count % 5 == 0 ){
//         document.write(count);
//         break
//     }
//     count++;
// }


// let fibnsi = 1;
// let fibnsi1 = 1;
// let count = 0;
// while(count < 20) {
//     document.write(fibnsi+',');
//     const total = fibnsi + fibnsi1; //hiển thị 20 số đầu tiên của dãy số fibonashi
//     fibnsi = fibnsi1;
//     fibnsi1 = total;
//     count++;
// }





// let sum = 0;
// let a = [1, 1];
// while (a.length < 20) {
//     a.push(a[a.length - 1] + a[a.length - 2]); // hiển thị 20 số đầu tiên của dãy số fibonasi
// }
// console.log(a);



// for (let i = 0; i < a.length;) {
//     sum += + a[i]
//     i++
// }
// document.write(`tổng fibonaci là : ${sum}`)
// console.log(a);


// let sum = 0;
// let a = [1, 1];
// summax(a);
// function summax(b){
//     console.log(b);
//      let x = b[b.length - 1] + b[b.length - 2]; //// tính tổng 20 số đầu tiên của dãy số fibonasi
//     if(b.length<20) {
//         b.push(x);
//         sum += x;
//         summax(b);
//     }
//     else{
//         return sum;
//     }
// }
// console.log(sum);



// let count = 0
// let N = 2
// while(count < numbers) {

// }
// let numbers = prompt("Nhập số lượng nguyên cần in ra") //biến nhập vào của người dùng
// let count = 0;  // biến đếm số lượng các số nguyên tố đã tìm được
// let num = 2;    // số nguyên đầu tiên để kiểm tra

// while (count < numbers) {
//     let isPrime = true;  // giả định rằng num là số nguyên tố
//     for (let i = 2; i < num; i++) {  // kiểm tra num chia hết cho các số từ 2 đến num - 1
//         if (num % i === 0) {
//             isPrime = false;   // num không phải là số nguyên tố
//             break;             // thoát khỏi vòng lặp for
//         }
//     }
//     if (isPrime) {
//         document.write(num + '<br>');   // in số nguyên tố tìm được
//         count++;            // tăng biến đếm lên 1
//     }
//     num++;                // tăng số nguyên kiểm tra lên 1
// }




// for(let i = 1; i <= 100; i++){
//     if( i % 3 == 0 && i % 5 == 0) {
//         document.write('FizzBuzz' + '<br>');
//     }
    
//    else if (i % 3 == 0){
//     document.write('Fizz' + '<br>');     //Hãy viết một chương trình in ra các số từ 1 đến 100. 
//     }
//     else if (i % 5 == 0){               // Nhưng nếu số chia hết cho 3 thì in ra "Fizz", 
//         document.write('Buzz' + '<br>') // 5 thì in ra "Buzz" thay vì in ra số đó. 
//     }                                   // Và nếu số đó chia hết cho cả 3 và 5 thì in ra chữ "FizzBuzz".
//     else {
//         document.write(i + "<br>");
//     }
// }






// let numbers = prompt("bạn muốn đoán trong khoảng nào");
// let numbers_ran = Math.floor(Math.random()*numbers);
// let count = 1
// while(count < 4) {
//     let numberss = prompt("Nhập Số bạn muốn đoán");     //game đoán số
//     if(numberss == numbers_ran) {
//         alert("chúc mừng bạn đã đoán đúng");
//         break;
//     }
//     else if( numberss < numbers_ran) {
//         alert("số bạn nhập nhỏ hơn     bạn có 3 lần đoán đã đoán " + count)
        
//     }
//     else if(numberss > numbers_ran) {
//         alert("số bạn nhập nhỏ hơn     bạn có 3 lần đoán đã đoán " + count)
//     }
//     count++

//  }




// for (let i = 1; i <= 5; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j++) { // tam gác vuông 1
//       row += "*";
//     }
//     console.log(row);
//   }



// for (let i = 1; i <= 5; i++) {
//     let row = "";
//     for (let j = 5; j >= i; j--) { //tam giác vuông 2
//       row += "*";
//     }
//     console.log(row);
//   }




// for (let i = 1; i <= 5; i++) {
//     let row = "";
//     for (let j = 1; j <= 5; j++) { //tam giác vuông 3 
//       if (j <= i) {
//         row += "*";
//       } else {
//         row += " ";
//       }
//     }
//     console.log(row);
//   }




//   for (let i = 1; i <= 5; i++) {
//     let row = "";
//     for (let j = 1; j <= 5; j++) { // tam giác vuông 4
//       if (j >= i) {
//         row += "*";
//       } else {
//         row += " ";
//       }
//     }
//     console.log(row);
//   }
  



//   let numbers = [-3, 5, 1, 3, 2, 10];
//   let max = numbers[0];
//   let index = 0;
//   for(i = 0; i < numbers.length; i++) {   //[Thực hành] Tìm giá trị lớn nhất trong mảng
//     if(numbers[i] > max) {
//         max = numbers[i];
//         index = max;
//     }
//   }
//   alert( 'max:'+ max + " at position " + index)




//   let value = +prompt('Nhập giá trị cần tìm');
//   let numbers = [-3, 5, 1, 3, 2, 10];
//   for(i = 0; i < numbers.length; i++) {
//     if (value == numbers[i]) {
//         alert('số' + numbers[i] + 'vị trí' + i);     //[Thực hành] Tìm giá trị trong mảng
//     }
//     else{
//         alert('Không tìm thấy phần tử');
//         break
//     }
//   }



// let number = +prompt('Nhập Số Tuổi Kiểm Tra')

// if (number <= 120 && number > 0) {
//     alert('Đây là số tuổi của 1 người')      //kiểm tra có phải tuổi của một người
// }
// else{
//     alert('Đây không phải là số tuổi của 1 người')
// }


// let canh_1 = prompt('nhập vào số thực 1')
// let canh_2 = prompt('nhập vào số thực 2')
// let canh_3 = prompt('nhập vào số thực 3')
// if(canh_1 <= 0 || canh_2 <= 0 || canh_3 <= 0){
//    alert('đây không phải là cạnh của một tam giác  ')
// }
// else if(canh_1 + canh_2 <= canh_3 || canh_2 + canh_3 <= canh_1 || canh_1 + canh_3 <= canh_2) {
//     alert('đây không phải là cạnh của một tam giác')
// }
// else{
//     alert('đây là cạnh của một tam giác')
// }




// let arr = [-3,5,1,3,2,10]
// arr.reverse();    //      đảo ngược các phần tử trong mảng
// console.log(arr);


