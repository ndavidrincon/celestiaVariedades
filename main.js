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

// PRODUCTOS LIQUIDOS

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
    name: "Galon Detergente floral. 3Lt.",
    price: 25200,
    image: "https://i.ibb.co/tPSvDrs/Galon-detergente-floral.jpg",
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
    name: "Galon Detergente tipo rey. 3Lt.",
    price: 25200,
    image: "https://i.ibb.co/Wcp55J4/Galon-rey-liquido.jpg",
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
    detail: "Hecho 100% en Colombia, Suavizante espeso, aroma perdurable y producto rendidor."
});

productList.push ({
    id: 2,
    name: "Galon suavizante aroma azul profundo. 3Lt.",
    price: 22000,
    image: "https://i.ibb.co/Y76Lxch/Galon-suavizante.jpg",
    type: "liquido",
    detail: "Hecho 100% en Colombia, Suavizante espeso, aroma perdurable y producto rendidor."
});

productList.push ({
    id: 3,
    name: "Medio litro Jabon para manos",
    price: 4300,
    image: "https://i.ibb.co/WyfnNPV/Jabon-de-manos.jpg",
    type: "liquido",
    detail: "Hecho 100% en Colombia, delicado para manos, de momento disponible en frutos rojos y avena. Delicado con tus manos"
});

productList.push ({
    id: 3,
    name: "Litro Jabon para manos",
    price: 6800,
    image: "https://i.ibb.co/WyfnNPV/Jabon-de-manos.jpg",
    type: "liquido",
    detail: "Hecho 100% en Colombia, Jabon para manos, de momento disponible en frutos rojos y avena. Delicado con tus manos."
});

productList.push ({
    id: 3,
    name: "Galon Jabon para manos. 3Lt.",
    price: 21000,
    image: "https://i.ibb.co/DGG7bpy/Galon-jabon-para-manos.jpg",
    type: "liquido",
    detail: "Hecho 100% en Colombia, Jabon para manos, de momento disponible en frutos rojos y avena. Delicado con tus manos."
});

productList.push ({
    id: 4,
    name: "Medio litro vinagre industrial",
    price: 4000,
    image: "https://i.ibb.co/Lg6trd4/Vinagre-industrial.jpg",
    type: "liquido",
    detail: "Hecho 100% en Colombia, Al 15% de consentración. Un producto ideal para las personas que no pueden asear con cloro. Limpia y desinfecta."
});

productList.push ({
    id: 4,
    name: "Litro vinagre industrial",
    price: 6500,
    image: "https://i.ibb.co/Lg6trd4/Vinagre-industrial.jpg",
    type: "liquido",
    detail: "Hecho 100% en Colombia, Al 15% de consentración. Un producto ideal para las personas que no pueden asear con cloro. Limpia y desinfecta."
});

productList.push ({
    id: 4,
    name: "Galon vinagre industrial. 3Lt.",
    price: 21000,
    image: "https://i.ibb.co/8KzpZh0/Galon-vinagre-industrial.jpg",
    type: "liquido",
    detail: "Hecho 100% en Colombia, Al 15% de consentración. Un producto ideal para las personas que no pueden asear con cloro. Limpia y desinfecta."
});

productList.push ({
    id: 5,
    name: "Medio litro limpia pisos espeso",
    price: 4300,
    image: "https://i.ibb.co/djn7mkK/Limpia-pisos.jpg",
    type: "liquido",
    detail: "Hecho 100% en Colombia, limpiador desinfectante para pisos espeso, tiene un aroma tan rico que te va a provocar comertelo (No se come). Disponible en aroma maracuya y lima limon"
});

productList.push ({
    id: 5,
    name: "Litro limpia pisos espeso",
    price: 7500,
    image: "https://i.ibb.co/TkJFyCf/fabuloso-maracuya.jpg",
    type: "liquido",
    detail: "Hecho 100% en Colombia, limpiador desinfectante para pisos espeso, tiene un aroma tan rico que te va a provocar comertelo (No se come). Disponible en aroma maracuya y lima limon"
});

