const fridge = document.getElementById("fridge");
const shelves = document.getElementById("shelves");

let isOpen = false;

if (fridge && shelves) {
    fridge.addEventListener("click", function () {
        isOpen = !isOpen;

        fridge.src = isOpen ? "koelkast_open.jpg" : "koelkast_gesloten.png";
        shelves.style.display = isOpen ? "block" : "none";
    });
}

function openProduct(product) {
    window.location.href = "product_" + product + ".html";
}

const video = document.getElementById("timelapseVideo");
const slider = document.getElementById("timeSlider");

if (video && slider) {
    video.controls = false;
    video.pause();

    video.addEventListener("loadedmetadata", function () {
        slider.min = 0;
        slider.max = 100;
        slider.value = 0;
    });

    slider.addEventListener("input", function () {
    if (video.duration) {
        const quarter = video.duration * 0.25;   // eerste 25%
        const percentage = slider.value / 100;

        video.currentTime = percentage * quarter;
    }
    });
