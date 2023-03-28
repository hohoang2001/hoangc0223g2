// let computer = {
//     name: "Laptop MSI Modern 14 C5M 030VN",
//     Image: "https://philong.com.vn/media/product/250-28978-1.jpg", 
//     promotion_1: -0.21,
//     promotional_price: 16990000,
//     price: 11990000,
//     hastab: ['bán chạy', 'khuyến mãi'],
//     promotion: "4 Khuyến mãi: vòng quay may mắn..."
// }
let c0223g2 = [
        {
            name: "Nguyễn Văn A",
            dob: 10/10/2000,
            sex: "boy",
            phone: "01284992934",
            mail: "a@gmail.com"

        },
        {
            name: "Nguyễn Thị B",
            dob: 10/10/2003,
            sex: "girl",
            phone: "01284992934",
            mail: "b@gmail.com"

        },
        {
            name: "Nguyễn Văn C",
            dob: 20/11/2002,
            sex: "boy",
            phone: "01284992934",
            mail: "c@gmail.com"

        },
        {
            name: "Nguyễn Văn C",
            dob: 20/11/2002,
            sex: "boy",
            phone: "01284992934",
            mail: "c@gmail.com"

        }
    ]
    for(let i = 0 ; i < c0223g2.length; i++){
        document.getElementById("student").innerHTML +=
        `
            <tr>
                <td>${c0223g2[i].name}</td>
                <td>${c0223g2[i].dob}</td>
                <td>${c0223g2[i].sex}</td>
                <td>${c0223g2[i].phone}</td>
                <td>${c0223g2[i].mail}</td>
            </tr>
        `
    }
