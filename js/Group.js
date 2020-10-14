class Group {
    constructor(pavadinimas) {
        this.name = pavadinimas;
        this.representative = null;
        this.members = [];
    }

    addMember(vardas) {
        this.members.push(vardas);
    }

    removeMember(vardas) {
        let likeNariai = [];
        for (let i = 0; i < this.members.length; i++) {
            if (this.members[i] !== vardas) {
                likeNariai.push(this.members[i]);
            }
        }
        this.members = likeNariai;
    }

    updateRep() {
        const index = Math.floor(Math.random() * this.members.length);
        this.representative = this.members[index];
    }
}

export { Group }