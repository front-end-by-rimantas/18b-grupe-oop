/*
SUO:
- veisle
- vardas
- spalva
- lytis
- dantu skaicius
- greitis
- lojimas()
- uodegosVizginimas()
- begti()



Animal:         (breed, name, voice())
    Pet:
        Dog
        Cat
    Bird:
        Parrot
        Chicken
*/

import { Dog } from './Dog.js';
import { Cat } from './Cat.js';
import { Bird } from './Bird.js';
import { Chicken } from './Chicken.js';

const rexParams = {
    vardas: 'Rex',
    veisle: 'Lietuvos lenciuginis',
    spalva: 'rudas',
    lytis: true
}
const rex = new Dog(rexParams);

console.log(rex.name);
console.log(rex.breed);
console.log(rex.legs);
console.log(rex.gender);
console.log(rex.sound);
rex.voice();

// const tomParams = {
//     vardas: 'Tom',
//     veisle: 'Cartoon',
//     spalva: 'rudas',
//     lytis: false
// }
// const tom = new Cat(tomParams);

// const randomBird = {
//     vardas: 'Random bird',
//     veisle: 'skraiduolis'
// }
// const skraiduolisBird = new Bird(randomBird);

// const martaParams = {
//     vardas: 'Marta',
//     veisle: 'kudakuojanti'
// }
// const marta = new Chicken(martaParams);

// // rex, tom, skraiduolisBird, marta


// console.log(rex.legs);
// console.log(tom.legs);
// console.log(skraiduolisBird.wings);
// console.log(marta.wings);