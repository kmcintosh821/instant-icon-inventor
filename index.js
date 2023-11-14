const prompts = require('./questions.js').prompts();
const jest = require('jest');
const fs = require('fs');


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
    constructor(elementX, elementY, base, length, direction, color) {
        super(elementX, elementY, color);
        this.base = base;
        this.length = length;
        this.direction = direction;
    }
}

class Text extends Element {
    constructor(elementX, elementY, textContent, fontSize, fontFamily, color) {
        super(elementX, elementY, color)
        this.textContent = textContent;
        this.fontSize = fontSize;
        this.fontFamily = fontFamily;
    }
}

//First question affects what questions are asked in future prompts

async function collectData() {
    let shapeData;
    const polygon = await prompts.init();
    switch (polygon.shape) {
        case 'Circle':
            shapeData = await prompts.circle();
            break;
        case 'Square':
            shapeData = await prompts.square();
            break;
        case 'Triangle':
            shapeData = await prompts.triangle();
            break;
    };

    const generalData = await prompts.general();

    const data = {
        ...polygon,
        ...shapeData,
        ...generalData
    }
    compileData(data);
};

function compileData(data) {
    
    
}

collectData();