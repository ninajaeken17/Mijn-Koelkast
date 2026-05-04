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
    video.pause();
    video.controls = false;

    slider.addEventListener("input", function () {
        if (video.duration) {
            video.currentTime = (slider.value / 100) * video.duration;
        }
    });
}
