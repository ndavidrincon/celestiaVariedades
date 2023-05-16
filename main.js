const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const productsSelectionContainer = document.querySelector(".products-selection-container");
const productDetailCloseIcon = document.querySelector(".product-detail-close");
const burgerIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const aside = document.querySelector(".product-detail");
const contendAside = document.querySelector(".contendAside");
const cardsContainer = document.querySelector(".cards-container");
const iconShoppingCar = document.querySelector(".icon-shopping-car");
const spanCantiProducts = document.querySelector(".numeroProductosAgregados");

let numeroProductosAgregados = 0

menuEmail.addEventListener("click", toggleDesktopMenu);
burgerIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);


function toggleDesktopMenu () {
    contendAside.classList.add("inactive")
    const isMenuCarritoIconClosed = menuCarritoIcon.classList.contains("inactive");

    if (!isMenuCarritoIconClosed) {
        aside.classList.add("inactive")
    };

    desktopMenu.classList.toggle("inactive");
}
    
function toggleMobileMenu () {
    contendAside.classList.add("inactive")

    const isMenuCarritoIconClosed = menuCarritoIcon.classList.contains("inactive");

    if (!isMenuCarritoIconClosed) {
        aside.classList.add("inactive")
    }

    mobileMenu.classList.toggle("inactive");
}

function toggleCarritoAside () {
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add("inactive")
    };
    
    const isProductDetailAsaid = contendAside.classList.contains("inactive");
    
    if (!isProductDetailAsaid) {
        contendAside.classList.add("inactive");
    }
    
    aside.classList.toggle("inactive");
}

const productsInTheCar = []

const productList = [];

productList.push ({
    id: 0,
    name: "Medio litro Detergente floral",
    price: 4800,
    image: "https://i.ibb.co/4g6KjDV/Detergente-floral.jpg",
    type: "liquido",
    detail: "Hecho 100% en Colombia, no mancha la ropa, despercudido profundo."
});

productList.push ({
    id: 0,
    name: "Litro Detergente floral",
    price: 7900,
    image: "https://i.ibb.co/4g6KjDV/Detergente-floral.jpg",
    type: "liquido",
    detail: "Hecho 100% en Colombia, no mancha la ropa, despercudido profundo."
});

productList.push ({
    id: 0,
    name: "Galon Detergente floral",
    price: 27200,
    image: "https://i.ibb.co/4g6KjDV/Detergente-floral.jpg",
    type: "liquido",
    detail: "Hecho 100% en Colombia, no mancha la ropa, despercudido profundo."
});

productList.push ({
    id: 1,
    name: "Medio litro Detergente tipo rey",
    price: 4800,
    image: "https://i.ibb.co/2M1zKCp/Detergente-tipo-rey.jpg",
    type: "liquido",
    detail: "Hecho 100% en Colombia, detergente multiusos, despercudido profundo."
});

productList.push ({
    id: 1,
    name: "Litro Detergente tipo rey",
    price: 7900,
    image: "https://i.ibb.co/2M1zKCp/Detergente-tipo-rey.jpg",
    type: "liquido",
    detail: "Hecho 100% en Colombia, detergente multiusos, despercudido profundo."
});

productList.push ({
    id: 1,
    name: "Galon Detergente tipo rey",
    price: 27200,
    image: "https://i.ibb.co/2M1zKCp/Detergente-tipo-rey.jpg",
    type: "liquido",
    detail: "Hecho 100% en Colombia, detergente multiusos, despercudido profundo."
});

productList.push ({
    id: 2,
    name: "Medio litro suavizante aroma azul profundo",
    price: 4300,
    image: "https://i.ibb.co/gmwj5fq/Suavizante-espeso.jpg",
    type: "liquido",
    detail: "Hecho 100% en Colombia, Suavizante espeso, aroma perdurable y producto rendidor."
});

productList.push ({
    id: 2,
    name: "Litro suavizante aroma azul profundo",
    price: 6800,
    image: "https://i.ibb.co/gmwj5fq/Suavizante-espeso.jpg",
    type: "liquido",
    detail: "Hecho 100% en Colombia, detergente multiusos, despercudido profundo."
});

