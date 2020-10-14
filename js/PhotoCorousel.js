class PhotoCorousel {
    constructor(params) {
        this.selector = params.selector;
        this.DOM = null;
        this.photos = params.photos || [];
    }

    isValidSelector() {
        const DOM = document.querySelector(this.selector);
        if (!DOM) {
            console.error(`ERROR: nerasta vieta pagal nurodyta selectoriu ${this.selector}`);
            return false;
        }
        this.DOM = DOM;
        return true;
    }

    render() {
        // kur?
        if (!this.isValidSelector()) {
            return;
        }

        // ka?
        let HTML = '';
        for (let img of this.photos) {
            HTML += `<img src="./${img}" alt="Photo" />`;
        }

        // action
        this.DOM.innerHTML = HTML;
    }
}

const corousel = new PhotoCorousel({
    selector: '#phonto',
    photos: ['pic1.jpg', 'pic2.jpg']
});

corousel.render();