productList.push ({
    id: 5,
    name: "Galon limpia pisos espeso. 3Lt.",
    price: 22000,
    image: "https://i.ibb.co/CMvLFtM/Galon-limpia-pisos.jpg",
    type: "liquido",
    detail: "Hecho 100% en Colombia, limpiador desinfectante para pisos espeso, tiene un aroma tan rico que te va a provocar comertelo (No se come). Disponible en aroma maracuya y lima limon"
});

productList.push ({
    id: 5,
    name: "Medio litro limpia pisos liquido",
    price: 4300,
    image: "https://i.ibb.co/zhWwh2n/Limpia-pisos-lavanda.jpg",
    type: "liquido",
    detail: "Hecho 100% en Colombia, limpiador desinfectante para pisos liquido, Disponible en aroma lavanda"
});

productList.push ({
    id: 5,
    name: "Litro limpia pisos liquido",
    price: 6800,
    image: "https://i.ibb.co/zhWwh2n/Limpia-pisos-lavanda.jpg",
    type: "liquido",
    detail: "Hecho 100% en Colombia, limpiador desinfectante para pisos liquido, Disponible en aroma lavanda"
});

productList.push ({
    id: 5,
    name: "Galon limpia pisos liquido. 3Lt.",
    price: 22000,
    image: "https://i.ibb.co/CMvLFtM/Galon-limpia-pisos.jpg",
    type: "liquido",
    detail: "Hecho 100% en Colombia, limpiador desinfectante para pisos liquido, Disponible en aroma lavanda"
});

productList.push ({
    id: 5, 
    name: "Medio litro Hipoclorito al 0.8%",
    price: 2700,
    image: "https://i.ibb.co/LvXrtLF/blanqueador.jpg",
    type: "liquido",
    detail: "Hecho 100% en Colombia."
});

productList.push ({
    id: 5,
    name: "Litro Hipoclorito al 0.8%",
    price: 4000,
    image: "https://i.ibb.co/LvXrtLF/blanqueador.jpg",
    type: "liquido",
    detail: "Hecho 100% en Colombia."
});

productList.push ({
    id: 5,
    name: "Galon Hipoclorito al 0.8%. 3.8 Lt.",
    price: 12000,
    image: "https://i.ibb.co/wcpVhnh/Galon-blanqueador.jpg",
    type: "liquido",
    detail: "Hecho 100% en Colombia. "
});

productList.push ({
    id: 5, 
    name: "Medio litro Desmanchador ropa color",
    price: 4000,
    image: "https://i.ibb.co/pyYv4xh/cloro-para-ropa-color.jpg",
    type: "liquido",
    detail: "Hecho 100% en Colombia. Este producto es un potencializador de lavado, no remplaza el detergente fue creado para mejorar el resultado de cada lavada 😊"
});

productList.push ({
    id: 5, 
    name: "Litro Desmanchador ropa color",
    price: 6500,
    image: "https://i.ibb.co/pyYv4xh/cloro-para-ropa-color.jpg",
    type: "liquido",
    detail: "Hecho 100% en Colombia. Este producto es un potencializador de lavado, no remplaza el detergente fue creado para mejorar el resultado de cada lavada 😊"
});

productList.push ({
    id: 5, 
    name: "Galon Desmanchador ropa color. 3.8 Lt",
    price: 21000,
    image: "https://i.ibb.co/0mghym6/Galon-clorox-ropa-color.jpg",
    type: "liquido",
    detail: "Hecho 100% en Colombia. Este producto es un potencializador de lavado, no remplaza el detergente fue creado para mejorar el resultado de cada lavada 😊"
});

productList.push ({
    id: 5, 
    name: "Medio litro Desengrasante industrial.",
    price: 4200,
    image: "https://i.ibb.co/72Dh68n/Desengrasante-industrial.jpg",
    type: "liquido",
    detail: "Hecho 100% en Colombia. Este producto es un desengrasante fuerte para uso industrial y grasa profunda, en su aplicasión se recomienda el uso de tapabocas y guantes, tener cuidado con salpicaciones en cualquier parte del cuerpo, en ese caso lavar con abundante agua. 😊"
});

