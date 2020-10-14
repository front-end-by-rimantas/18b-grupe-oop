import { Animal } from './Animal.js';

class Bird extends Animal {
    constructor(params) {
        super(params);
        this.sound = 'Ciulbu ulbu';
        this.wings = 2;
    }
}

export { Bird }