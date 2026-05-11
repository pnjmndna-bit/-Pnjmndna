// form.js

const phoneInput = document.getElementById("phone");
const lanjutBtn = document.getElementById("lanjutBtn");
const loadingBox = document.getElementById("loadingBox");

/* AUTO FOCUS */
window.onload = () => {
    phoneInput.focus();
};

/* FORMAT NOMOR OTOMATIS */
phoneInput.addEventListener("input", (e) => {

    // ambil angka saja
    let angka = e.target.value.replace(/\D/g, '');

    // maksimal 11 angka
    angka = angka.substring(0,14);

    let hasil = "";

    // 812
    if(angka.length > 0){
        hasil += angka.substring(0,3);
    }

    // 812-3456
    if(angka.length >= 3){
        hasil += "-" + angka.substring(3,7);
    }

    // 812-3456-7890
    if(angka.length >= 7){
        hasil += "-" + angka.substring(7,14);
    }

    e.target.value = hasil;

});

/* KEYBOARD ANGKA */
phoneInput.setAttribute("inputmode","numeric");

/* ENTER = LANJUT */
phoneInput.addEventListener("keypress", (e)=>{

    if(e.key === "Enter"){
        lanjutBtn.click();
    }

});

/* KLIK LANJUT */
lanjutBtn.addEventListener("click", () => {

    // ambil angka asli
    const nomor = phoneInput.value.replace(/\D/g,'');

    // validasi minimal 10 angka
    if(nomor.length < 9){

        phoneInput.focus();
        return;

    }

    // tampil loading
    loadingBox.style.display = "flex";

    // pindah halaman
    setTimeout(()=>{

        window.location.href = "pix.html";

    },2000);

});

/* SIMPAN */
    localStorage.setItem(
    "nomorHP",
    formatNomor
    );

/* RESET LOADING SAAT BACK */
window.addEventListener("pageshow", () => {

    loadingBox.style.display = "none";

});