productList.push ({
    id: 5, 
    name: "Litro Desengrasante industrial.",
    price: 7200,
    image: "https://i.ibb.co/72Dh68n/Desengrasante-industrial.jpg",
    type: "liquido",
    detail: "Hecho 100% en Colombia. Este producto es un desengrasante fuerte para uso industrial y grasa profunda, en su aplicasión se recomienda el uso de tapabocas y guantes, tener cuidado con salpicaciones en cualquier parte del cuerpo, en ese caso lavar con abundante agua. 😊"
});

productList.push ({
    id: 5, 
    name: "Galon Desengrasante industrial. 3.8 Lt",
    price: 25000,
    image: "https://i.ibb.co/5Mn7m83/Galon-desengrasante-industrial.jpg",
    type: "liquido",
    detail: "Hecho 100% en Colombia. Este producto es un desengrasante fuerte para uso industrial y grasa profunda, en su aplicasión se recomienda el uso de tapabocas y guantes, tener cuidado con salpicaciones en cualquier parte del cuerpo, en ese caso lavar con abundante agua. 😊"
});

productList.push ({
    id: 5, 
    name: "Medio litro Desengrasante espeso.",
    price: 4800,
    image: "https://i.ibb.co/fY105t1/Desengrasante-espeso-1.jpg",
    type: "liquido",
    detail: "Hecho 100% en Colombia. Este producto es un desengrasante Multiusos para uso domestico, cocina, baños, ropa, etc, en su aplicasión tener cuidado con salpicaciones en cualquier parte del rostro, en ese caso lavar con abundante agua. 😊"
});

productList.push ({
    id: 5, 
    name: "Litro Desengrasante espeso.",
    price: 7800,
    image: "https://i.ibb.co/fY105t1/Desengrasante-espeso-1.jpg",
    type: "liquido",
    detail: "Hecho 100% en Colombia. Este producto es un desengrasante Multiusos para uso domestico, cocina, baños, ropa, etc, en su aplicasión tener cuidado con salpicaciones en cualquier parte del rostro, en ese caso lavar con abundante agua. 😊"
});

productList.push ({
    id: 5, 
    name: "Galon Desengrasante espeso. 3.8 Lt",
    price: 26000,
    image: "https://i.ibb.co/sjZ5Ffd/Galon-desengrasante-multiusos.jpg",
    type: "liquido",
    detail: "Hecho 100% en Colombia. Este producto es un desengrasante Multiusos para uso domestico, cocina, baños, ropa, etc, en su aplicasión tener cuidado con salpicaciones en cualquier parte del rostro, en ese caso lavar con abundante agua. 😊"
});

productList.push ({
    id: 5, 
    name: "Medio litro Gel antibacterial.",
    price: 5200,
    image: "https://i.ibb.co/3W35Kh0/Gel-antibacterial.jpg",
    type: "liquido",
    detail: "Hecho 100% en Colombia. Sustancia que destruye las bacterias o les impide que crezcan y causen enfermedad, se emplea como complemento del agua y el jabón para lavarse las manos.  😊"
});

productList.push ({
    id: 5, 
    name: "Litro Gel antibacterial.",
    price: 9900,
    image: "https://i.ibb.co/3W35Kh0/Gel-antibacterial.jpg",
    type: "liquido",
    detail: "Hecho 100% en Colombia. Sustancia que destruye las bacterias o les impide que crezcan y causen enfermedad, se emplea como complemento del agua y el jabón para lavarse las manos.  😊"
});

productList.push ({
    id: 5, 
    name: "Galon Gel antibacterial. 3.8 Lt",
    price: 31000,
    image: "https://i.ibb.co/23GHvSK/Galon-gel-antibacterial.jpg",
    type: "liquido",
    detail: "Hecho 100% en Colombia. Sustancia que destruye las bacterias o les impide que crezcan y causen enfermedad, se emplea como complemento del agua y el jabón para lavarse las manos.  😊"
});

productList.push ({
    id: 5, 
    name: "Medio litro jabon liquido loza espeso.",
    price: 4200,
    image: "https://i.ibb.co/7JVxp9B/jabon-liquido-loza.jpg",
    type: "liquido",
    detail: "Hecho 100% en Colombia. Detergente multipropósito, que además puedes usar para limpiar tu cocina y grifería o quitar manchas de la ropa. Amigable con la delicada piel de tus manos.  😊"
});

