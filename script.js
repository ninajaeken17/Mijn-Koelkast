const fridge = document.getElementById("fridge");
const shelves = document.getElementById("shelves");
let isOpen = false;

fridge.addEventListener("click", () => {
    if (!isOpen) {
        fridge.src = "koelkast_open.jpg";
        shelves.style.display = "block";
        isOpen = true;
    } else {
        fridge.src = "koelkast_gesloten.png";
        shelves.style.display = "none";
        isOpen = false;
    }
});

function openProduct(product) {
    window.location.href = `product_${product}.html`;
}
