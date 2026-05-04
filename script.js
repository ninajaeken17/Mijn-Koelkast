const fridge = document.getElementById("fridge");
const shelves = document.getElementById("shelves");

let isOpen = false;

if (fridge && shelves) {
    fridge.addEventListener("click", function () {
    if (isOpen === false) {
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
            const percentage = slider.value / 100;
            video.currentTime = percentage * video.duration * 0.25;
        }
    });
}
