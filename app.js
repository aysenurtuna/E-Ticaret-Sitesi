const products = [
    {
        id: 1,
        category: "erkek ayakkabi",
        price: 179.99,
        img: "images/istockphoto-145853626-612x612.jpg",
        desc: `Kahverengi deri erkek ayakkabısı`,
    },
    {
        id: 2,
        category: "kadin ayakkabi",
        price: 189.99,
        img: "images/istockphoto-157641930-612x612.jpg",
        desc: `Kırmızı topuklu ayakkabı`,
    },
    {
        id: 3,
        category: "erkek canta",
        price: 89.99,
        img: "images/istockphoto-167759597-612x612.jpg",
        desc: `Siyah sırt çantası`,
    },
    {
        id: 4,
        category: "erkek",
        price: 90.99,
        img: "images/istockphoto-174927877-612x612.jpg",
        desc: `Düz kesim kot pantolon`,
    },
    {
        id: 5,
        category: "kadin",
        price: 199.99,
        img: "images/istockphoto-184354439-612x612.jpg",
        desc: `Mavi puantiyeli kırmızı elbise`,
    },
    {
        id: 6,
        category: "kadin canta",
        price: 59.99,
        img: "images/istockphoto-618731934-612x612.jpg",
        desc: `Kırmızı ince askılı çanta`,
    },
    {
        id: 7,
        category: "kadin",
        price: 179.99,
        img: "images/istockphoto-625410268-612x612.jpg",
        desc: `Beyaz puantiyeli kırmızı elbise`,
    },
    {
        id: 8,
        category: "kadin ayakkabi",
        price: 139.99,
        img: "images/istockphoto-627372978-612x612.jpg",
        desc: `Kırmızı topuklu ayakkabı`,
    },
    {
        id: 9,
        category: "kadin",
        price: 69.99,
        img: "images/istockphoto-882157056-612x612.jpg",
        desc: `Kırmızı mini etek`,
    },
    {
        id: 10,
        category: "kadin",
        price: 99.99,
        img: "images/istockphoto-934408078-612x612.jpg",
        desc: `Mavi düz elbise`,
    },
    {
        id: 11,
        category: "kadin",
        price: 95.99,
        img: "images/istockphoto-961849932-612x612.jpg",
        desc: `Simli siyah elbise`,
    },
    {
        id: 12,
        category: "kadin canta",
        price: 59.99,
        img: "images/istockphoto-1153463811-612x612.jpg",
        desc: `Sarı kol çantası`,
    },
    {
        id: 13,
        category: "kadin",
        price: 189.99,
        img: "images/istockphoto-1185849322-612x612.jpg",
        desc: `Kırmızı, pileli elbise`,
    },
    {
        id: 14,
        category: "erkek",
        price: 69.99,
        img: "images/istockphoto-1207507361-612x612.jpg",
        desc: `Düğmeli mavi tişört`,
    },
    {
        id: 15,
        category: "kadin ayakkabi",
        price: 139.99,
        img: "images/istockphoto-1218051565-612x612.jpg",
        desc: `Beyaz spor ayakkabı`,
    },
    {
        id: 16,
        category: "erkek ayakkabi",
        price: 129.99,
        img: "images/istockphoto-1263739842-612x612.jpg",
        desc: `Siyah deri ayakkabı`,
    },
    {
        id: 17,
        category: "kadin",
        price: 79.99,
        img: "images/istockphoto-1278802435-612x612.jpg",
        desc: `Sarı kazak`,
    },
    {
        id: 18,
        category: "kadin",
        price: 199.99,
        img: "images/istockphoto-1300929834-612x612.jpg",
        desc: `Askılı pembe elbise`,
    },
    {
        id: 19,
        category: "erkek",
        price: 119.99,
        img: "images/istockphoto-1306709207-612x612.jpg",
        desc: `Siyah kapşonlu sweatshirt`,
    },
    {
        id: 20,
        category: "erkek",
        price: 39.99,
        img: "images/istockphoto-1318516986-612x612.jpg",
        desc: `Düz beyaz tişört`,
    },
    {
        id: 21,
        category: "erkek",
        price: 49.99,
        img: "images/istockphoto-1318517676-612x612.jpg",
        desc: `Düz sarı tişört`,
    },
    {
        id: 22,
        category: "kadin canta",
        price: 79.99,
        img: "images/istockphoto-1359116289-612x612.jpg",
        desc: `İnce askılı kol çantası`,
    },
    {
        id: 23,
        category: "kadin canta",
        price: 89.99,
        img: "images/istockphoto-1362539613-612x612.jpg",
        desc: `Pembe el çantası`,
    },
    {
        id: 24,
        category: "erkek",
        price: 109.99,
        img: "images/istockphoto-1368917122-612x612.jpg",
        desc: `Siyah gömlek`,
    },
    {
        id: 25,
        category: "kadin",
        price: 125.99,
        img: "images/istockphoto-1373165288-612x612.jpg",
        desc: `Siyah kadın kışlık kaban`,
    },
    {
        id: 26,
        category: "kadin",
        price: 139.99,
        img: "images/istockphoto-1373165328-612x612.jpg",
        desc: `Yumuşacık kışlık kaban`,
    },
    {
        id: 27,
        category: "kadin",
        price: 119.99,
        img: "images/istockphoto-1373166071-612x612.jpg",
        desc: `Pembe kışlık kaban`,
    },
    {
        id: 28,
        category: "erkek",
        price: 99.99,
        img: "images/istockphoto-1373166179-612x612.jpg",
        desc: `Siyah mevsimlik ceket`,
    },
    {
        id: 29,
        category: "kadin",
        price: 119.99,
        img: "images/istockphoto-1373166284-612x612.jpg",
        desc: `Deri yeşil elbise`,
    },
    {
        id: 30,
        category: "kadin",
        price: 149.99,
        img: "images/istockphoto-1373166520-612x612.jpg",
        desc: `Pembe kaşe kaban`,
    },
    {
        id: 31,
        category: "kadin",
        price: 59.99,
        img: "images/istockphoto-1373292562-612x612.jpg",
        desc: `Beyaz dar kesim gömlek`,
    },
    {
        id: 32,
        category: "erkek",
        price: 59.99,
        img: "images/istockphoto-1373777124-612x612.jpg",
        desc: `Mavi gömlek`,
    },
    {
        id: 33,
        category: "kadin",
        price: 49.99,
        img: "images/istockphoto-1387420496-612x612.jpg",
        desc: `Pembe kısa tunik`,
    },
    
]