productList.push ({
    id: 2,
    name: "Galon suavizante aroma azul profundo",
    price: 22000,
    image: "https://i.ibb.co/gmwj5fq/Suavizante-espeso.jpg",
    type: "liquido",
    detail: "Hecho 100% en Colombia, detergente multiusos, despercudido profundo."
});

productList.push ({
    id: 3,
    name: "Medio litro Jabon para manos",
    price: 4300,
    image: "https://i.ibb.co/WDzgV7r/Jsbon-liquido-de-manos.jpg",
    type: "liquido",
    detail: "Hecho 100% en Colombia, Jabon delicado para manos, disponibilidad en frutos rojos y avena."
});

productList.push ({
    id: 3,
    name: "Litro Jabon para manos",
    price: 6800,
    image: "https://i.ibb.co/WDzgV7r/Jsbon-liquido-de-manos.jpg",
    type: "liquido",
    detail: "Hecho 100% en Colombia, Jabon delicado para manos, disponibilidad en frutos rojos y avena."
});

productList.push ({
    id: 3,
    name: "Galon Jabon para manos",
    price: 22000,
    image: "https://i.ibb.co/WDzgV7r/Jsbon-liquido-de-manos.jpg",
    type: "liquido",
    detail: "Hecho 100% en Colombia, Jabon delicado para manos, disponibilidad en frutos rojos y avena."
});

productList.push ({
    id: 4,
    name: "Vinagre industrial",
    price: 6500,
    image: "https://i.ibb.co/Lg6trd4/Vinagre-industrial.jpg",
    type: "liquido",
    detail: "Hecho 100% en Colombia, vinagre al 15% de consentración."
});

productList.push ({
    id: 5,
    name: "Limpia pisos espeso Maracuya",
    price: 7500,
    image: "https://i.ibb.co/TkJFyCf/fabuloso-maracuya.jpg",
    type: "liquido",
    detail: "Hecho 100% en Colombia, limpiador desinfectante para pisos, tiene un aroma tan rico que te va a provocar comertelo (No se come)."
});

productList.push ({
    id: 6,
    name: "Trapeador bicolor 900gr",
    price: 8000,
    image: "https://i.linio.com/p/8903fa5c2726a5b073175d3da65ce1aa-product.jpg",
    type: "liquido",
    detail: "Hecho 100% en algodon, lo tenemos en color blanco ó blanco con negro."
});

productList.push ({
    id: 1,
    name: "Trapeador bicolor 1200gr",
    price: 10000,
    image: "https://i.linio.com/p/8903fa5c2726a5b073175d3da65ce1aa-product.jpg",
    type: "Utensilio",
    detail: "Hecho 100% en algodon, lo tenemos en color blanco ó blanco con negro."
});

productList.push ({
    id: 2,
    name: "Cepillo de piso",
    price: 7000,
    image: "https://i.ibb.co/XC7SGW0/cepillo-duro.jpg",
    type: "Utensilio",
    detail: "Hecho 100% en algodon, lo tenemos en color blanco ó blanco con negro."
});

productList.push ({
    id: 3,
    name: "cepillo de embetunar",
    price: 620,
    image: "https://i.ibb.co/prTf46p/cepillo-para-embetunar.jpg",
    type: "Utensilio",
    detail: "Hecho 100% en algodon, lo tenemos en color blanco ó blanco con negro."
});


