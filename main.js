swal({
    title: "Nuestra forma de trabajo!", 
    text: "✅ Se reciben pedidos hasta la 1 PM para ser despachados en el transcurso del día. \n ✅ Los pedidos que entren después de la 1pm se entregaran para el siguiente día después de la 1pm. \n \n Esto para hacer más productivo y mantener gratuito el domicilio dentro de la ciudad de Bogotá. 😊",
});

const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const salirDelCarrito = document.querySelector(".salir-Del-Carrito")
const productsSelectionContainer = document.querySelector(".products-selection-container");
const productDetailCloseIcon = document.querySelector(".product-detail-close");
const burgerIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const aside = document.querySelector(".product-detail");
const contendAside = document.querySelector(".contendAside");
const cardsContainer = document.querySelector(".cards-container");
const iconShoppingCar = document.querySelector(".icon-shopping-car");
const spanCantiProducts = document.querySelector(".numeroProductosAgregados");

let numeroProductosAgregados = 0;
let selectedQuantity;
let selectedPrices;
let selectedImage;

menuEmail.addEventListener("click", toggleDesktopMenu);
burgerIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);
salirDelCarrito.addEventListener("click", toggleCarritoAside)


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

// PRODUCTOS LIQUIDOS

productList.push ({
    id: 0,
    name: "Detergente floral",
    quantities: {
        "1/2 litro": 4800,
        "Litro": 7900,
        "Galon": 25200,
    },
    image: "https://i.ibb.co/4g6KjDV/Detergente-floral.jpg",
    imageGalon: "https://i.ibb.co/tPSvDrs/Galon-detergente-floral.jpg",
    type: "liquido",
    detail: "Hecho 100% en Colombia, no mancha la ropa, despercudido profundo."
});

productList.push ({
    id: 1,
    name: "Detergente tipo rey",
    quantities: {
        "1/2 litro": 4800,
        "Litro": 7900,
        "Galon": 25200,
    },
    image: "https://i.ibb.co/2M1zKCp/Detergente-tipo-rey.jpg",
    imageGalon: "https://i.ibb.co/Wcp55J4/Galon-rey-liquido.jpg",
    type: "liquido",
    detail: "Hecho 100% en Colombia, detergente multiusos, despercudido profundo."
});

productList.push ({
    id: 2,
    name: "Suavizante aroma azul profundo",
    quantities: {
        "1/2 litro": 4300,
        "Litro": 7500,
        "Galon": 22200,
    },
    image: "https://i.ibb.co/gmwj5fq/Suavizante-espeso.jpg",
    imageGalon: "https://i.ibb.co/Y76Lxch/Galon-suavizante.jpg",
    type: "liquido",
    detail: "Hecho 100% en Colombia, Suavizante espeso, aroma perdurable y producto rendidor."
}); 

productList.push ({
    id: 3,
    name: "Jabon para manos",
    quantities: {
        "1/2 litro": 4300,
        "Litro": 6800,
        "Galon": 21000,
    },
    image: "https://i.ibb.co/WyfnNPV/Jabon-de-manos.jpg",
    imageGalon: "https://i.ibb.co/DGG7bpy/Galon-jabon-para-manos.jpg",
    type: "liquido",
    detail: "Hecho 100% en Colombia, delicado para manos, de momento disponible en frutos rojos y avena. Delicado con tus manos"
});

productList.push ({
    id: 4,
    name: "Vinagre industrial",
    quantities: {
        "1/2 litro": 4000,
        "Litro": 6500,
        "Galon": 21000,
    },
    image: "https://i.ibb.co/Lg6trd4/Vinagre-industrial.jpg",
    imageGalon: "https://i.ibb.co/8KzpZh0/Galon-vinagre-industrial.jpg",
    type: "liquido",
    detail: "Hecho 100% en Colombia, Al 15% de consentración. Un producto ideal para las personas que no pueden asear con cloro. Limpia y desinfecta."
});

productList.push ({
    id: 5,
    name: "Limpia pisos espeso",
    quantities: {
        "1/2 litro": 4300,
        "Litro": 7500,
        "Galon": 22200,
    },
    image: "https://i.ibb.co/djn7mkK/Limpia-pisos.jpg",
    imageGalon: "https://i.ibb.co/CMvLFtM/Galon-limpia-pisos.jpg",
    type: "liquido",
    detail: "Hecho 100% en Colombia, limpiador desinfectante para pisos espeso, tiene un aroma tan rico que te va a provocar comertelo (No se come). Disponible en aroma maracuya y lima limon"
});