productList.push ({
    id: 5, 
    name: "Litro jabon liquido loza espeso.",
    price: 7800,
    image: "https://i.ibb.co/7JVxp9B/jabon-liquido-loza.jpg",
    type: "liquido",
    detail: "Hecho 100% en Colombia. Detergente multipropósito, que además puedes usar para limpiar tu cocina y grifería o quitar manchas de la ropa. Amigable con la delicada piel de tus manos.  😊"
});

productList.push ({
    id: 5, 
    name: "Galon jabon liquido loza espeso. 3.8 Lt",
    price: 26000,
    image: "https://i.ibb.co/PmdZdpb/Galon-lava-loza.jpg",
    type: "liquido",
    detail: "Hecho 100% en Colombia. Detergente multipropósito, que además puedes usar para limpiar tu cocina y grifería o quitar manchas de la ropa. Amigable con la delicada piel de tus manos.  😊"
});

productList.push ({
    id: 5, 
    name: "Medio litro Limpia vidrios.",
    price: 4200,
    image: "https://i.ibb.co/zhf74qZ/Limpia-vidrios.jpg",
    type: "liquido",
    detail: "Hecho 100% en Colombia. Un limpiavidrios es un producto creado cuyos ingredientes facilitan la limpieza y mantenimiento de vidrios, cristales y espejos ya que remueven la suciedad, grasas e imperfecciones, también prometen un secado rápido con el plus de un agradable aroma. 😊"
});

productList.push ({
    id: 5, 
    name: "Litro Limpia vidrios.",
    price: 6300,
    image: "https://i.ibb.co/zhf74qZ/Limpia-vidrios.jpg",
    type: "liquido",
    detail: "Hecho 100% en Colombia. Un limpiavidrios es un producto creado cuyos ingredientes facilitan la limpieza y mantenimiento de vidrios, cristales y espejos ya que remueven la suciedad, grasas e imperfecciones, también prometen un secado rápido con el plus de un agradable aroma. 😊"
});

productList.push ({
    id: 5, 
    name: "Galon Limpia vidrios. 3.8 Lt.",
    price: 20500,
    image: "https://i.ibb.co/s9BXkbp/Galon-de-limpia-vidrios.jpg",
    type: "liquido",
    detail: "Hecho 100% en Colombia. Un limpiavidrios es un producto creado cuyos ingredientes facilitan la limpieza y mantenimiento de vidrios, cristales y espejos ya que remueven la suciedad, grasas e imperfecciones, también prometen un secado rápido con el plus de un agradable aroma. 😊"
});

productList.push ({
    id: 5, 
    name: "Medio litro Citronela con bicarbonato.",
    price: 4200,
    image: "https://i.ibb.co/y44MK7f/Limpiaador-multiusos.jpg",
    type: "liquido",
    detail: "Hecho 100% en Colombia. Limpiador liquido multiusos, ayuda a desinfectar y despercudir superficies con aroma delicioso y perdurable. 😊"
});

productList.push ({
    id: 5, 
    name: "Litro Citronela con bicarbonato.",
    price: 7000,
    image: "https://i.ibb.co/y44MK7f/Limpiaador-multiusos.jpg",
    type: "liquido",
    detail: "Hecho 100% en Colombia. Limpiador liquido multiusos, ayuda a desinfectar y despercudir superficies con aroma delicioso y perdurable. 😊"
});

productList.push ({
    id: 5, 
    name: "Galon Citronela con bicarbonato. 3.8 Lt.",
    price: 23000,
    image: "https://i.ibb.co/9qLjLKQ/Galon-limpiador-multiusos.jpg",
    type: "liquido",
    detail: "Hecho 100% en Colombia. Limpiador liquido multiusos, ayuda a desinfectar y despercudir superficies con aroma delicioso y perdurable. 😊"
});

productList.push ({
    id: 5, 
    name: "Medio litro Alcohol industrial 96%.",
    price: 6700,
    image: "https://i.ibb.co/swbXS0F/Alchohol-industrial.jpg",
    type: "liquido",
    detail: "Hecho 100% en Colombia. 😊"
});

