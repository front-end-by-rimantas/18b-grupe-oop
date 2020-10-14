import { Group } from './Group.js';

const roxettai = new Group('Roxettai');
const dev18b = new Group('DEV 18b');

// roxettai.addMember('Marie');
// roxettai.addMember('Per');


dev18b.addMember('Antanas');
dev18b.addMember('Maryte');
dev18b.addMember('Rex');

dev18b.updateRep();
console.log(dev18b.representative);









/*
KLASE/GRUPE:
- pavadinima (privalomas)
- seniunas
- zmoniu sarasas
- addMember()
- pasalintiNari()
- pakeistiSeniuna()
*/

/*
AUTO:
- pavadinima
- spalva
- varyklio tipas
- kuro talpa
- kuro sanaudos
- perdazymas()
- uzkurti()
- uzgesinti()
- uzpiltiKuro()
*/

/*
RADIJAS:
- pavadinimas
- spalva
- bangu diapazonas
- esamas daznis
- turi antena: true/false
- ijungti()
- isjungti()
- pakeistiStoti()
*/

/*
SUO:
- veisle
- vardas
- spalva
- lytis
- greitis
- lojimas()
- uodegosVizginimas()
- begti()
*/