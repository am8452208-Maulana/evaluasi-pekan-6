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
