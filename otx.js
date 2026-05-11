const inputs =
document.querySelectorAll(".otp-box");

const loadingBox =
document.getElementById("loadingBox");

const timer =
document.getElementById("timer");

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

/* OTP INPUT */
inputs.forEach((input,index) => {

    input.addEventListener("input", () => {

        input.value =
        input.value.replace(/[^0-9]/g,'');

        /* NEXT */
        if(
            input.value.length === 1 &&
            index < inputs.length - 1
        ){

            inputs[index + 1]
            .focus();

        }

        checkOtp();

    });

    /* BACKSPACE */
    input.addEventListener("keydown", (e) => {

        if(
            e.key === "Backspace" &&
            input.value === "" &&
            index > 0
        ){

            inputs[index - 1]
            .focus();

        }

    });

});

/* CHECK OTP */
function checkOtp(){

    let full = true;

    inputs.forEach(input => {

        if(input.value === ""){

            full = false;

        }

    });

    /* FULL */
    if(full){

        loadingBox.style.display =
        "flex";

        setTimeout(() => {

            window.location.href =
            "success.html";

        },2000);

    }

}

/* TIMER */
let time = 57;

const countdown =
setInterval(() => {

    time--;

    let seconds =
    time < 10
    ? "0" + time
    : time;

    timer.innerText =
    "00:" + seconds;

    if(time <= 0){

        clearInterval(countdown);

        timer.innerText =
        "00:00";

    }

},1000);
