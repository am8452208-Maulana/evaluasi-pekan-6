// ========================================
// BAGIAN 6: PERBAIKI KODE
// ========================================

const TARIF_PAJAK = 0.11;
const harga = { kopi: 20000, teh: 7500, roti: 15000 };
let keranjang = ["kopi", "teh", "roti", "teh"];
let jumlahMember = "5";

const pelanggan = {
    nama: "rina",
    saldo: 100000,

    // FIX 1: Gunakan this.saldo agar mengambil saldo milik pelanggan.
    bayar(jumlah) {
        this.saldo -= jumlah;
        return this.saldo;
    }
};

// FIX 2: Gunakan i < keranjang.length agar tidak membaca indeks di luar array.
// FIX 3: Perulangan menghitung harga setiap barang dengan benar.
let subtotal = 0;

for (let i = 0; i < keranjang.length; i++) {
    subtotal += harga[keranjang[i]];
}

// FIX 4: Periksa diskon 10% lebih dahulu karena batasnya lebih besar.
// FIX 5: Kondisi diskon 5% digunakan setelah kondisi 10%.
let persen;

if (subtotal >= 50000) {
    persen = 10;
} else if (subtotal >= 25000) {
    persen = 5;
} else {
    persen = 0;
}

let diskon = (subtotal * persen) / 100;

// FIX 6: Tambahkan break agar promo Jumat tidak lanjut ke Sabtu/Minggu.
let hari = "jumat";
let promo;

switch (hari) {
    case "jumat":
        promo = 3000;
        break;

    case "sabtu":
    case "minggu":
        promo = 5000;
        break;

    default:
        promo = 0;
}

// FIX 7: Pajak dihitung dari subtotal setelah diskon dan promo.
let pajak = (subtotal - diskon - promo) * TARIF_PAJAK;

// FIX 8: Total adalah subtotal dikurangi diskon dan promo, lalu ditambah pajak.
let total = subtotal - diskon - promo + pajak;

// FIX 9: Hapus titik pemisah ribuan sebelum mengubah teks menjadi angka.
let uangBayarTeks = "100.000";
let uangBayar = Number(uangBayarTeks.replaceAll(".", ""));

let kembalian = uangBayar - total;

// FIX 10: Gunakan >= untuk mengecek apakah uang cukup, bukan assignment (=).
let status;

if (uangBayar >= total) {
    status = "Lunas";
} else {
    status = "Kurang";
}

// FIX 11: Ambil huruf pertama dengan slice(0, 1).
// FIX 12: Ambil sisa nama mulai indeks 1, bukan mulai indeks 0.
let namaRapi =
    pelanggan.nama.slice(0, 1).toUpperCase() +
    pelanggan.nama.slice(1);

// FIX 13: splice(1, 1) menghapus "teh" pertama.
// FIX 14: push() menambahkan "air" di akhir array.
keranjang.splice(1, 1);
keranjang.push("air");

// FIX 15: Ubah teks menjadi angka agar penjumlahan tidak menggabungkan teks.
let jumlahMemberBaru = Number(jumlahMember) + 1;

// FIX 16: Konversi hasil toFixed() kembali menjadi number.
let rataRata = Number((total / 4).toFixed(2));
let rataRataTotal = rataRata + 10;

// FIX 17: Tambahkan return agar function mengembalikan hasil format.
function formatRupiah(angka) {
    return "Rp " + angka;
}
// ========================================
// HASIL PROGRAM
// ========================================

console.log(subtotal, diskon, promo, pajak, total);
console.log(uangBayar, kembalian, status);
console.log(namaRapi);
console.log(keranjang);
console.log(jumlahMemberBaru);
console.log(rataRataTotal);
console.log(formatRupiah(kembalian));
console.log(pelanggan.bayar(30000));

// FIX 18: for...of tidak cocok untuk membaca kunci object.
// Object.keys() menghasilkan array kunci object.
for (const kunci of Object.keys(harga)) {
    console.log(kunci + ": " + harga[kunci]);
}

/*
CATATAN BUG

1. saldo tanpa this:
   Error ReferenceError karena saldo tidak didefinisikan sebagai variabel
   lokal atau variabel global.

2. i <= keranjang.length:
   Tidak selalu menimbulkan error, tetapi membaca indeks di luar array.
   Harga pada indeks tersebut menjadi undefined dan subtotal dapat menjadi NaN.

3. Urutan kondisi diskon salah:
   Tidak error, tetapi subtotal 50000 mendapatkan diskon 5%, bukan 10%.

4. switch tanpa break:
   Tidak error, tetapi kasus Jumat berlanjut ke kasus berikutnya sehingga
   promo menjadi 5000, bukan 3000.

5. Perhitungan pajak salah:
   Tidak error, tetapi perkalian hanya diterapkan ke promo, bukan ke
   seluruh nilai setelah diskon dan promo.

6. parseInt("100.000"):
   Tidak error, tetapi menghasilkan 100 karena parseInt berhenti di titik.

7. if (uangBayar = total):
   Tidak error karena = adalah operator penugasan. Nilai uangBayar justru
   berubah menjadi total, lalu kondisi memakai nilai total tersebut.

8. Nama tidak diubah dengan benar:
   Tidak error, tetapi hasil nama dapat menjadi "Rina rina" jika sisa
   nama dimulai dari indeks 0.

9. slice() untuk menghapus barang:
   Tidak error, tetapi slice tidak mengubah array asli.

10. unshift("air"):
    Tidak error, tetapi air ditambahkan di awal, bukan di akhir array.

11. jumlahMember + 1:
    Tidak error, tetapi "5" + 1 menghasilkan teks "51".

12. toFixed() menghasilkan string:
    Tidak error, tetapi string ditambah 10 dapat menghasilkan penggabungan
    teks, bukan penjumlahan angka.

13. formatRupiah tanpa return:
    Tidak error, tetapi function mengembalikan undefined.

14. for...of langsung pada object harga:
    Menghentikan program dengan TypeError karena object biasa tidak
    dapat langsung diiterasi dengan for...of.

15. bayar() memakai saldo tanpa this:
    Menghentikan program dengan ReferenceError, sehingga pemanggilan
    pelanggan.bayar(30000) gagal.

Catatan: Jumlah dan rincian kesalahan pada kode sumber bisa bergantung
pada bagaimana kesalahan yang saling berkaitan dihitung. Komentar FIX
di atas menandai lokasi perbaikan pada kode hasil akhir.

JAWABAN DALAM KOMENTAR

1. if (uangBayar = total) tidak error karena = adalah operator penugasan
   yang sah. Nilai uangBayar berubah menjadi nilai total. Untuk membandingkan
   nilai, gunakan >=, ===, atau operator perbandingan lain.

2. parseInt("100.000") menghasilkan 100 karena parseInt membaca angka
   dari awal teks dan berhenti ketika menemukan karakter titik.
   Hapus titik terlebih dahulu, lalu gunakan Number().
*/