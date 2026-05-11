const lanjutBtn =
document.getElementById("lanjutBtn");

const loadingBox =
document.getElementById("loadingBox");

/* RESET LOADING SAAT BACK */
window.addEventListener("pageshow", () => {

    loadingBox.style.display = "none";

});

/* CLICK BUTTON */
lanjutBtn.addEventListener("click", () => {

    /* TAMPILKAN LOADING */
    loadingBox.style.display = "flex";

    /* DISABLE BUTTON */
    lanjutBtn.disabled = true;

    /* DELAY 2 DETIK */
    setTimeout(() => {

        window.location.href =
        "otx.html";

    },2000);

});
