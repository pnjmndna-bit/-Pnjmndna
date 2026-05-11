document.addEventListener('gesturestart', function(e){
    e.preventDefault();
});

document.addEventListener('touchmove', function(e){
    e.preventDefault();
}, { passive:false });

const menuBox = document.querySelectorAll(".menu-box");

menuBox.forEach((box)=>{

    box.addEventListener("click", ()=>{

        // efek ditekan
        box.style.transform = "scale(0.97)";

        // tampil loading
        document.getElementById("loadingBox")
        .style.display = "flex";

        // pindah halaman
        setTimeout(()=>{

            window.location.href = "pin.html";

        },2000);

    });

});
