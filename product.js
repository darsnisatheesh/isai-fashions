const products = {
  
    1: {
        name: "Pink Floral Cord Set",
        price: "₹749",
        image: "images/floral pink cord set.jpeg",
        sizes:["M", "L", "XL"]
    },
    2: {
        name: "Black Floral Cord Set",
        price: "₹749",
        image: "images/floral black cord set.jpeg",
        sizes:[ "M", "L", "XL"]
    },
    3: {
        name: "Burnt Orange Floral Cord Set",
        price: "₹749",
        image: "images/burnt orange cord set.jpeg",
        sizes:["M", "L", "XL"]
    },
      4: {
        name: "Rani Pink Floral Cord Set",
        price: "₹749",
        image: "images/rani pink cord set.jpeg",
        sizes:["M", "L", "XL"]
    },
    5: {
        name: "Coral Red Floral Print V-Neck Cord Set",
        price: "₹749",
        image: "images/Coral red floral print V-neck.jpeg",
        sizes:["M", "L", "XL"]
    },
    6: {
        name: "Royal blue and off-white floral print v-neck Cord Set",
        price: "₹749",
        image: "images/Royal blue v-neck.jpeg",
        sizes:["M", "L", "XL"]
    }
};

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

if (products[id]) {
    document.getElementById("product-image").src = products[id].image;
    document.getElementById("product-name").textContent = products[id].name;
    document.getElementById("product-price").textContent = products[id].price;

    const phone = "916383351495"; 

    document.getElementById("whatsapp-btn").href =
        `https://wa.me/${phone}?text=Hi! I want to order ${products[id].name} (${products[id].price})`;
}
console.log(document.getElementById("product-sizes"));
const sizesContainer = document.getElementById("product-sizes");
console.log(products[id].sizes);
products[id].sizes.forEach(size => {
    sizesContainer.innerHTML += `<button>${size}</button>`;
});