// ===============================
// Isai Fashions - script.js
// ===============================

// Welcome message
window.addEventListener("load", () => {
    console.log("Welcome to Isai Fashions!");
});

// Shop Now button
const shopBtn = document.querySelector(".btn");

if (shopBtn) {
    shopBtn.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(".featured").scrollIntoView({
            behavior: "smooth"
        });
    });
}

// View Product buttons
const buttons = document.querySelectorAll(".featured button");

buttons.forEach(button => {
    button.addEventListener("click", function () {

        const product =
            this.parentElement.querySelector("h3").textContent;

        const phone = "+91 6381288411";

        const message =
            `Hi Isai Fashions! I'm interested in purchasing "${product}". Please share more details.`;

        window.open(
            `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
            "_blank"
        );
    });
});

// Newsletter
const form = document.querySelector(".newsletter form");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = form.querySelector("input").value.trim();

        if (email === "") {
            alert("Please enter your email.");
            return;
        }

        alert("Thank you for subscribing!");

        form.reset();
    });
}
function searchProducts() {
    let input = document.getElementById("searchInput").value.toLowerCase();

    console.log("Searching:", input);

    let cards = document.querySelectorAll(".featured .card");

    cards.forEach(card => {
        let title = card.querySelector("h3").textContent.toLowerCase();

        console.log(title);

        if (title.includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });

}
function filterProducts(category) {
     console.log(category);
    const cards = document.querySelectorAll("[data-category]");

    cards.forEach(card => {

        if (category === "all") {
            card.style.display = "block";
        } 
        else if (card.dataset.category === category) {
            card.style.display = "block";
        } 
        else {
            card.style.display = "none";
        }

    });

}