function parseCount(number) {
    let result = Number.parseFloat(number);
    if (Number.isNaN(result)) {
        throw new Error("Невалидное значение");
    }
    return result;
}

function validateCount(number) {
    try {
        return parseCount(number);
    } catch(err) {
        return err;
    }
}

class Triangle {
    constructor(a, b, c) {
        if (a + b < c || a + c < b || b + c < a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }

        this.a = a;
        this.b = b;
        this.c = c;
    }

    get perimeter() {
        return (this.a + this.b + this.c);
    }

    get area() {
        let p = (this.a + this.b + this.c) / 2;
        return Number((Math.pow((p * (p - this.a) * (p - this.b) * (p - this.c)), (0.5))).toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (err) {
        return {
            get area() {
                return "Ошибка! Треугольник не существует"
            },
            get perimeter() {
                return "Ошибка! Треугольник не существует"
            },
        }
    }
}