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
const video = document.getElementById("timelapseVideo");
const slider = document.getElementById("timeSlider");

if (video && slider) {
    video.pause();
    video.controls = false;

    // Wacht tot metadata geladen is (BELANGRIJK)
    video.addEventListener("loadedmetadata", () => {
        slider.addEventListener("input", () => {
            const percentage = slider.value / 100;
            video.currentTime = percentage * video.duration;
        }
    });

    // optioneel: kleur dynamisch aanpassen
    slider.addEventListener("input", () => {
        const t = slider.value;
    const q = quality(t);

    // kleur bepalen
    let color;
    if (q > 0.6) color = "#22c55e";
    else if (q > 0.3) color = "#eab308";
    else color = "#ef4444";

    slider.style.background = `linear-gradient(to right, ${color}, #ef4444)`;
    });
}
function openProduct(product) {
    window.location.href = `product_${product}.html`;
}