productList.push ({
    id: 5, 
    name: "Litro Alcohol industrial 96%.",
    price: 12500,
    image: "https://i.ibb.co/swbXS0F/Alchohol-industrial.jpg",
    type: "liquido",
    detail: "Hecho 100% en Colombia. 😊"
});

productList.push ({
    id: 5, 
    name: "Galon Alcohol industrial 96%.",
    price: 39000,
    image: "https://i.ibb.co/qk53Rwq/Galon-alcohol-industrial.jpg",
    type: "liquido",
    detail: "Hecho 100% en Colombia. 😊"
});

productList.push ({
    id: 5, 
    name: "Medio litro Shampoo para carros.",
    price: 4300,
    image: "https://i.ibb.co/JC95fcd/Shampoo-para-carros.jpg",
    type: "liquido",
    detail: "Hecho 100% en Colombia. Shampoopara autos que brilla, protege y desengrasa sin manchar con aroma a chicle y espuma abundante. 😊"
});

productList.push ({
    id: 5, 
    name: "Litro Shampoo para carros.",
    price: 7200,
    image: "https://i.ibb.co/JC95fcd/Shampoo-para-carros.jpg",
    type: "liquido",
    detail: "Hecho 100% en Colombia. Shampoopara autos que brilla, protege y desengrasa sin manchar con aroma a chicle y espuma abundante. 😊"
});

productList.push ({
    id: 5, 
    name: "Galon Shampoo para carros.",
    price: 25000,
    image: "https://i.ibb.co/Cb3Vrcp/Galon-shampoo-para-carros.jpg",
    type: "liquido",
    detail: "Hecho 100% en Colombia. Shampoopara autos que brilla, protege y desengrasa sin manchar con aroma a chicle y espuma abundante. 😊"
});

productList.push ({
    id: 5, 
    name: "Medio litro Silicona liquida espesa.",
    price: 7900,
    image: "https://i.ibb.co/VqFLB8k/Silicona.jpg",
    type: "liquido",
    detail: "Hecho en Colombia. La silicona se usa para limpiar y mantener las partes plásticas que se encuentran en el interior del vehículo, para muebles de cuero entre otras cosas. 😊"
});

productList.push ({
    id: 5, 
    name: "Litro Silicona liquida espesa.",
    price: 14400,
    image: "https://i.ibb.co/VqFLB8k/Silicona.jpg",
    type: "liquido",
    detail: "Hecho en Colombia. La silicona se usa para limpiar y mantener las partes plásticas que se encuentran en el interior del vehículo, para muebles de cuero entre otras cosas. 😊"
});

productList.push ({
    id: 5, 
    name: "Galon silicona liquida espesa.",
    price: 45000,
    image: "https://i.ibb.co/FgqtyPZ/Galon-silicona.jpg",
    type: "liquido",
    detail: "Hecho en Colombia. La silicona se usa para limpiar y mantener las partes plásticas que se encuentran en el interior del vehículo, para muebles de cuero entre otras cosas. 😊"
});

productList.push ({
    id: 5, 
    name: "Medio litro Biovarsol.",
    price: 5000,
    image: "https://i.ibb.co/XbGg41s/Biovarsol.jpg",
    type: "liquido",
    detail: "Hecho en Colombia. Elimina la grasa y manchas difíciles en todo tipo de superficies; textiles plásticos, cerámicas, madera, cuero y metal, dejándolas relucientes, libres de bacterias y malos olores.. 😊"
});

productList.push ({
    id: 5, 
    name: "Litro Biovarsol.",
    price: 9700,
    image: "https://i.ibb.co/XbGg41s/Biovarsol.jpg",
    type: "liquido",
    detail: "Hecho en Colombia. Elimina la grasa y manchas difíciles en todo tipo de superficies; textiles plásticos, cerámicas, madera, cuero y metal, dejándolas relucientes, libres de bacterias y malos olores.. 😊"
});

