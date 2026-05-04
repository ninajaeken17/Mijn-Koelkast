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
        slider.max = video.duration;
        slider.value = 0;
    });

    slider.addEventListener("input", function () {
        video.currentTime = slider.value;
    });
}
