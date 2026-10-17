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

// ==================================================
// BAGIAN 3 - MESIN KASIR
// ==================================================

const kasir = {
    menu: menu,
    saldoKas: 0,
    riwayat: [],
    pecahan: [50000, 20000, 10000, 5000, 2000, 1000],

    cariMenu(nama) {
        for (const item of this.menu) {
            if (item.nama.toLowerCase() === nama.toLowerCase()) {
                return item;
            }
        }
        return null;
    },

    hitungSubtotal(pesanan) {
        let subtotal = 0;
        const itemValid = [];
        const itemTidakValid = [];

        for (const item of pesanan) {
            const dataMenu = this.cariMenu(item.menu);

            if (!dataMenu) {
                itemTidakValid.push({
                    menu: item.menu,
                    alasan: "Menu tidak ditemukan"
                });
                continue;
            }

            if (item.jumlah <= 0) {
                itemTidakValid.push({
                    menu: item.menu,
                    alasan: "Jumlah harus lebih dari 0"
                });
                continue;
            }

            if (dataMenu.stok < item.jumlah) {
                itemTidakValid.push({
                    menu: item.menu,
                    alasan: "Stok tidak cukup"
                });
                continue;
            }

            subtotal += dataMenu.harga * item.jumlah;

            itemValid.push({
                menu: dataMenu.nama,
                jumlah: item.jumlah,
                harga: dataMenu.harga
            });
        }

        return { subtotal, itemValid, itemTidakValid };
    },

    hitungPromoHari(hari) {
        switch (hari) {
            case "jumat":
                return 3000;
            case "sabtu":
            case "minggu":
                return 5000;
            default:
                return 0;
        }
    },

    hitungDiskon(subtotal, persenVoucher) {
        let persenSubtotal;

        if (subtotal >= 100000) {
            persenSubtotal = 15;
        } else if (subtotal >= 50000) {
            persenSubtotal = 10;
        } else if (subtotal >= 25000) {
            persenSubtotal = 5;
        } else {
            persenSubtotal = 0;
        }

        const persenTerbesar = Math.max(persenSubtotal, persenVoucher);
        return Math.round(subtotal * persenTerbesar / 100);
    },

    hitungPajak(nilai, tarif = 0.11) {
        return Math.round(nilai * tarif);
    },

    hitungKembalianPecahan(kembalian) {
        if (kembalian < 0) {
            return null;
        }

        let sisa = kembalian;
        const hasil = {};

        for (const pecahan of this.pecahan) {
            let jumlahLembar = 0;

            while (sisa >= pecahan) {
                sisa -= pecahan;
                jumlahLembar++;
            }

            if (jumlahLembar > 0) {
                hasil[pecahan] = jumlahLembar;
            }
        }

        hasil.sisa = sisa;
        return hasil;
    },

    prosesTransaksi(trx) {
        let hasil;

        if (!trx.pelanggan) {
            hasil = {
                kode: trx.kode,
                pelanggan: trx.pelanggan,
                status: "DITOLAK",
                alasan: "Nama pelanggan kosong"
            };
        } else if (!trx.pesanan.length) {
            hasil = {
                kode: trx.kode,
                pelanggan: trx.pelanggan,
                status: "DITOLAK",
                alasan: "Pesanan kosong"
            };
        } else {
            const perhitungan = this.hitungSubtotal(trx.pesanan);

            if (!perhitungan.itemValid.length) {
                hasil = {
                    kode: trx.kode,
                    pelanggan: trx.pelanggan,
                    status: "DITOLAK",
                    alasan: "Tidak ada item valid"
                };
            } else {
                const subtotal = perhitungan.subtotal;
                const promoHari = this.hitungPromoHari(trx.hari);
                const diskon = this.hitungDiskon(
                    subtotal,
                    trx.persenVoucher
                );

                const setelahDiskon = Math.max(
                    0,
                    subtotal - diskon - promoHari
                );

                const pajak = this.hitungPajak(setelahDiskon);
                const total = setelahDiskon + pajak;
                const kembalian = trx.uangBayar - total;
                const status = kembalian >= 0 ? "LUNAS" : "KURANG";

                let pecahanKembalian = null;

                if (status === "LUNAS") {
                    for (const item of perhitungan.itemValid) {
                        const dataMenu = this.cariMenu(item.menu);
                        dataMenu.stok -= item.jumlah;
                    }

                    this.saldoKas += total;
                    pecahanKembalian =
                        this.hitungKembalianPecahan(kembalian);
                }

                hasil = {
                    kode: trx.kode,
                    pelanggan: trx.pelanggan,
                    status,
                    subtotal,
                    promoHari,
                    diskon,
                    pajak,
                    total,
                    uangBayar: trx.uangBayar,
                    kembalian,
                    pecahanKembalian,
                    itemValid: perhitungan.itemValid,
                    itemTidakValid: perhitungan.itemTidakValid
                };
            }
        }

        this.riwayat.push(hasil);
        return hasil;
    },

    cetakStruk(hasil) {
        console.log("\n================================");
        console.log(`STRUK TRANSAKSI: ${hasil.kode}`);
        console.log(`Pelanggan: ${hasil.pelanggan || "(kosong)"}`);

        if (hasil.status === "DITOLAK") {
            console.log(`Status: DITOLAK`);
            console.log(`Alasan: ${hasil.alasan}`);
            console.log("================================");
            return;
        }

        console.log("--- Item Valid ---");

        for (let i = 0; i < hasil.itemValid.length; i++) {
            const item = hasil.itemValid[i];
            console.log(
                `${i + 1}. ${item.menu} x${item.jumlah} @ ` +
                `${formatRupiah(item.harga)}`
            );
        }

        if (hasil.itemTidakValid.length) {
            console.log("--- Item Tidak Valid ---");

            for (const item of hasil.itemTidakValid) {
                console.log(`${item.menu}: ${item.alasan}`);
            }
        }

        console.log(`Subtotal: ${formatRupiah(hasil.subtotal)}`);
        console.log(`Promo hari: ${formatRupiah(hasil.promoHari)}`);
        console.log(`Diskon: ${formatRupiah(hasil.diskon)}`);
        console.log(`Pajak: ${formatRupiah(hasil.pajak)}`);
        console.log(`Total: ${formatRupiah(hasil.total)}`);
        console.log(`Uang bayar: ${formatRupiah(hasil.uangBayar)}`);
        console.log(
            `Kembalian: ${formatRupiah(Math.max(0, hasil.kembalian))}`
        );
        console.log(`Status: ${hasil.status}`);

        if (hasil.pecahanKembalian) {
            console.log("Pecahan kembalian:", hasil.pecahanKembalian);
        }

        console.log("================================");
    }
};

