class PrintEditionItem {
    constructor (name, releaseDate, pagesCount, state, type) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
         this.state *= 1.5;
    }

    set state (value) {        
        if (value < 0) {
            this._state = 0;
        } else if (value > 100) {
            this._state = 100;
        } else {
        this._state = value; 
        }      
    }

    get state () {
        return this._state;
    }   
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state, type) {
        super(name, releaseDate, pagesCount);
        this.type = 'magazine';
  }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super(name, releaseDate, pagesCount, state);
        this.author = author;
        this.type = 'book';
  }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super(author, name, releaseDate, pagesCount, state);
        this.type = 'novel';
  }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super(author, name, releaseDate, pagesCount, state);
        this.type = 'fantastic';
  }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super(author, name, releaseDate, pagesCount, state);
        this.type = 'detective';
  }
}

//Задание 2

class Library {
    constructor (name, books) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        this.book = book;
        if (book.state > 30) {
            this.books.push(book);
        }
    }
    
    findBookBy(type, value) {
        let result = this.books.filter((book) => book[type] === value);
      if (result.length === 0) {
          return null;
      } else {
      return result[0];
      }
    }

    giveBookByName(bookName) {
        let result = this.books.filter((book) => book.name === bookName)[0];       
        if (result === undefined) {
            return null;
        } else {
            let num = this.books.indexOf(result);
            this.books.splice(num, 1);
            return result;
        }
    }
}

// Задание 3 

class Student {
    constructor (name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.marks = {};
    }

    addMark(mark, subject) {
        if ((1 <= mark && mark <= 5) && (typeof mark === 'number')) {
            if (this.marks.hasOwnProperty(subject) === false) {
                this.marks[subject] = [];
                this.marks[subject].push(mark);
            } else {
                this.marks[subject].push(mark);
            }
        } else {
            console.log(`Ошибка, оценка должна быть числом от 1 до 5`);
        };
    };

    getAverageBySubject(subject) {
        if (this.marks.hasOwnProperty(subject) === false) {
            console.log(`Несуществующий предмет`);
            return 0;
        } else {
            const sum = this.marks[subject].reduce(function(item, value) {
                return item + value;
            });
            console.log(`Средний балл по предмету ${subject} ${sum / this.marks[subject].length}`);
            return sum / this.marks[subject].length;
        };
    };

    getAverage() {
        if (Object.keys(this.marks).length > 0) {
            let sum = 0;
            for (let key in this.marks) {
                let value = this.getAverageBySubject(key);
                sum += value;
            };
            console.log(`Средний балл по всем предметам ${sum / Object.keys(this.marks).length}`);
            return sum / Object.keys(this.marks).length;
        } else {
            return 0;
        };
    };

    exclude(reason) {
        delete this.subject;
        delete this.marks;
        this.excluded = reason;
    };
};

const student = new Student("Олег Никифоров");
student.addMark(5, "algebra");
student.addMark(5, "algebra");
student.addMark(5, "geometry");
student.addMark(4, "geometry");
student.addMark(6, "geometry"); // "Ошибка, оценка должна быть числом от 1 до 5"
student.getAverageBySubject("geometry"); // Средний балл по предмету geometry 4.5
student.getAverageBySubject("biology"); // Несуществующий предмет
student.getAverage(); // Средний балл по всем предметам 4.75
student.exclude("Исключен за попытку подделать оценки");