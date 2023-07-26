const mtkDasar = require('./function-first');

const helloWorld = (nama) => {
    return `Halo, Nama saya ${nama}`;
}

console.log(helloWorld("Ilham Budiawan Sitorus"))

const sebutNama = (nama, umur) => `Halo, Nama saya ${nama} dan umur saya ${umur} tahun`;

console.log(sebutNama("Ilham Budiawan Sitorus", 23));

console.log(mtkDasar(5, 10));