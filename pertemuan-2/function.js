function mtkDasar(number1, number2){
    var result = number1 + number2;
    return `Hasil dari ${number1} ditambah ${number2} sama dengan ${result}`;
}

const PI = 3.14;

const mahasiswa = {
    nama: 'Ilham Budiawan Sitorus',
    umur: 20,
    cetakNama() {
        return `Halo, Nama Saya ${this.nama} dan umur saya ${this.umur} tahun`;
    }
};

class Mobil {
    constructor() {
        console.log('Lagi buat class mobil');
    }
}

// Cara Export Satu
// module.exports = mtkDasar;

// Cara Export Dua
// module.exports.mtkDasar = mtkDasar;
// module.exports.PI = PI;
// module.exports.mahasiswa = mahasiswa;
// module.exports.Mobil = Mobil;

// Cara Export Ketiga
module.exports = {
    mtkDasar,
    PI:PI,
    mahasiswa:mahasiswa,
    Mobil:Mobil
};