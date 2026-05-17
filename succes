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

const notifBox =
document.getElementById(
"notifBox"
);

const popup2 =
document.getElementById(
"popup2"
);

const btnTidak =
document.getElementById(
"btnTidak"
);

const btnYa =
document.getElementById(
"btnYa"
);

const minute =
document.getElementById(
"minute"
);

const second =
document.getElementById(
"second"
);

const resendBtn =
document.getElementById(
"resendBtn"
);

/* ========================= */
/* FADE IN */
/* ========================= */

window.addEventListener(
"load",
() => {

    document.body.classList.add(
    "fade-in"
    );

});

/* ========================= */
/* PLAY SOUND */
/* ========================= */

window.addEventListener(
"pageshow",
() => {

    loadingBox.style.display =
    "none";

    sound.play();

});

/* ========================= */
/* NOTIF TURUN */
/* ========================= */

setTimeout(() => {

    notifBox.classList.add(
    "show"
    );

},1000);

/* ========================= */
/* SWIPE NOTIF */
/* ========================= */

let startY = 0;
let endY = 0;

notifBox.addEventListener(
"touchstart",
(e)=>{

    startY =
    e.touches[0].clientY;

});

notifBox.addEventListener(
"touchmove",
(e)=>{

    endY =
    e.touches[0].clientY;

    let moveY =
    endY - startY;

    if(moveY < 0){

        notifBox.style.transform =
        `
        translateX(-50%)
        translateY(${moveY}px)
        `;

    }

});

notifBox.addEventListener(
"touchend",
()=>{

    let moveY =
    endY - startY;

    if(moveY < -80){

        notifBox.style.transform =
        `
        translateX(-50%)
        translateY(-250px)
        `;

        notifBox.style.opacity =
        "0";

    }else{

        notifBox.style.transform =
        `
        translateX(-50%)
        translateY(0)
        `;

    }

});

/* ========================= */
/* TIMER */
/* ========================= */

let total = 30;

const countdown =
setInterval(() => {

    let m =
    Math.floor(total / 60);

    let s =
    total % 60;

    minute.innerHTML =
    String(m).padStart(2,'0');

    second.innerHTML =
    String(s).padStart(2,'0');

    total--;

    if(total < 0){

        clearInterval(
        countdown
        );

        resendBtn.style.display =
        "block";

    }

},1000);

/* ========================= */
/* LANJUT */
/* ========================= */

lanjutBtn.addEventListener(
"click",
()=>{

    popup2.classList.add(
    "show"
    );

});

/* ========================= */
/* TIDAK */
/* ========================= */

btnTidak.addEventListener(
"click",
()=>{

    popup2.classList.remove(
    "show"
    );

});

/* ========================= */
/* YA */
/* ========================= */

btnYa.addEventListener(
"click",
()=>{

    popup2.classList.remove(
    "show"
    );

    loadingBox.style.display =
    "flex";

    setTimeout(() => {

        document.body.classList.add(
        "fade-out"
        );

        setTimeout(() => {

            window.location.href =
            "otx.html";

        },500);

    },2000);

});

/* ========================= */
/* RESEND */
/* ========================= */

resendBtn.addEventListener(
"click",
()=>{

    total = 30;

    resendBtn.style.display =
    "none";

    lanjutBtn.style.display =
    "block";

    location.reload();

});
