const inputs =
document.querySelectorAll(".pin-box");

const showBtn =
document.getElementById("showBtn");

const loadingBox =
document.getElementById("loadingBox");

let isShow = false;

/* ========================= */
/* RESET LOADING SAAT BACK */
/* ========================= */

window.addEventListener("pageshow", () => {

    loadingBox.style.display = "none";

});

/* ========================= */
/* FOKUS KE BOX KOSONG */
/* ========================= */

inputs.forEach((input,index) => {

    input.addEventListener("click", () => {

        for(let i = 0; i < inputs.length; i++){

            if(inputs[i].value === ""){

                inputs[i].focus();

                break;

            }

        }

    });

});

/* ========================= */
/* AUTO PIN */
/* ========================= */

inputs.forEach((input,index) => {

    input.addEventListener("input", () => {

        input.value =
        input.value.replace(/[^0-9]/g,'');

        if(input.value.length === 1){

            if(index < inputs.length - 1){

                inputs[index + 1]
                .focus();

            }

        }

        checkPin();

    });

    input.addEventListener("keydown", (e) => {

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
/* SHOW PIN */
/* ========================= */

showBtn.addEventListener("click", () => {

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
/* CHECK PIN */
/* ========================= */

function checkPin(){

    let full = true;

    inputs.forEach(input => {

        if(input.value === ""){

            full = false;

        }

    });

    if(full){

        /* TAMPILKAN LOADING */
        loadingBox.style.display =
        "flex";

        /* DELAY */
        setTimeout(() => {

            window.location.href =
            "success.html";

        },2000);

    }

}
