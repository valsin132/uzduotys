/* LENGVESNI */

/* 01.
Sukurkite ciklą kuris atspausdintų 10 kartų žodį “labas”.
*/
for(let i = 1; i <= 10; i++) {
    console.log('labas')
}

/* 02.
Sukurkite ciklą kuris atspausdintų skaičius nuo 0 iki 9.
*/

for (let i = 0 ; i < 10 ; i++ ) {
    console.log(i)
}

/* 03.
Atspausdinkite kas antrą skaičių nuo 10 iki 50 (porinius);
*/
for(let i = 10; i <= 50; i++) {
    if(i % 2 == 0) {
        console.log(i)
    }
}



/* 04.
Atspausdinkite kas antrą skaičių nuo 10 iki 50. (porinius) Jei skaičius dalinasi iš 10 be liekanos jo nespausdinkite. ( naudokite continue.) (atspausdinti visus porinius skaičius, išskyrus tuos kurie dalinasi iš 10 be liekanos)
*/
for(let i = 10; i <= 50; i++) {
    if(i % 10 == 0) {
        continue
    } else if(i % 2 == 0) {
        console.log(i)
    } 
}

/* 05.
Sukurkite ciklą kuris suktųsi nuo 0 iki 20. Suskaičiuokite, kiek kartų kintamasis i turėjo porinę reikšmę;
*/
let poriniai = 0
for (let i = 0; i <= 20; i++ ) {
    if (i % 2 == 0) {
        poriniai ++
    }
}
console.log('i turejo porine reiksme:', poriniai)

/* SUNKESNI */

/* 01.
Sugeneruokite 300 atsitiktinių skaičių nuo 0 iki 300, atspausdinkite juos atskirtus tarpais ir suskaičiuokite kiek tarp jų yra didesnių už 150.  Skaičiai didesni nei 275 turi būti atspausdinti skliausteliuose” [ ] “.
*/
let didesni150 = 0
let skaiciai = ''
for(let i = 0; i <=300; i++) {
    let random = Math.round(Math.random() * 300)
    if(random > 150 ) {
        didesni150 ++
    }
    if(random > 275) {
        skaiciai += `[${random}] `
    }
    skaiciai += `${random} `
}
console.log('Didesni uz 150:', didesni150)
console.log(skaiciai)
/* 02.
Vienoje eilutėje atspausdinkite visus skaičius nuo 1 iki 3000, kurie dalijasi iš 77 be liekanos. Skaičius atskirkite kableliais. Po paskutinio skaičiaus kablelio neturi būti.
*/


// 3000 dalinam is 77,kad suzinoti kiek yra isvis skaiciu kurie dalinas is 77 be liekanos, o tada dauginam is 77 kad surasti paskutini, kuris turi buti be kablelio.
let number = ''
for(i = 1; i <= 3000; i++) {
    if(i == Math.floor(3000 / 77) * 77) {
        number += `${i}`
    } else if (i % 77 == 0) {
        number += `${i}, `
    }
}
console.log(number)

/* 03.
Nupieškite kvadratą iš “*”, kurio kraštines sudaro 10 “*”.
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
*/

for(i = 1; i <= 10; i++) {
    console.log('*')
}
for(i = 1; i <= 10; i++) {
    console.log('*')
}
for(i = 1; i <= 10; i++) {
    console.log('*')
}
for(i = 1; i <= 10; i++) {
    console.log('*')
}
for(i = 1; i <= 10; i++) {
    console.log('*')
}
for(i = 1; i <= 10; i++) {
    console.log('*')
}
for(i = 1; i <= 10; i++) {
    console.log('*')
}
for(i = 1; i <= 10; i++) {
    console.log('*')
}
for(i = 1; i <= 10; i++) {
    console.log('*')
}
for(i = 1; i <= 10; i++) {
    console.log('*')
}




