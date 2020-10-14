import { Animal } from './Animal.js';

class Pet extends Animal {
    constructor(params) {
        super(params);
        this.sound = 'Mau';

        this.color = params.spalva;
        this.gender = params.lytis ? 'female' : 'male';
        this.teeth = params.dantu || 0;
        this.speed = 0;
        this.legs = 4;
    }

    walk() {
        console.log(`${this.name} tepu tepu.`);
    }
}

export { Pet }