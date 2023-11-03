/* 01.
Sukurkite masyvą su dešimt augalų pavadinimų.
*/
let augalai= ['Roze', 'Tulpe', 'Liepa', 'Hortenzija', 'Lelija', 'Gerbera', 'Zole', 'Akacija', 'Irisai', 'Meta']

/* 02.
Atspausdinkite kiekvieną pirmo uždavinio augalą atskiroje eilutėje.
*/
for (let augalas of augalai) {
    console.log(augalas)
}

/* 03.
Atspausdinkite pirmo uždavinio kiekvieną augalą pradedant nuo paskutinio, ir baigiant pirmuoju. (atvirkščias ciklas).
*/

let atvirksciai = ''
for(i = 9; i >=0; i--) {
    atvirksciai += `${augalai[i]} `
}
console.log(atvirksciai)


/* 04.
Suskaičiuokite kiek pirmo uždavinio masyve yra žodžių trumpesnių nei 5 simboliai, ir kiek ilgesnių nei 7 simboliai.
*/
let augalai2= ['Roze', 'Tulpe', 'Liepa', 'Hortenzija', 'Lelija', 'Gerbera', 'Zole', 'Akacija', 'Irisai', 'Meta']

let trump5 = 0
let ilg7 = 0
for( zodis of augalai2) {
    if(zodis.length < 5) {
        trump5++
    } else if ( zodis.length > 7) {
        ilg7++
    }
}
console.log('masyve yra žodžių trumpesnių nei 5 simboliai:', trump5)
console.log('masyve yra žodžių ilgesnių nei 7 simbolia:', ilg7)
