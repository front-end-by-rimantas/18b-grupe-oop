import { Pet } from './Pet.js';

class Cat extends Pet {
    constructor(params) {
        super(params);
        this.sound = 'Miau miau';
    }
}

export { Cat }