//açılır menu
let menu = document.querySelector(".menu");
let openMenu = document.querySelector(".open-menu");

menu.addEventListener("click", function () {
    openMenu.classList.toggle('show');
})

// kategori sayfasında ürün listeleme

let addProduct = document.querySelector('.addProduct');

function showProduct(product) {
    addProduct.innerHTML += `<div class="col-sm-3 my-5 p-4"><a href="detay.html"><img src="${product.img}" width="100% height="250px" alt="" class="img-fit"/></a><span class="fiyat ms-1">${product.price}</span></div>`;

}

function showAllProducts() {
    addProduct.innerHTML = "";
    for (let i = 0; i < products.length; i++) {
        showProduct(products[i]);
    }
}

function showWomenProducts() {
    addProduct.innerHTML = "";
    var product = products.map(function (prod) {
        if (prod.category.indexOf("kadin") != -1) {
            showProduct(prod);
        }
    })
}

function showMenProducts() {
    addProduct.innerHTML = "";
    var product = products.map(function (prod) {
        if (prod.category.indexOf("erkek") != -1) {
            showProduct(prod);
        }
    })
}

function showBagProducts() {
    addProduct.innerHTML = "";
    var product = products.map(function (prod) {
        if (prod.category.indexOf("canta") != -1) {
            showProduct(prod);
        }
    })
}

function showShoeProducts() {
    addProduct.innerHTML = "";
    var product = products.map(function (prod) {
        if (prod.category.indexOf("ayakkabi") != -1) {
            showProduct(prod);
        }
    })
}

//detay sayfası 

let productArray = [...products];
let i = Math.floor(Math.random() * productArray.length);

function Women() {
    i=0;
    productArray = []
    var product = products.map(function (prod) {
        if (prod.category.indexOf("kadin") != -1) {
            productArray.push(prod);
        }
    })
    showDetails();
}

function Men() {
    i=0;
    productArray = []
    var product = products.map(function (prod) {
        if (prod.category.indexOf("erkek") != -1) {
            productArray.push(prod);
        }
    })
    showDetails();
}

function Bag() {
    i=0;
    productArray = []
    var product = products.map(function (prod) {
        if (prod.category.indexOf("canta") != -1) {
            productArray.push(prod);
        }
    })
    showDetails();
}

function Shoes() {
    i=0;
    productArray = []
    var product = products.map(function (prod) {
        if (prod.category.indexOf("ayakkabi") != -1) {
            productArray.push(prod);
        }
    })
    showDetails();
}


let previous = document.querySelector(".previous");
let next = document.querySelector(".next");

function showDetails(productIndex) {
    console.log(productIndex)
    let detail = document.querySelector(".detail")
    detail.innerHTML = `<div class="col-md-6 detay mb-5">
    <img src="${productArray[productIndex].img}" alt="" width="50%" height="auto"/>
  </div>
  <div class="col-md-3 detay mb-5">
    <p class="description pe-5 pt-5">${productArray[productIndex].desc}</p>
    <p class="fiyat pe-5">${productArray[productIndex].price}</p>
    <img src="images/icons8-heart-50.png" class="heart" width="30px"/>
    <button class="sepete-ekle">Sepete ekle</button>
  </div>`;
}

next.addEventListener("click", function () {
    i++;
    if (i == productArray.length) {
        i = 0
    }
    showDetails(i);
})

previous.addEventListener("click", function () {
    i--;
    if (i == -1) {
        i = productArray.length - 1;
    }
    showDetails(i);
})



