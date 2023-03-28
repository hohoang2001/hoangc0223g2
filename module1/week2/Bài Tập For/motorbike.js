let moto = [
    {
        name: "Suzuki Impulse 125 Fi",
        image: "https://muaxe.minhlongmoto.com/wp-content/uploads/2020/08/suzuki-impulse-trang-nau-bac.png",
        price: "31.500.000 đ",
        made: "Từ Suzuki Việt Nam",
        cubicmeter: "50-125cc",
        type: "Xe tay ga",
        advise: "Yêu cầu tư vấn",
        compare: "So Sánh",
        promotion:"Khuyến mãi",
        smallname:"SUZUKI"
    },
    {
        name: "Suzuki Burgman 125 Street",
        image: "https://muaxe.minhlongmoto.com/wp-content/uploads/2021/02/burgman-125-trang.jpg",
        price: "44.500.000 đ",
        made: "Từ Suzuki Việt Nam",
        cubicmeter: "50-125cc",
        type: "Xe tay ga",
        advise: "Yêu cầu tư vấn",
        compare: "So Sánh",
        promotion:"Khuyến mãi",
        smallname:"SUZUKI"
    },
    {
        name: "Honda CB15OX",
        image: "https://muaxe.minhlongmoto.com/wp-content/uploads/2022/02/cb150x-xanh-reu.jpg",
        price: "73.000.000 đ",
        made: "Từ Honda Việt Nam",
        cubicmeter: "150cc",
        type: "Xe Côn Tay",
        advise: "Yêu cầu tư vấn",
        compare: "So Sánh",
        promotion:"Khuyến mãi",
        smallname:"Honda"
    },
    {
        name: "Honda Vario 160",
        image: "https://muaxe.minhlongmoto.com/wp-content/uploads/2022/03/vario-160-cbs-den-tem-do.jpg",
        price: "49.500.000 đ - 53.500.000 đ",
        made: "Từ Honda Indonesia",
        cubicmeter: "Phân khối: 155 - 160cc",
        type: "Xe tay ga",
        advise: "Yêu cầu tư vấn",
        compare: "So Sánh",
        promotion:"Khuyến mãi",
        smallname:"Honda"
    }
]


for(let i = 0; i < moto.length; i++){
    document.body.innerHTML +=
    `<div class="produc">
        <span class="km">${moto[i].promotion}</span>
        <img style="width: 200px;"
            src="${moto[i].image}" alt=“”>
        <div class="name">
            <span >${moto[i].smallname}</span>
        </div>
       
        <span class="namee" >
            <p> <a href="">${moto[i].name}</a></p>
        </span>
        <span  class="small">
        ${moto[i].price}
        </span>
        <p class = "demii">
        ${moto[i].made}
        </p>
            <p class="demo">
            ${moto[i].cubicmeter}
            </p>
       
        <p class="demi">
            Loại xe:${moto[i].type}
        </p>
 
        <h4 class="cick"><a href=“”>${moto[i].advise}</a></h4>
        <h3 class="cick"><a href=“”>${moto[i].compare}</a></h3>
    </div>`
}
