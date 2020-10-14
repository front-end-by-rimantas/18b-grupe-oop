import { Bird } from './Bird.js';

class Chicken extends Bird {
    constructor(params) {
        super(params);
        this.sound = 'Kud ku dak!';
    }
}

export { Chicken }