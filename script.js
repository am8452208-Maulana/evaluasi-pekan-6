/*
Nama        : Ahmad Maulana
Tanggal     : 17 Oktober 2026
Tujuan      : Membersihkan data transaksi, menjalankan mesin kasir,
              dan membuat laporan harian Kedai Senja.
*/

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// BAGIAN 2.1 - DATA KEDAI
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const kedai = {
    nama: "Kedai Senja",
    pemilik: "Ahmad Maulana",
    kota: "Serui",
    tahunBerdiri: 2024,
    sedangBuka: true,
    nomorWhatsApp: "081234567890",
    website: null,
    jamOperasional: {
        buka: "08.00",
        tutup: "21.00"
    }
};

const menu = [
    { nama: "Kopi Susu", kategori: "Minuman", harga: 15000, stok: 20 },
    { nama: "Kopi Hitam", kategori: "Minuman", harga: 10000, stok: 15 },
    { nama: "Es Teh", kategori: "Minuman", harga: 5000, stok: 25 },
    { nama: "Roti Bakar", kategori: "Makanan", harga: 12000, stok: 10 },
    { nama: "Nasi Goreng", kategori: "Makanan", harga: 20000, stok: 12 },
    { nama: "Kentang Goreng", kategori: "Camilan", harga: 10000, stok: 8 },
    { nama: "Pisang Goreng", kategori: "Camilan", harga: 8000, stok: 0 },
    { nama: "Jus Alpukat", kategori: "Minuman", harga: 18000, stok: 7 }
];

// Semua data transaksi mentah berupa teks.
const transaksiMentah = [
    {
        kode: "trx-001",
        pelanggan: "  rina WULANDARI ",
        hari: " JUMAT ",
        uangBayar: "150.000",
        voucher: " diskon10 ",
        pesanan: [
            { menu: " kopi SUSU", jumlah: "2" },
            { menu: "roti BAKAR ", jumlah: "1" }
        ]
    },
    {
        kode: "trx-002",
        pelanggan: "budi santoso",
        hari: "sabtu",
        uangBayar: "100000",
        voucher: "DISKON5",
        pesanan: [
            { menu: "Nasi Goreng", jumlah: "2" },
            { menu: "Es Teh", jumlah: "2" }
        ]
    },
    {
        kode: "trx-003",
        pelanggan: "siti aminah",
        hari: "minggu",
        uangBayar: "100.000",
        voucher: "",
        pesanan: [
            { menu: "Kopi Hitam", jumlah: "1" },
            { menu: "Kentang Goreng", jumlah: "1" }
        ]
    },
    {
        kode: "trx-004",
        pelanggan: "   ",
        hari: "senin",
        uangBayar: "50000",
        voucher: "diskon10",
        pesanan: [
            { menu: "Es Teh", jumlah: "2" }
        ]
    },
    {
        kode: "trx-005",
        pelanggan: "andi wijaya",
        hari: "selasa",
        uangBayar: "50000",
        voucher: "",
        pesanan: []
    },
    {
        kode: "trx-006",
        pelanggan: "dewi lestari",
        hari: " rabu ",
        uangBayar: "100000",
        voucher: "DISKON10",
        pesanan: [
            { menu: "Jus Alpukat", jumlah: "1" },
            { menu: "Menu Tidak Ada", jumlah: "1" },
            { menu: "Pisang Goreng", jumlah: "1" },
            { menu: "Kopi Susu", jumlah: "0" }
        ]
    }
];

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// BAGIAN 2.2 - FUNCTION PEMBERSIH DATA
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Function declaration: merapikan nama pelanggan atau menu.
function bersihkanNama(teks) {
    return teks
        .trim()
        .replace(/\s+/g, " ")
        .toLowerCase()
        .replace(/\b[a-z]/g, huruf => huruf.toUpperCase());
}

// Function expression: mengubah teks menjadi angka.
const ubahKeAngka = function (teks) {
    const angka = Number(teks.replace(/[.\s]/g, ""));
    return Number.isFinite(angka) ? angka : 0;
};

// Arrow function: membaca persentase voucher.
const ambilPersenVoucher = (kode) => {
    const kodeBersih = kode.trim().toUpperCase();
    const cocok = kodeBersih.match(/^DISKON(\d+)$/);
    return cocok ? Number(cocok[1]) : 0;
};

// Mengubah angka menjadi format Rupiah tanpa toLocaleString.
function formatRupiah(angka) {
    const angkaBulat = Math.round(angka);
    const teks = String(Math.abs(angkaBulat));
    const hasil = teks.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return (angkaBulat < 0 ? "-Rp " : "Rp ") + hasil;
}

// Pengujian setiap function, minimal 3 kasus.
console.log("\n=== UJI PEMBERSIHAN DATA ===");

console.log('bersihkanNama("  rina   WULANDARI ") →',
    bersihkanNama("  rina   WULANDARI "));
console.log('bersihkanNama("") →', bersihkanNama(""));
console.log('bersihkanNama("ahMAD maULANA") →',
    bersihkanNama("ahMAD maULANA"));

console.log('ubahKeAngka("150.000") →', ubahKeAngka("150.000"));
console.log('ubahKeAngka("75000") →', ubahKeAngka("75000"));
console.log('ubahKeAngka("abc") →', ubahKeAngka("abc"));

console.log('ambilPersenVoucher(" diskon10 ") →',
    ambilPersenVoucher(" diskon10 "));
console.log('ambilPersenVoucher("PROMO5") →',
    ambilPersenVoucher("PROMO5"));
console.log('ambilPersenVoucher("") →', ambilPersenVoucher(""));

console.log("formatRupiah(1250000) →", formatRupiah(1250000));
console.log("formatRupiah(500) →", formatRupiah(500));
console.log("formatRupiah(0) →", formatRupiah(0));

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// BAGIAN 2.3 - DATA BERSIH
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const transaksiBersih = [];

for (const trx of transaksiMentah) {
    const pesananBersih = [];

    for (const item of trx.pesanan) {
        pesananBersih.push({
            menu: bersihkanNama(item.menu),
            jumlah: ubahKeAngka(item.jumlah)
        });
    }

    transaksiBersih.push({
        kode: trx.kode.toUpperCase(),
        pelanggan: bersihkanNama(trx.pelanggan),
        hari: trx.hari.trim().toLowerCase().replace(/\s+/g, " "),
        uangBayar: ubahKeAngka(trx.uangBayar),
        persenVoucher: ambilPersenVoucher(trx.voucher),
        pesanan: pesananBersih
    });
}

console.log("\n=== TRANSAKSI BERSIH ===");
console.log(transaksiBersih);

// Jawaban teori Bagian 2:
// 1. parseInt membaca bilangan bulat, parseFloat membaca bilangan desimal,
// dan Number mengubah seluruh teks menjadi angka. Titik ribuan dihapus
// agar "150.000" menjadi 150000; parseInt("150.000") menghasilkan 150.
// 2. toFixed menghasilkan string. Contohnya typeof (2.5).toFixed(0)
// adalah "string"; hasil "3" + 2 menjadi "32", bukan 5.
// 3. replace mengganti kecocokan pertama, sedangkan replaceAll mengganti
// semua kecocokan. replaceAll cocok untuk menghapus semua titik ribuan.
// 4. toUpperCase tidak mengubah string asli karena string bersifat
// immutable; hasilnya harus disimpan atau digunakan langsung.
// 5. bersihkanNama adalah declaration karena mudah dipanggil berdasarkan
// nama; ubahKeAngka adalah expression; ambilPersenVoucher adalah arrow
// function yang ringkas.

