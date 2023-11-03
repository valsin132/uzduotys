/*
Uždavinių sprendimui nenaudoti, masyvų, ciklų ir savo parašytų funkcijų. JavaScript funkcijas žinoma naudokite (pageidautina).
Visi random generuojami skaičiai turi būti sveikieji.
*/

/* 01.
Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, gimimo metus ir šiuos metus (nebūtinai tikrus). Parašykite kodą, kuris pagal gimimo metus paskaičiuotų jūsų amžių ir naudodamas vardo ir pavardės kintamuosius atspausdintų tokį sakinį :
"Aš esu Vardenis Pavardenis. Man yra XX metai(-ų)".
*/
let vardas = 'Valdemaras';
let pavarde = 'Sinkevicius';
let gim = 1988;
let metai = 2023;
console.log('Aš esu', vardas, pavarde+ '. Man yra', metai-gim ,' metai(-ų)');


/* 02.
Naudokite funkciją Math.random(). Sukurkite du kintamuosius ir naudodamiesi funkcija Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės. Atspausdinkite rezultatą jį suapvalinę iki 2 skaičių po kablelio.
*/
let skaicius1 = Math.round(Math.random() * 4)
console.log(skaicius1)
let skaicius2 = Math.round(Math.random() * 4)
console.log(skaicius2)
if (skaicius1 > skaicius2 && skaicius2 !=0 ) {
    console.log((skaicius1 / skaicius2).toFixed(2))
}   else if (skaicius2 > skaicius1 && skaicius1 !=0) {
    console.log((skaicius2/skaicius1).toFixed(2))
}   else {console.log('Dalyba is 0 negalima')}



/* 03.
Naudokite funkciją Math.random(). Sukurkite tris kintamuosius ir naudodamiesi funkcija Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 25. Raskite ir atspausdinkite kintąmąjį turintį vidurinę reikšmę.
*/

let num1 = Math.round(Math.random() * 25)
let num2 = Math.round(Math.random() * 25)
let num3 = Math.round(Math.random() * 25)
console.log(num1, num2, num3)
if (num1 < num2 && num1 > num3 || num1 > num2 && num1 < num3) {
    console.log('kintamasis nr1 turi vidurine reiksme:', num1)
} else if (num2 < num1 && num2 > num3 || num2 > num1 && num2 < num3) {
    console.log('kintamasis nr2 turi vidurine reiksme:', num2)
} else if (num3 < num1 && num3 > num2 || num3 > num1 && num3 < num2) {
    console.log('kintamasis nr3 turi vidurine reiksme:', num3)
} else {console.log('kazkurie skaiciai yra lygus, todel negalima rasti kintamojo turincio vidurine reiksme')}

/* 04.
Įvedami skaičiai - kr1, kr2, kr3 – kraštinių ilgiai, trys kintamieji (naudokite ​Math.random()​ funkcija nuo 1 iki 10). Parašykite JavaScript programą, kuri nustatytų, ar galima sudaryti trikampį ir atsakymą atspausdintų. 
*/
let kr1 = Math.ceil(Math.random() * 10)
let kr2 = Math.ceil(Math.random() * 10)
let kr3 = Math.ceil(Math.random() * 10)

if (kr1 + kr2 > kr3 && kr1 + kr3 > kr2 && kr2 + kr3 > kr1 ) {
    console.log(`Is krastiniu ${kr1}, ${kr2} ir ${kr3} galima sudaryti trikampi`)
} else {console.log(`Is krastiniu ${kr1}, ${kr2} ir ${kr3} negalima sudaryti trikampio`)}


/* 05.
Sukurkite keturis kintamuosius ir ​Math.random()​ funkcija sugeneruokite jiems reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų.
*/

let k1 = Math.round(Math.random() * 2)
let k2 = Math.round(Math.random() * 2)
let k3 = Math.round(Math.random() * 2)
let k4 = Math.round(Math.random() * 2)
console.log(k1, k2, k3, k4)
let nuliai = 0
let vienetai = 0
let dvejetai = 0

if (k1 == 0) {
    nuliai++
} else if (k1 == 1) {
    vienetai++
}else if (k1 == 2) {
    dvejetai++
} 

if (k2 == 0) {
    nuliai++
} else if (k2 == 1) {
    vienetai++
}else if (k2 == 2) {
    dvejetai++
} 

if (k3 == 0) {
    nuliai++
} else if (k3 == 1) {
    vienetai++
}else if (k3 == 2) {
    dvejetai++
} 

if (k4 == 0) {
    nuliai++
} else if (k4 == 1) {
    vienetai++
}else if (k4 == 2) {
    dvejetai++
} 
console.log('nuliu yra:', nuliai)
console.log('vienetu yra:', vienetai)
console.log('dvejetu yra:', dvejetai)