productList.push ({
    id: 6,
    name: "Limpia pisos liquido",
    quantities: {
        "1/2 litro": 4300,
        "Litro": 7500,
        "Galon": 22000,
    },
    image: "https://i.ibb.co/zhWwh2n/Limpia-pisos-lavanda.jpg",
    imageGalon: "https://i.ibb.co/CMvLFtM/Galon-limpia-pisos.jpg",
    type: "liquido",
    detail: "Hecho 100% en Colombia, limpiador desinfectante para pisos liquido, Disponible en aroma lavanda"
});

productList.push ({
    id: 7, 
    name: "Hipoclorito al 0.8%",
    quantities: {
        "1/2 litro": 2700,
        "Litro": 4000,
        "Galon": 12000,
    },
    image: "https://i.ibb.co/LvXrtLF/blanqueador.jpg",
    imageGalon: "https://i.ibb.co/wcpVhnh/Galon-blanqueador.jpg",
    type: "liquido",
    detail: "Hecho 100% en Colombia."
});

productList.push ({
    id: 8, 
    name: "Desmanchador ropa color",
    quantities: {
        "1/2 litro": 4000,
        "Litro": 6500,
        "Galon": 21000,
    },
    image: "https://i.ibb.co/pyYv4xh/cloro-para-ropa-color.jpg",
    imageGalon: "https://i.ibb.co/0mghym6/Galon-clorox-ropa-color.jpg",
    type: "liquido",
    detail: "Hecho 100% en Colombia. Este producto es un potencializador de lavado, no remplaza el detergente fue creado para mejorar el resultado de cada lavada 😊"
});

productList.push ({
    id: 9, 
    name: "Desengrasante industrial.",
    quantities: {
        "1/2 litro": 4200,
        "Litro": 7200,
        "Galon": 24000,
    },
    image: "https://i.ibb.co/72Dh68n/Desengrasante-industrial.jpg",
    imageGalon: "https://i.ibb.co/5Mn7m83/Galon-desengrasante-industrial.jpg",
    type: "liquido",
    detail: "Hecho 100% en Colombia. Este producto es un desengrasante fuerte para uso industrial y grasa profunda, en su aplicasión se recomienda el uso de tapabocas y guantes, tener cuidado con salpicaciones en cualquier parte del cuerpo, en ese caso lavar con abundante agua. 😊"
});

productList.push ({
    id: 10, 
    name: "Desengrasante espeso.",
    quantities: {
        "1/2 litro": 4800,
        "Litro": 7800,
        "Galon": 26000,
    },
    image: "https://i.ibb.co/fY105t1/Desengrasante-espeso-1.jpg",
    imageGalon: "https://i.ibb.co/sjZ5Ffd/Galon-desengrasante-multiusos.jpg",
    type: "liquido",
    detail: "Hecho 100% en Colombia. Este producto es un desengrasante Multiusos para uso domestico, cocina, baños, ropa, etc, en su aplicasión tener cuidado con salpicaciones en cualquier parte del rostro, en ese caso lavar con abundante agua. 😊"
});

productList.push ({
    id: 11, 
    name: "Gel antibacterial.",
    quantities: {
        "1/2 litro": 5200,
        "Litro": 9900,
        "Galon": 32000,
    },
    image: "https://i.ibb.co/3W35Kh0/Gel-antibacterial.jpg",
    type: "liquido",
    detail: "Hecho 100% en Colombia. Sustancia que destruye las bacterias o les impide que crezcan y causen enfermedad, se emplea como complemento del agua y el jabón para lavarse las manos.  😊"
});

productList.push ({
    id: 12, 
    name: "Jabon liquido loza espeso.",
    quantities: {
        "1/2 litro": 4200,
        "Litro": 7800,
        "Galon": 26000,
    },
    image: "https://i.ibb.co/7JVxp9B/jabon-liquido-loza.jpg",
    imageGalon: "https://i.ibb.co/PmdZdpb/Galon-lava-loza.jpg",
    type: "liquido",
    detail: "Hecho 100% en Colombia. Detergente multipropósito, que además puedes usar para limpiar tu cocina y grifería o quitar manchas de la ropa. Amigable con la delicada piel de tus manos.  😊"
});

productList.push ({
    id: 13, 
    name: "Limpia vidrios.",
    quantities: {
        "1/2 litro": 4200,
        "Litro": 6300,
        "Galon": 20500,
    },
    image: "https://i.ibb.co/zhf74qZ/Limpia-vidrios.jpg",
    image: "https://i.ibb.co/s9BXkbp/Galon-de-limpia-vidrios.jpg",
    type: "liquido",
    detail: "Hecho 100% en Colombia. Un limpiavidrios es un producto creado cuyos ingredientes facilitan la limpieza y mantenimiento de vidrios, cristales y espejos ya que remueven la suciedad, grasas e imperfecciones, también prometen un secado rápido con el plus de un agradable aroma. 😊"
});

