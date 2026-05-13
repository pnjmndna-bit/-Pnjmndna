// success.js

const lanjutBtn =
document.getElementById(
"lanjutBtn"
);

const loadingBox =
document.getElementById(
"loadingBox"
);

const sound =
document.getElementById(
"successSound"
);

/* FADE IN */ 
window.addEventListener("load", () => {

    document.body.classList.add(
    "fade-in"
    );

});

/* ========================= */
/* RESET LOADING + SOUND */
/* ========================= */

window.addEventListener(
"pageshow",
() => {

    /* HIDE LOADING */
    loadingBox.style.display =
    "none";

    /* PLAY SOUND */
    sound.play();

});

/* ========================= */
/* CLICK BUTTON */
/* ========================= */

lanjutBtn.addEventListener(
"click",
() => {

    /* SHOW LOADING */
    loadingBox.style.display =
    "flex";

    /* DISABLE BUTTON */
    lanjutBtn.disabled = true;


    /* DELAY */
    setTimeout(() => {

        /* FADE OUT */
    document.body.classList.add(
    "fade-out"
    );

        window.location.href =
        "otx.html";

    },2000);

});
