class Animal {
    constructor(params) {
        this.breed = params.veisle;
        this.name = params.vardas;
        this.sound = 'Bu...';
    }

    voice() {
        console.log(`${this.name}: ${this.sound}!`);
    }
}

export { Animal }