productList.push ({
    id: 14, 
    name: "Citronela con bicarbonato.",
    quantities: {
        "1/2 litro": 4200,
        "Litro": 7000,
        "Galon": 23000,
    },
    image: "https://i.ibb.co/y44MK7f/Limpiaador-multiusos.jpg",
    imageGalon: "https://i.ibb.co/9qLjLKQ/Galon-limpiador-multiusos.jpg",
    type: "liquido",
    detail: "Hecho 100% en Colombia. Limpiador liquido multiusos, ayuda a desinfectar y despercudir superficies con aroma delicioso y perdurable. 😊"
});

productList.push ({
    id: 15, 
    name: "Alcohol industrial 96%.",
    quantities: {
        "1/2 litro": 6700,
        "Litro": 12500,
        "Galon": 39000,
    },
    image: "https://i.ibb.co/swbXS0F/Alchohol-industrial.jpg",
    imageGalon: "https://i.ibb.co/qk53Rwq/Galon-alcohol-industrial.jpg",
    type: "liquido",
    detail: "Hecho 100% en Colombia. 😊"
});

productList.push ({
    id: 16, 
    name: "Shampoo para carros.",
    quantities: {
        "1/2 litro": 4300,
        "Litro": 7200,
        "Galon": 25000,
    },
    image: "https://i.ibb.co/JC95fcd/Shampoo-para-carros.jpg",
    imageGalon: "https://i.ibb.co/Cb3Vrcp/Galon-shampoo-para-carros.jpg",
    type: "liquido",
    detail: "Hecho 100% en Colombia. Shampoopara autos que brilla, protege y desengrasa sin manchar con aroma a chicle y espuma abundante. 😊"
});

productList.push ({
    id: 17, 
    name: "Silicona liquida espesa.",
    quantities: {
        "1/2 litro": 7900,
        "Litro": 14400,
        "Galon": 45000,
    },
    image: "https://i.ibb.co/VqFLB8k/Silicona.jpg",
    imageGalon: "https://i.ibb.co/FgqtyPZ/Galon-silicona.jpg",
    type: "liquido",
    detail: "Hecho en Colombia. La silicona se usa para limpiar y mantener las partes plásticas que se encuentran en el interior del vehículo, para muebles de cuero entre otras cosas. 😊"
});

productList.push ({
    id: 18, 
    name: "Biovarsol.",
    quantities: {
        "1/2 litro": 5000,
        "Litro": 9700,
        "Galon": 33000,
    },
    image: "https://i.ibb.co/XbGg41s/Biovarsol.jpg",
    imageGalon: "https://i.ibb.co/PNT0rV6/Galon-biovarsol.jpg",
    type: "liquido",
    detail: "Hecho en Colombia. Elimina la grasa y manchas difíciles en todo tipo de superficies; textiles plásticos, cerámicas, madera, cuero y metal, dejándolas relucientes, libres de bacterias y malos olores.. 😊"
});

productList.push ({
    id: 19, 
    name: "Removedor de cera o sellador.",
    quantities: {
        "1/2 litro": 4200,
        "Litro": 7000,
        "Galon": 24000,
    },
    image: "https://i.ibb.co/K0w12Mj/removedor-cera.jpg",
    image: "https://i.ibb.co/jv51KGY/Galon-removedor-cera.jpg",
    type: "liquido",
    detail: "Hecho en Colombia. es un producto diseñado para el eliminar los restos de cera o sello acumulados en el piso debido al encerado o sellado frecuente. 😊"
});

productList.push ({
    id: 20, 
    name: "Sellador o mantenedor de piso.",
    quantities: {
        "1/2 litro": 14600,
        "Litro": 27700,
        "Galon": 91000,
    },
    image: "https://i.ibb.co/JmCqqX6/Sellante-para-pisos.jpg",
    imageGalon: "https://i.ibb.co/Tq6TgDQ/Galon-sellante-para-pisos.jpg",
    type: "liquido",
    detail: "Hecho en Colombia. Es un producto diseñado para proteger el piso de rayones creando una pelicula protectora y adicional a eso para mantener tu pro brillante, tener en cuenta que lo que hace el producto es realzar el color del piso, ideal para toda clase de pisos. 😊"
});