/* 06.
Naudokite funkcija Math.random(). Atspausdinkite 3 skaičius nuo -10 iki 10. Skaičiai mažesni už 0 turi būti  laužtiniuose skliaustuose [], 0 -  (), didesni už 0 {}.
*/
let number1 = Math.round(Math.random() * (10 + 10) +(-10))
let number2 = Math.round(Math.random() * (10 + 10) +(-10))
let number3 = Math.round(Math.random() * (10 + 10) +(-10))
if (number1 < 0) {
    console.log(`[${number1}]`)
} else if (number1 == 0) {
    console.log(`(${number1})`)
} else {console.log(`{${number1}}`)
}

if (number2 < 0) {
    console.log(`[${number2}]`)
} else if (number2 == 0) {
    console.log(`(${number1})`)
} else {console.log(`{${number2}}`)
}

if (number3 < 0) {
    console.log(`[${number3}]`)
} else if (number3 == 0) {
    console.log(`(${number1})`)
} else {console.log(`{${number3}}`)
}


/* 07.
Įmonė parduoda žvakes po 1 EUR. Perkant daugiau kaip už 1000 EUR taikoma 3 % nuolaida, daugiau kaip už 2000 EUR - 4 % nuolaida. Parašykite programą, kuri skaičiuos žvakių kainą ir atspausdintų atsakymą kiek žvakių ir kokia kaina perkama. Žvakių kiekį generuokite ​Math.random()​ funkcija nuo 5 iki 3000.
*/

let kiekis = Math.round(Math.random() * (3000 - 5) + 5)
if (kiekis <= 1000) {
    console.log(`Perkama ${kiekis} zvakiu po 1eur: ${kiekis*1} eur`)
} else if (kiekis > 1000 && kiekis <= 2000) {
    console.log(`Perkama ${kiekis} zvakiu su 3% nuolaida po ${1-0.03}: ${kiekis*(1-0.03)} eur`)
} else { console.log(`Perkama ${kiekis} zvakiu su 4% nuolaida po ${1-0.04}: ${(kiekis*(1-0.04)).toFixed(2)} eur`)
}



/* 08.
Naudokite funkciją Math.random(). Sukurkite tris kintamuosius su atsitiktinėm reikšmėm nuo 0 iki 100. Paskaičiuokite jų aritmetinį vidurkį. Tada aritmetinį vidurkį atmetus tas reikšmes, kurios yra mažesnės nei 10 arba didesnės nei 90. Abu vidurkius atspausdinkite. Rezultatus apvalinkite iki sveiko skaičiaus.
*/
let kin1 = Math.round(Math.random() * 100)
let kin2 = Math.round(Math.random() * 100)
let kin3 = Math.round(Math.random() * 100)
console.log('kintamasis1:', kin1)
console.log('kintamasis1:', kin2)
console.log('kintamasis1:', kin3)
let vidurkis = (kin1 + kin2 + kin3) / 3
console.log('Aritmetinis vidurkis:', vidurkis.toFixed(0))

let naujaSuma = 0
let reiksmes = 0
if (kin1 < 10 || kin1 > 90) {
    naujaSuma += kin1
    reiksmes++
}
if (kin2 < 10 || kin2 > 90) {
    naujaSuma += kin2
    reiksmes++
}
if (kin3 < 10 || kin3 > 90) {
    naujaSuma += kin3
    reiksmes++
}
if (naujaSuma == 0) {
    console.log('Nera reiksmiu, kurios yra mazesnes nei 10 arba didesnes nei 90')
} else {console.log('Naujas aritmetinis vidurkis:', (naujaSuma / reiksmes).toFixed(0) )}



/* 09.
Padarykite skaitmeninį laikrodį, rodantį valandas, minutes ir sekundes. Valandom, minutėm ir sekundėm sugeneruoti panaudokite funkciją Math.random(). Sugeneruokite skaičių nuo 0 iki 300. Tai papildomos sekundės. Skaičių pridėkite prie jau sugeneruoto laiko. Atspausdinkite laikrodį prieš ir po sekundžių pridėjimo ir pridedamų sekundžių skaičių.
*/

let valandos = Math.round(Math.random() * 24)
let minutes = Math.round(Math.random() * 60)
let sekundes = Math.round(Math.random() * 60)
let papSek = Math.round(Math.random() * 300)

console.log(`${valandos} : ${minutes} : ${sekundes}`)
console.log(`${valandos} : ${minutes} : ${sekundes} : ${papSek}`)


/* 10.
Naudokite funkciją Math.random(). Sugeneruokite 6 kintamuosius su atsitiktinėm reikšmėm nuo 1000 iki 9999. Atspausdinkite reikšmes viename string'e, išrūšiuotas nuo didžiausios iki mažiausios, atskirtas tarpais. Naudoti ciklų ir masyvų NEGALIMA.
*/

let kint1 = Math.round(Math.random() * (9999 - 1000) + 1000)
let kint2 = Math.round(Math.random() * (9999 - 1000) + 1000)
let kint3 = Math.round(Math.random() * (9999 - 1000) + 1000)
let kint4 = Math.round(Math.random() * (9999 - 1000) + 1000)
let kint5 = Math.round(Math.random() * (9999 - 1000) + 1000)
let kint6 = Math.round(Math.random() * (9999 - 1000) + 1000)

