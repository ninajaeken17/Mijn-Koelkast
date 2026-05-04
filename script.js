// Koelkast openen/sluiten
const fridge = document.getElementById("fridge");
const shelves = document.getElementById("shelves");

if (fridge && shelves) {
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
}

// Product openen
function openProduct(product) {
    window.location.href = `product_${product}.html`;
}

// Video-slider op productpagina
const video = document.getElementById("timelapseVideo");
const slider = document.getElementById("timeSlider");

if (video && slider) {
    video.pause();
    video.controls = false;

    slider.addEventListener("input", () => {
        if (video.duration) {
            video.currentTime = (slider.value / 100) * video.duration;
        }
    });
}