productList.push ({
    id: 5, 
    name: "Galon Biovarsol. 3.8 Lt.",
    price: 33000,
    image: "https://i.ibb.co/PNT0rV6/Galon-biovarsol.jpg",
    type: "liquido",
    detail: "Hecho en Colombia. Elimina la grasa y manchas difíciles en todo tipo de superficies; textiles plásticos, cerámicas, madera, cuero y metal, dejándolas relucientes, libres de bacterias y malos olores.. 😊"
});

productList.push ({
    id: 5, 
    name: "Medio litro Removedor de cera o sellador.",
    price: 4200,
    image: "https://i.ibb.co/K0w12Mj/removedor-cera.jpg",
    type: "liquido",
    detail: "Hecho en Colombia. es un producto diseñado para el eliminar los restos de cera o sello acumulados en el piso debido al encerado o sellado frecuente. 😊"
});

productList.push ({
    id: 5, 
    name: "Litro Removedor de cera o sellador.",
    price: 7000,
    image: "https://i.ibb.co/K0w12Mj/removedor-cera.jpg",
    type: "liquido",
    detail: "Hecho en Colombia. es un producto diseñado para el eliminar los restos de cera o sello acumulados en el piso debido al encerado o sellado frecuente. 😊"
});

productList.push ({
    id: 5, 
    name: "Galon Removedor de cera o sellador.",
    price: 24000,
    image: "https://i.ibb.co/jv51KGY/Galon-removedor-cera.jpg",
    type: "liquido",
    detail: "Hecho en Colombia. es un producto diseñado para el eliminar los restos de cera o sello acumulados en el piso debido al encerado o sellado frecuente. 😊"
});

productList.push ({
    id: 5, 
    name: "Medio litro sellador o mantenedor de piso.",
    price: 14600,
    image: "https://i.ibb.co/JmCqqX6/Sellante-para-pisos.jpg",
    type: "liquido",
    detail: "Hecho en Colombia. Es un producto diseñado para proteger el piso de rayones creando una pelicula protectora y adicional a eso para mantener tu pro brillante, tener en cuenta que lo que hace el producto es realzar el color del piso, ideal para toda clase de pisos. 😊"
});

productList.push ({
    id: 5, 
    name: "Litro sellador o mantenedor de piso.",
    price: 27700,
    image: "https://i.ibb.co/JmCqqX6/Sellante-para-pisos.jpg",
    type: "liquido",
    detail: "Hecho en Colombia. Es un producto diseñado para proteger el piso de rayones creando una pelicula protectora y adicional a eso para mantener tu pro brillante, tener en cuenta que lo que hace el producto es realzar el color del piso, ideal para toda clase de pisos. 😊"
});

productList.push ({
    id: 5, 
    name: "Galon sellador o mantenedor de piso.",
    price: 91000,
    image: "https://i.ibb.co/Tq6TgDQ/Galon-sellante-para-pisos.jpg",
    type: "liquido",
    detail: "Hecho en Colombia. Es un producto diseñado para proteger el piso de rayones creando una pelicula protectora y adicional a eso para mantener tu pro brillante, tener en cuenta que lo que hace el producto es realzar el color del piso, ideal para toda clase de pisos. 😊"
});

productList.push ({
    id: 5, 
    name: "Medio litro cera autobrillante.",
    price: 8600,
    image: "https://i.ibb.co/x7SHd0C/cera-autobrillante.jpg",
    type: "liquido",
    detail: "Hecho en Colombia. Es un producto diseñado para darle brillo a tu piso sin tanto esfuerzo, tener en cuenta que lo que hace el producto es realzar el color del piso, ideal para toda clase de pisos, no agrega color y no tiene olor. 😊"
});

productList.push ({
    id: 5, 
    name: "Litro cera autobrillante.",
    price: 15900,
    image: "https://i.ibb.co/x7SHd0C/cera-autobrillante.jpg",
    type: "liquido",
    detail: "Hecho en Colombia. Es un producto diseñado para darle brillo a tu piso sin tanto esfuerzo, tener en cuenta que lo que hace el producto es realzar el color del piso, ideal para toda clase de pisos, no agrega color y no tiene olor. 😊"
});

productList.push ({
    id: 5, 
    name: "Galon cera autobrillante.",
    price: 49000,
    image: "https://i.ibb.co/k57sXGP/Galon-cera-autobrillante.jpg",
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