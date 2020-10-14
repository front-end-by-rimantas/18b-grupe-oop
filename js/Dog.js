import { Pet } from './Pet.js';

class Dog extends Pet {
    constructor(params) {
        super(params);
        this.sound = 'Au au';
    }
}

export { Dog }