function renderProducts (products) {

    for ( const product of products) {

        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        const productImg = document.createElement("img");
        productImg.setAttribute("src",product.image);
        productImg.addEventListener("click", () => {
            contendAside.classList.remove("inactive");
            renderDetailProduct(product);
        });
        
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");

        const productInfoDiv = document.createElement("div");

        // const productPriceUl = document.createElement("ul");
        // productPriceUl.classList.add("Product-Info-Price");
        
        // const productPriceLi = document.createElement("li");
        
        // productPriceLi.innerText ="$"+ product.price.toLocaleString();

        // productPriceUl.appendChild(productPriceLi);

        // const productName = document.createElement("p");
        // productName.innerText = product.name;
        // productInfoDiv.append(productPriceUl, productName);

        const productPrice = document.createElement("p");
        productPrice.classList.add("Product-Info-Price");
        productPrice.innerText ="$"+ product.price.toLocaleString();
        const productName = document.createElement("p");
        productName.innerText = product.name;
        productInfoDiv.append(productPrice, productName);
        
        const productInfoFigure = document.createElement("figure");
        
        const productImgCart = document.createElement("img");
        productImgCart.classList.add("icon-shopping-car");
        productImgCart.setAttribute("src","./icons/bt_add_to_cart.svg");
        // productImgCart.onclick = agregarProductoAlCarrito;
        // productImgCart.addEventListener("click",function(){ agregarProductoAlCarrito (argumento) }); ** En caso de que necesite un arguento para la funcion que quiero relacionar o asociar, entonces deberia meter ese funcion dentro de otra para que no me genere un error como en el ejemplo
        productImgCart.addEventListener("click", () => {
            renderProductsSelections(product);
        });

        productInfoFigure.appendChild(productImgCart);
        productInfo.append(productInfoDiv, productInfoFigure);
        productCard.append(productImg, productInfo);
        cardsContainer.appendChild(productCard);       
    };
}

renderProducts(productList)

function renderProductsSelections (product) {

    productsInTheCar.push(product) // esta linea agrega el producto al final de lista del array de productos

    const shoppingCartSelection = document.createElement("div");
    shoppingCartSelection.classList.add("shopping-cart")

    const figureMiniature = document.createElement("figure");
    const imgFigureMiniature = document.createElement("img");
    imgFigureMiniature.setAttribute("src", product.image);
    figureMiniature.appendChild(imgFigureMiniature);

    const pProductNameSelection = document.createElement("p");
    pProductNameSelection.innerText = product.name;
    const pProductPriceSelection = document.createElement("p");
    pProductPriceSelection.innerText = "$" + product.price;

    const imgIconClose = document.createElement("img");
    imgIconClose.classList.add("x");
    imgIconClose.setAttribute("src", "./icons/icon_close.png");
    imgIconClose.addEventListener("click", () => {
        productsSelectionContainer.removeChild(shoppingCartSelection);
        numeroProductosAgregados--
        spanCantiProducts.innerText = numeroProductosAgregados
    })
    
    shoppingCartSelection.append(figureMiniature, pProductNameSelection, pProductPriceSelection, imgIconClose);
    productsSelectionContainer.appendChild(shoppingCartSelection)

    numeroProductosAgregados++
    spanCantiProducts.innerText = numeroProductosAgregados
}

function renderDetailProduct (product) {

    const aside = document.createElement("aside");
    aside.classList.add("extended-product-detail");


    const divImgClose = document.createElement("div");
    divImgClose.classList.add("product-detail-close");
    divImgClose.addEventListener("click", () => {
        contendAside.removeChild(aside);
    });
    const imgIconCloseAside = document.createElement("img");
    imgIconCloseAside.setAttribute("src", "./icons/icon_close.png");
    divImgClose.appendChild(imgIconCloseAside);

    const imgProduct = document.createElement("img");
    imgProduct.setAttribute("src", product.image);

    const divDescription = document.createElement("div");
    divDescription.classList.add("extended-product-info");
    const pPrice = document.createElement("p");
    pPrice.innerText = product.price;
    const pName = document.createElement("p");
    pName.innerText = product.name;
    const pDetail = document.createElement("p");
    pDetail.innerText = product.detail;
    const button = document.createElement("button");
    button.classList.add("primary-button")
    button.addEventListener("click", () => {
        renderProductsSelections(product);
    });
    const imgAddToCard = document.createElement("img");
    imgAddToCard.setAttribute("src", "./icons/bt_add_to_cart.svg");
    button.appendChild(imgAddToCard);

    divDescription.append(pPrice, pName, pDetail, button);
    aside.append(divImgClose, imgProduct, divDescription);
    contendAside.appendChild(aside);
}