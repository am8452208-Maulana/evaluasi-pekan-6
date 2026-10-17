// ========================================
// BAGIAN 7.1: TEBAK
// Tulis tebakan sebelum menjalankan setiap console.log.
// ========================================

console.log("=== POTONGAN A ===");

// Tebakan: 8
console.log("  Hai Kawan  ".trim().length);

// Tebakan: "Kopi"
console.log("Kopi Susu".toUpperCase().slice(0, 4));

// Tebakan: 3
console.log("a,b,c".split(",").length);

// Tebakan: "bonana"
console.log("banana".replace("a", "o"));

// Tebakan: "bonono"
console.log("banana".replaceAll("a", "o"));

// Tebakan: 42
console.log(parseInt("42px"));

// Tebakan: NaN
console.log(Number("42px"));

// Tebakan: 3
console.log(parseInt("3.99"));

// Tebakan: "string"
console.log(typeof (3.14159).toFixed(2));

// Tebakan: "0.30"
console.log((0.1 + 0.2).toFixed(2));

// Tebakan: "1010"
console.log("10" + 5 * 2);

// Tebakan: true
console.log(!0 && !"");


console.log("\n=== POTONGAN B ===");

let angka = [10, 20, 30, 40];

// Tebakan: [20, 30]
let potongan = angka.slice(1, 3);

// Tebakan: [20, 30]
let hapus = angka.splice(1, 2);

console.log(potongan);
console.log(hapus);

// Tebakan: [10, 40]
console.log(angka);

function ganda(n) {
    return n * 2;
}

function cetak(n) {
    console.log(n * 2);
}

// Tebakan: 10
console.log(ganda(4) + ganda(1));

// Tebakan: mencetak 8, lalu undefined
console.log(cetak(4));

const toko = {
    nama: "Senja",
    stok: 5,

    jual(n) {
        this.stok -= n;
        return this.stok;
    }
};

toko.jual(2);

// Tebakan: 2
console.log(toko.jual(1));

// Tebakan: true
console.log("stok" in toko);

for (let k in toko) {
    console.log(k);
}


console.log("\n=== POTONGAN C ===");

let hasil = "";

for (let i = 1; i <= 6; i++) {
    if (i === 2) {
        continue;
    }

    if (i === 5) {
        break;
    }

    hasil += i;
}

// Tebakan: "134"
console.log(hasil);

let n = 3;
let kali = 1;

while (n > 0) {
    kali *= n;
    n--;
}

// Tebakan: 6
console.log(kali);

let x = 0;

do {
    x += 5;
} while (x < 3);

// Tebakan: 5
console.log(x);

for (let huruf of "ABC") {
    console.log(huruf + huruf.toLowerCase());
}

/*
========================================
BAGIAN 7.2: EKSPERIMEN
========================================*/

// 1. Function declaration dapat dipanggil sebelum didefinisikan.
console.log("\n=== FUNCTION DECLARATION ===");
console.log(salam());

function salam() {
    return "Halo!";
}

// Function expression tidak dapat dipanggil sebelum inisialisasinya.
// Jika baris berikut diaktifkan sebelum deklarasi const, akan muncul
// ReferenceError karena variabel berada dalam temporal dead zone.
// console.log(sapa());

// const sapa = function () {
//     return "Hai!";
// };

const sapa = function () {
    return "Hai!";
};

console.log(sapa());


// 2. slice tidak mengubah array asli, splice mengubah array asli.
console.log("\n=== SLICE DAN SPLICE ===");

const buah = ["apel", "jeruk", "mangga"];
const hasilSlice = buah.slice(0, 2);

console.log("Hasil slice:", hasilSlice);
console.log("Buah setelah slice:", buah);

const hasilSplice = buah.splice(1, 1);

console.log("Hasil splice:", hasilSplice);
console.log("Buah setelah splice:", buah);


// 3. for...in menghasilkan indeks, for...of menghasilkan nilai.
console.log("\n=== FOR...IN DAN FOR...OF ===");

const angkaContoh = [10, 20, 30];

for (const indeks in angkaContoh) {
    console.log("for...in:", indeks, typeof indeks);
}

for (const nilai of angkaContoh) {
    console.log("for...of:", nilai);
}


// 4. toFixed menghasilkan string.
console.log("\n=== TOFIXED ===");

console.log((5).toFixed(1) + 1); // "5.01"
console.log(Number((5).toFixed(1)) + 1); // 6


// 5. Membuktikan nilai Falsy dan Truthy.
console.log("\n=== FALSY DAN TRUTHY ===");

const nilaiFalsy = [
    false,
    0,
    "",
    null,
    undefined,
    NaN
];

for (const nilai of nilaiFalsy) {
    if (nilai) {
        console.log("Masuk if:", nilai);
    } else {
        console.log("Tidak masuk if:", String(nilai));
    }
}

const nilaiTruthy = ["0", [], {}];

for (const nilai of nilaiTruthy) {
    if (nilai) {
        console.log("Masuk if:", nilai);
    } else {
        console.log("Tidak masuk if:", nilai);
    }
}


/*
========================================
BAGIAN 7.3: JAWABAN DALAM KOMENTAR
========================================

1. "10" + 5 * 2 menghasilkan "1010".
   Perkalian dikerjakan lebih dahulu, sehingga 5 * 2 menjadi 10.
   Setelah itu, operator + menggabungkan string "10" dengan angka 10,
   sehingga hasilnya menjadi string "1010".

2. potongan dan hapus berisi [20, 30], tetapi efeknya berbeda.
   slice() mengambil bagian array tanpa mengubah array asli.
   splice() mengambil sekaligus menghapus elemen dari array asli.
   Karena splice dipanggil setelah slice, angka menjadi [10, 40].

3. cetak(4) mencetak 8 dari console.log di dalam function.
   Namun, function cetak tidak memiliki return, sehingga nilai yang
   dikembalikan otomatis undefined. console.log(cetak(4)) lalu
   mencetak undefined sebagai baris kedua.

4. hasil bernilai "134":
   - i = 1: angka 1 ditambahkan, hasil menjadi "1".
   - i = 2: continue melewati penambahan angka 2.
   - i = 3: angka 3 ditambahkan, hasil menjadi "13".
   - i = 4: angka 4 ditambahkan, hasil menjadi "134".
   - i = 5: break menghentikan perulangan sebelum angka 5 ditambahkan.
   Jadi hasil akhirnya "134".

5. do...while selalu menjalankan blok setidaknya sekali sebelum
   memeriksa kondisi. x awalnya 0, lalu ditambah 5. Setelah itu,
   kondisi 5 < 3 bernilai false dan perulangan berhenti.
*/