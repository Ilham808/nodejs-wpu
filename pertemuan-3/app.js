const fs = require('fs');

// Menulis string ke file secara synchronous
// fs.writeFileSync('test.txt', 'Hello world secara synchronous');

// Menulis string ke file secara asynchronous
// fs.writeFile('test.txt', 'Hellow world secara asynchronous', (e) => {
//     console.log(e);
// })

// Membaca file secara synchronous
// const data = fs.readFileSync('test.txt', 'utf-8');
// console.log(data)

// Membaca file secara asynchronous
// fs.readFile('test.txt', 'utf-8', (err, data) => {
//     if(err) throw err;
//     console.log(data);
// })

// Redline
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// rl.question('Siapa nama kamu? :', (jawaban) => {
//     console.log(`Nama kamu adalah ${jawaban}`);
//     rl.close();
// })

rl.question('Siapa nama kamu? : ', (nama) => {
    rl.question('Nomor Hp kamu? : ', (nohp) => {
        const textResult = {
            nama,
            nohp
        };
        const bacaFile = fs.readFileSync('test.json', 'utf-8');
        const jsonData = JSON.parse(bacaFile);
        jsonData.push(textResult);
        fs.writeFile('test.json', JSON.stringify(jsonData), (e) => {
                console.log(e);
        })
        console.log(`Nama kamu adalah ${nama}`);
        console.log(`Nomor Hp kamu adalah ${nohp}`);
        rl.close();
    })
})