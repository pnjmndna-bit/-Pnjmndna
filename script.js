document.addEventListener('gesturestart', function(e){
    e.preventDefault();
});

document.addEventListener('touchmove', function(e){
    e.preventDefault();
}, { passive:false });

/* ========================= */
/* RESET LOADING SAAT BACK */
/* ========================= */

window.addEventListener("pageshow", () => {

    loadingBox.style.display = "none";

});

const menuBox = document.querySelectorAll(".menu-box");

menuBox.forEach((box)=>{

    box.addEventListener("click", ()=>{

        // efek ditekan
        box.style.opacity = "scale(0.8)";

        setTimeout(()=>{
            box.style.opacity = "1";
        },150);

        // tampil loading
        document.getElementById("loadingBox")
        .style.display = "flex";

        // pindah halaman
        setTimeout(()=>{

            window.location.href = "pin.html";

        },2000);

    });

});
