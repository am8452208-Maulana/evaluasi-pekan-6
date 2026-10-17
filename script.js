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