// Target besar agar semua transaksi diproses.
const TARGET_KAS = 100000000;

for (const trx of transaksiBersih) {
    const hasil = kasir.prosesTransaksi(trx);
    kasir.cetakStruk(hasil);

    if (kasir.saldoKas >= TARGET_KAS) {
        console.log("Target kas tercapai");
        break;
    }
}

console.log("\nSaldo kas:", formatRupiah(kasir.saldoKas));

// Jawaban teori Bagian 3:
// 1. this.menu menunjuk properti menu milik object kasir.
// 2. switch cocok untuk membandingkan nilai hari. Case sabtu dan minggu
// digabung karena keduanya mendapat promo yang sama.
// 3. !trx.pesanan.length bernilai true ketika panjang array adalah 0.
// Nilai falsy antara lain false, 0, dan "".
// 4. break menghentikan perulangan, sedangkan continue melewati item
// saat ini dan melanjutkan ke item berikutnya.
// 5. Object subtotal, itemValid, dan itemTidakValid memberi informasi
// jumlah belanja sekaligus alasan item yang dilewati.
// 6. for...of memilih pecahan uang, sedangkan while menghitung berapa
// lembar pecahan tersebut. Pembagian dan modulo juga bisa digunakan.

// ========================================
// BAGIAN 4: LAPORAN HARIAN
// ========================================

// Mengambil semua transaksi dari percobaan pertama.
const riwayatLaporan = kasir.riwayat;

// Menghitung jumlah transaksi berdasarkan status.
const laporan = {
    jumlahTransaksi: riwayatLaporan.length,

    jumlahLunas: riwayatLaporan.filter(
        transaksi => transaksi.status === "LUNAS"
    ).length,

    jumlahKurang: riwayatLaporan.filter(
        transaksi => transaksi.status === "KURANG"
    ).length,

    jumlahDitolak: riwayatLaporan.filter(
        transaksi => transaksi.status === "DITOLAK"
    ).length,

    pendapatan: 0,
    rataRata: 0,
    transaksiTerbesar: null,
    penjualanPerMenu: {},
    menuTerlaris: "",
    daftarDitolak: [],
    kodeLunas: [],
    ringkasanKode: "",
    menuStokMenipis: []
};

// Mengolah transaksi yang berstatus LUNAS saja.
for (const transaksi of riwayatLaporan) {
    if (transaksi.status === "LUNAS") {
        laporan.pendapatan += transaksi.total;

        // Mencari transaksi LUNAS dengan total terbesar.
        if (
            laporan.transaksiTerbesar === null ||
            transaksi.total > laporan.transaksiTerbesar.total
        ) {
            laporan.transaksiTerbesar = transaksi;
        }

        // Mengumpulkan kode transaksi LUNAS.
        laporan.kodeLunas.push(transaksi.kode);

        // Menghitung penjualan setiap menu.
        // Sesuaikan "items", "nama", dan "jumlah" jika nama properti
        // di kode Bagian 2-3 milikmu berbeda.
        for (const item of transaksi.items) {
            const namaMenu = item.nama;

            // Bracket notation dipakai karena nama menu berasal dari variabel.
            if (namaMenu in laporan.penjualanPerMenu) {
                laporan.penjualanPerMenu[namaMenu] += item.jumlah;
            } else {
                laporan.penjualanPerMenu[namaMenu] = item.jumlah;
            }
        }
    }

    // Mencatat transaksi yang ditolak.
    if (transaksi.status === "DITOLAK") {
        laporan.daftarDitolak.push({
            kode: transaksi.kode,
            alasan: transaksi.alasan
        });
    }
}

// Menghitung rata-rata pendapatan per transaksi LUNAS.
laporan.rataRata = laporan.jumlahLunas > 0
    ? Math.round(laporan.pendapatan / laporan.jumlahLunas)
    : 0;

// Mencari menu dengan jumlah terjual terbanyak.
for (const namaMenu in laporan.penjualanPerMenu) {
    if (
        laporan.menuTerlaris === "" ||
        laporan.penjualanPerMenu[namaMenu] >
        laporan.penjualanPerMenu[laporan.menuTerlaris]
    ) {
        laporan.menuTerlaris = namaMenu;
    }
}

// Membuat ringkasan kode menggunakan perulangan dan +=.
for (let i = 0; i < laporan.kodeLunas.length; i++) {
    if (i > 0) {
        laporan.ringkasanKode += ", ";
    }

    laporan.ringkasanKode += laporan.kodeLunas[i];
}

// Mencari menu yang stoknya kurang dari 3.
for (const namaMenu in kasir.menu) {
    if (kasir.menu[namaMenu].stok < 3) {
        laporan.menuStokMenipis.push(namaMenu);
    }
}
