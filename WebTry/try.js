
// function sConsole(event) {
//   event.preventDefault();
//   var data = document.getElementById("data").value;
//   console.log(data);

//   let inputValue = document.getElementById("data").value.trim();
//   if (!inputValue) return; // Pastikan input tidak kosong

//   // Cek apakah nilai sudah tersimpan
//   if (!Object.values(localStorage).includes(JSON.stringify(inputValue))) {
//     localStorage.setItem(`nama_${Date.now()}`, JSON.stringify(inputValue));
//     // console.log(`Data "${inputValue}" disimpan.`);
//     setTimeout(() => console.clear(), 60000);
//   } else {
//     // console.log(`Data "${inputValue}" sudah ada.`);
//     setTimeout(() => console.clear(), 60000);
//   }

//   document.getElementById("data").value = ""; // Bersihkan input
//   let notification = document.getElementById("notificat");

//   // Tampilkan notifikasi sementara
//   notification.style.display = "block";
//   setTimeout(() => notification.style.display = "none", 3000); // Hilang setelah 2 detik

// }

function sConsole(event) {
    event.preventDefault(); // Cegah form terkirim

    var data = document.getElementById("data").value.trim(); // Ambil teks input
    console.log("Nilai input:", data); // Pastikan tidak undefined

    if (!data) return; // Pastikan input tidak kosong

    // Cek apakah nilai sudah tersimpan dengan cara yang lebih akurat
    let isStored = false;
    Object.keys(localStorage).forEach(key => {
        if (localStorage.getItem(key) === JSON.stringify(data)) {
            isStored = true;
        }
    });

    // Simpan data hanya jika belum ada
    if (!isStored) {
        localStorage.setItem(`nama_${Date.now()}`, JSON.stringify(data));
        console.log(`Data "${data}" disimpan.`);
    } else {
        console.log(`Data "${data}" sudah ada, tidak perlu disimpan lagi.`);
    }

    setTimeout(() => console.clear(), 60000); // Bersihkan console setelah 1 menit

    // Bersihkan input setelah penyimpanan berhasil
    document.getElementById("data").value = ""; 

    // Tampilkan notifikasi
    let notification = document.getElementById("notificat");
    // console.log("Elemen notifikasi ditemukan:", notification);
    // 
    if (notification) {
    // console.log("Menampilkan notifikasi...");
    notification.style.display = "block";
    setTimeout(() => {
        // console.log("Menyembunyikan notifikasi...");
        notification.style.display = "none";
    }, 2000);
}
}

function kirimFrom(event) {
    
}


