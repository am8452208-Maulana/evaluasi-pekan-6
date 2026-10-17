// ========================================
// BAGIAN 5: LATIHAN LOGIKA
// ========================================

// 1. Menghitung faktorial menggunakan perulangan for.
function hitungFaktorial(n) {
    if (n < 0) {
        return null;
    }

    let hasil = 1;

    for (let i = 1; i <= n; i++) {
        hasil *= i;
    }

    return hasil;
}

console.log("=== FAKTORIAL ===");
console.log(hitungFaktorial(5));  // 120
console.log(hitungFaktorial(0));  // 1
console.log(hitungFaktorial(1));  // 1
console.log(hitungFaktorial(-3)); // null


// 2. Memeriksa palindrom tanpa menggunakan reverse().
function cekPalindrom(teks) {
    const teksBersih = teks.trim().toLowerCase();

    if (teksBersih === "") {
        return false;
    }

    let kiri = 0;
    let kanan = teksBersih.length - 1;

    while (kiri < kanan) {
        if (teksBersih[kiri] !== teksBersih[kanan]) {
            return false;
        }

        kiri++;
        kanan--;
    }

    return true;
}

console.log("\n=== PALINDROM ===");
console.log(cekPalindrom("Katak"));  // true
console.log(cekPalindrom(" Malam ")); // true
console.log(cekPalindrom("Kopi"));   // false
console.log(cekPalindrom(""));       // false


// 3. Menghitung huruf vokal dengan for...of.
function hitungVokal(teks) {
    const teksKecil = teks.toLowerCase();
    let jumlah = 0;

    for (const huruf of teksKecil) {
        if ("aiueo".includes(huruf)) {
            jumlah++;
        }
    }

    return jumlah;
}

console.log("\n=== JUMLAH VOKAL ===");
console.log(hitungVokal("Kedai Senja")); // 5
console.log(hitungVokal("RHYTHM"));      // 0
console.log(hitungVokal("Aiueo"));       // 5


// 4. Mencari angka terbesar tanpa Math.max().
function cariTerbesar(daftar) {
    if (daftar.length === 0) {
        return null;
    }

    let nilaiTerbesar = daftar[0];
    let indeksTerbesar = 0;

    for (let i = 1; i < daftar.length; i++) {
        if (daftar[i] > nilaiTerbesar) {
            nilaiTerbesar = daftar[i];
            indeksTerbesar = i;
        }
    }

    return {
        nilai: nilaiTerbesar,
        indeks: indeksTerbesar
    };
}

console.log("\n=== ANGKA TERBESAR ===");
console.log(cariTerbesar([12, 45, 7, 45, 30]));
// { nilai: 45, indeks: 1 }

console.log(cariTerbesar([3]));
// { nilai: 3, indeks: 0 }

console.log(cariTerbesar([]));
// null


// 5. Menghapus duplikat dengan includes().
// Array baru dibuat sehingga array asli tidak berubah.
function hapusDuplikat(daftar) {
    const hasil = [];

    for (const item of daftar) {
        if (!hasil.includes(item)) {
            hasil.push(item);
        }
    }

    return hasil;
}

const angkaAsli = [1, 2, 2, 3, 1];
const hurufAsli = ["a", "b", "a"];
const kosong = [];

console.log("\n=== HAPUS DUPLIKAT ===");
console.log(hapusDuplikat(angkaAsli)); // [1, 2, 3]
console.log("Array asli:", angkaAsli);  // Tetap [1, 2, 2, 3, 1]

console.log(hapusDuplikat(hurufAsli)); // ["a", "b"]
console.log(hapusDuplikat(kosong));    // []


// 6. Memeriksa bilangan prima dengan while.
function cekBilanganPrima(n) {
    if (n < 2) {
        return false;
    }

    let pembagi = 2;

    while (pembagi <= Math.sqrt(n)) {
        if (n % pembagi === 0) {
            return false;
        }

        pembagi++;
    }

    return true;
}

console.log("\n=== BILANGAN PRIMA ===");
console.log(cekBilanganPrima(2));  // true
console.log(cekBilanganPrima(17)); // true
console.log(cekBilanganPrima(15)); // false
console.log(cekBilanganPrima(1));  // false
console.log(cekBilanganPrima(0));  // false


/*
JAWABAN DALAM KOMENTAR

1. Contoh hitungFaktorial(5):
   - Awalnya hasil = 1.
   - i = 1, hasil = 1 * 1 = 1.
   - i = 2, hasil = 1 * 2 = 2.
   - i = 3, hasil = 2 * 3 = 6.
   - i = 4, hasil = 6 * 4 = 24.
   - i = 5, hasil = 24 * 5 = 120.
   Jadi hasilnya 120.

2. Array asli tidak berubah karena hasil disimpan dalam array baru.
   includes() dipakai untuk mengecek apakah elemen sudah ada.

3. Pada cekBilanganPrima(), return false langsung menghentikan function
   ketika ditemukan pembagi. Jika return itu dihapus, pemeriksaan dapat
   terus berjalan dan hasil logika perlu diatur ulang; tidak cukup hanya
   menghapusnya tanpa mengganti alurnya.

4. cariTerbesar([]) menghasilkan null karena tidak ada angka yang dapat
   dibandingkan. Angka 0 justru bisa dianggap sebagai nilai terbesar
   yang valid, padahal array kosong tidak memiliki nilai.

5. hitungFaktorial() menggunakan for karena jumlah langkahnya jelas.
   hitungVokal() menggunakan for...of karena perlu membaca setiap huruf.
   cekBilanganPrima() menggunakan while karena pemeriksaan berhenti
   ketika pembagi melewati akar dari angka yang diperiksa.
*/