productList.push ({
    id: 21, 
    name: "Medio litro cera autobrillante.",
    quantities: {
        "1/2 litro": 8600,
        "Litro": 15900,
        "Galon": 49000,
    },
    image: "https://i.ibb.co/x7SHd0C/cera-autobrillante.jpg",
    imageGalon: "https://i.ibb.co/k57sXGP/Galon-cera-autobrillante.jpg",
    type: "liquido",
    detail: "Hecho en Colombia. Es un producto diseñado para darle brillo a tu piso sin tanto esfuerzo, tener en cuenta que lo que hace el producto es realzar el color del piso, ideal para toda clase de pisos, no agrega color y no tiene olor. 😊"
});

// UTENCILIOS DE ASEO

productList.push ({
    id: 6,
    name: "Trapeador bicolor 900gr",
    price: 8000,
    image: "https://i.linio.com/p/8903fa5c2726a5b073175d3da65ce1aa-product.jpg",
    type: "liquido",
    detail: "Hecho 100% en algodon, lo tenemos disponible en color blanco ó blanco con negro."
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
        const productName = document.createElement("p");
        productName.innerText = product.name;
        productInfoDiv.append(productName);
        
        productInfo.append(productInfoDiv);
        productCard.append(productImg, productInfo);
        cardsContainer.appendChild(productCard);       
    };
}

renderProducts(productList)

function selectPrice(divPrice, product) {
    const quantityText = divPrice.querySelector("p:nth-child(1)").textContent;
    const priceText = divPrice.querySelector("p:nth-child(2)").textContent;
    console.log(quantityText, priceText);
    
    let image = product.image;
    if ( quantityText === "Galon") {
        image = product.imageGalon;
    }
    
    selectedQuantity = quantityText;
    selectedPrices = priceText;
    selectedImage = image; 
}

function renderProductsSelections (product, selectedPrices, selectedImage, selectedQuantity) {

    productsInTheCar.push(product) // esta linea agrega el producto al final de lista del array de productos

    const shoppingCartSelection = document.createElement("div");
    shoppingCartSelection.classList.add("shopping-cart")

    const figureMiniature = document.createElement("figure");

    const imgFigureMiniature = document.createElement("img");
    imgFigureMiniature.setAttribute("src", selectedImage);
    figureMiniature.appendChild(imgFigureMiniature);

    const pProductNameSelection = document.createElement("p");
    pProductNameSelection.innerText = `${selectedQuantity} ${product.name}`;                                                                                                                                                                            ;
    const pProductPriceSelection = document.createElement("p");
    pProductPriceSelection.innerText = selectedPrices;

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
    const pName = document.createElement("p");
    pName.innerText = product.name;
    const pDetail = document.createElement("p");
    pDetail.classList.add("detail");
    pDetail.innerText = product.detail;

    const divContainerQuantities = document.createElement("div");
    divContainerQuantities.classList.add("container-quantities");

    const pPriAndQuant = document.createElement("p");
    pPriAndQuant.innerText = "Precios y cantidades";
    const imgIconflechitaDetail = document.createElement("img");
    imgIconflechitaDetail.setAttribute("src", "./icons/flechita.svg");

    const divContainerPrices = document.createElement("div");
    divContainerPrices.classList.add("container-prices");

    const quantities = product.quantities; 

    for (const quantity in quantities) {
        if (quantities.hasOwnProperty(quantity)){
            const value = quantities[quantity];

            const divPrice = document.createElement("div");
            divPrice.classList.add("prices");
            divPrice.addEventListener("click", () => {
                selectPrice(divPrice, product);
            });
            const pQuantity = document.createElement("p");
            pQuantity.classList.add("p");
            pQuantity.innerText = quantity;
            const pValue = document.createElement("p");
            pValue.textContent = "$" + value.toLocaleString();

            divPrice.append(pQuantity, pValue);

            divContainerPrices.appendChild(divPrice);
        }
    }

    divContainerQuantities.append(pPriAndQuant, imgIconflechitaDetail, divContainerPrices);

    const button = document.createElement("button");
    button.classList.add("primary-button")
    button.addEventListener("click", () => {

        renderProductsSelections(product, selectedPrices, selectedImage, selectedQuantity);
    });
    const imgAddToCard = document.createElement("img");
    imgAddToCard.setAttribute("src", "./icons/bt_add_to_cart.svg");
    button.appendChild(imgAddToCard);

    divDescription.append( pName, pDetail, divContainerQuantities, button);
    aside.append(divImgClose, imgProduct, divDescription);
    contendAside.appendChild(aside);
}