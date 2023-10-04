const inquirer = require('inquirer');
const jest = require('jest');

//Classes

class Element {
    constructor(elementX, elementY, color) {
        this.elementX = elementX;
        this.elementY = elementY;
        this.color = color;
    }
}

class Circle extends Element {
    constructor(elementX, elementY, radius, color) {
        super(elementX, elementY, color);
        this.radius = radius;
    }
}

class Square extends Element {
    constructor(elementX, elementY, sideLength, cornerRoundness, color) {
        super(elementX, elementY, color);
        this.sideLength = sideLength;
        this.cornerRoundness = cornerRoundness;
    }
}

class Triangle extends Element {
    constructor(elementX, elementY, base, height, direction, color) {
        super(elementX, elementY, color);
        this.base = base;
        this.height = height;
        this.direction = direction;
    }
}

class Text extends Element {
    constructor(elementX, elementY, textAnchor, fontSize, color) {
        super(elementX, elementY, color)
        this.textAnchor = textAnchor;
        this.fontSize = fontSize;
    }
}