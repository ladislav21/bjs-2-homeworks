class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state *= 1.5;
    }

    set state(value) {
        if (value >= 100) {
            this._state = 100;
        } else if (value <= 0) {
            this._state = 0;
        } else {
            this._state = value;
        }
    }
    
    get state() {
        return this._state;
    } 
}

class Magazine extends PrintEditionItem {
    constructor(...args) {
        super(...args);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, ...args) {
        super(...args);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(...args) {
        super(...args);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(...args) {
        super(...args);
        this.type = "fantastic";
    }
} 

class DetectiveBook extends Book {
    constructor(...args) {
        super(...args);
        this.type = "detective";
    }
}