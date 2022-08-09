// Задание 1

function parseCount(num) {
    const a = Number.parseInt(num);
    if (isNaN(a)) {
        throw new Error (`Невалидное значение`);
    }
    return a;
}

function validateCount(notNum) {
    try {
        return parseCount(notNum);
    }
    catch(err) {
        console.log (`Невалидное значение`, err);
        return err;
    };
}

// Задание 2

class Triangle {
    constructor (a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if (a + b < c || c + b < a || a + c < b) {
            throw new Error ("Треугольник с такими сторонами не существует")
        }
    }

    getPerimeter() {
        return this.a + this.b + this.c;
    }

    getArea() {
        let halfP = this.getPerimeter() / 2;
        let s = Number(Math.sqrt(halfP * (halfP - this.a) * (halfP - this.b) * (halfP - this.c)).toFixed(3));
        return s;
    }
}

function getTriangle(along, blong, clong) {
    try {
        return new Triangle (along, blong, clong);
    }
    catch(err) {
        return {
            getArea: () =>  "Ошибка! Треугольник не существует",
            getPerimeter: () =>  "Ошибка! Треугольник не существует"
          };
    }
}