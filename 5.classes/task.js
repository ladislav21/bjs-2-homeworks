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

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }
    
    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        for (let book of this.books) {
            if(book[type] === value) {
                return book;
            }
        }
        return null;
    }

    giveBookByName(bookName) {
        for (let book of this.books) {
            if(book.name === bookName) {
                this.books = this.books.filter((book) => book.name != bookName);
                return book;
            }
        }
        return null;
    }
}

class Student {
    constructor(name) {
        this.name = name;
        this.marks = {};
    }

    addMark(mark, subject) {
        if(mark >= 2 && mark <= 5) {
            if(this.marks.hasOwnProperty(subject)) {
                this.marks[subject].push(mark);
            } else {
                this.marks[subject] = [mark];
            }
        }
    }

    getAverageBySubject(subject) {
        return this.marks.hasOwnProperty(subject) ? this.marks[subject].reduce((acc, mark) => acc + mark, 0) / this.marks[subject].length :  0;
    }

    getAverage() {
        let subjects = Object.keys(this.marks);
        let sumOfAverageMarks = 0;
        for (let subject of Object.keys(this.marks)) {
            sumOfAverageMarks += this.getAverageBySubject(subject);            
        }
        return sumOfAverageMarks > 0 ? sumOfAverageMarks / subjects.length : 0; 
    }
}