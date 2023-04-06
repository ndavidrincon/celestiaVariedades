const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const productsSelectionContainer = document.querySelector(".products-selection-container");
const productDetailCloseIcon = document.querySelector(".product-detail-close");
const burgerIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const aside = document.querySelector(".product-detail");
const extendedProductDetail = document.querySelector(".extended-product-detail");
const cardsContainer = document.querySelector(".cards-container");
const iconShoppingCar = document.querySelector(".icon-shopping-car");
let numeroProductosAgregados = 0

menuEmail.addEventListener("click", toggleDesktopMenu);
burgerIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);
productDetailCloseIcon.addEventListener("click", closeProductDetailAsaid);


function toggleDesktopMenu () {
    extendedProductDetail.classList.add("inactive")
    const isMenuCarritoIconClosed = menuCarritoIcon.classList.contains("inactive");

    if (!isMenuCarritoIconClosed) {
        aside.classList.add("inactive")
    };

    desktopMenu.classList.toggle("inactive");
}
    
function toggleMobileMenu () {
    extendedProductDetail.classList.add("inactive")

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
    
    const isProductDetailAsaid = extendedProductDetail.classList.contains("inactive");
    
    if (!isProductDetailAsaid) {
        extendedProductDetail.classList.add("inactive");
    }
    
    aside.classList.toggle("inactive");
}

function openExtendedProductDetail () {
    aside.classList.add("inactive");
    desktopMenu.classList.add("inactive");
    mobileMenu.classList.add("inactive");

    extendedProductDetail.classList.remove("inactive"); // remove porque le queremos quitar la clase inactive para que aparezca;
}

function closeProductDetailAsaid () {
    extendedProductDetail.classList.add("inactive");
}

const productsInTheCar = []

const productList = [];
productList.push ({
    id: 1,
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=600"
});

productList.push ({
    id: 2,
    name: "Tv",
    price: 800,
    image: "https://images.pexels.com/photos/6976094/pexels-photo-6976094.jpeg?auto=compress&cs=tinysrgb&w=600"
});

productList.push ({
    id: 3,
    name: "Laptop",
    price: 620,
    image: "https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=600"
});

function renderProducts (products) {

    for ( const product of products) {

        const productCard = document.createElement("div");
        productCard.classList.add('product-card');

        const productImg = document.createElement("img");
        productImg.setAttribute("src",product.image);
        productImg.addEventListener("click", openExtendedProductDetail)
        
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");

        const productInfoDiv = document.createElement("div");
        const productPrice = document.createElement("p");
        productPrice.innerText ="$"+product.price;
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

    productsInTheCar.push(product)

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

    spanCantiProducts = document.querySelector(".numeroProductosAgregados");
    numeroProductosAgregados++
    spanCantiProducts.innerText = numeroProductosAgregados
}
