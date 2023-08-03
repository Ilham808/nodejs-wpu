function mtkDasar(number1, number2){
    var result = number1 + number2;
    return `Hasil dari ${number1} ditambah ${number2} sama dengan ${result}`;
}

const PI = 3.14;

// module.exports = mtkDasar;
module.exports.mtkDasar = mtkDasar;
module.exports.PI = PI;
