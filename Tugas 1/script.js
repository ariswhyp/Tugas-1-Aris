document.addEventListener("DOMContentLoaded", function () {
    const logo = document.getElementById("logo");
    const popup = document.getElementById("popup");

    if (!logo || !popup) {
        console.error("Elemen logo atau popup tidak ditemukan!");
        return;
    }

    // Fungsi untuk menampilkan atau menyembunyikan popup dengan klik dan klik dua kali
    logo.addEventListener("click", function (event) {
        if (popup.style.display === "block") {
            return; // Jika popup sudah terbuka, tidak melakukan apa-apa (biar dblclick tetap berfungsi)
        }
        popup.style.display = "block";
        event.stopPropagation(); // Mencegah event klik menyebar ke dokumen
    });

    logo.addEventListener("dblclick", function () {
        popup.style.display = "none";
    });

    // Tutup popup jika klik di luar area popup atau saat scroll
    document.addEventListener("click", function (event) {
        if (!popup.contains(event.target) && event.target !== logo) {
            popup.style.display = "none";
        }
    });

    document.addEventListener("scroll", function () {
        popup.style.display = "none";
    });
});