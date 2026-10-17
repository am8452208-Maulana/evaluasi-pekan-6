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
