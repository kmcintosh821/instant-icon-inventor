const inquirer = require('inquirer');
const jest = require('jest');
const fs = require('fs');
const questions = require('./questions.json');


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

function initialPrompt() {
    inquirer.prompt([
        {
        name: 'shape',
        type: 'list',
        message: 'Please choose a shape for the icon.',
        choices: ['Circle', 'Square', 'Triangle']}
    ]).then((shape) => {
        console.log(shape);
        collectData(shape);
    });
};



function shapePrompts(shape) {
    let shapeData;
    switch(shape) {
        case 'Circle':
            shapeData = inquirer.prompt([
                {
                    name: 'base',
                    type: 'input',
                    message: questions.circleRadius
                }
            ]);
            break;
        case 'Square':
            shapeData = inquirer.prompt([
                {
                    name: 'base',
                    type: 'input',
                    message: questions.squareSide
                },
                {
                    name: 'corners',
                    type: 'input',
                    message: questions.squareCorners
                }
            ]);
            break;
        case 'Triangle':
            shapeData = inquirer.prompt([
                {
                    name: 'direction',
                    type: 'list',
                    message: questions.triangleDirection,
                    choices: ['left', 'up', 'down', 'right']
                },
                {
                    name: 'base',
                    type: 'input',
                    message: questions.triangleBase
                },
                {
                    name: 'length',
                    type: 'input',
                    message: questions.triangleLength
                }
            ]);
            break;
        default:
            break;
    }
    shapeData.polygon = shape;
    return shapeData;
};

function generalPrompts() {
    const generalData = inquirer.prompt([
        {
            name: 'shapeColor',
            type: 'input',
            message: questions.shapeColor
        },
        {
            name: 'textContent',
            type: 'input',
            message: questions.textContent
        },
        {
            name: 'textSize',
            type: 'input',
            message: questions.textSize
        },
        {
            name: 'textFamily',
            type: 'list',
            message: questions.textFamily,
            choices: ['serif', 'sans-serif', 'monospace']
        },
        {
            name: 'textColor',
            type: 'input',
            message: questions.textColor
        },
        {
            name: 'shapeCenter',
            type: 'input',
            message: questions.shapeCenter
        },
        {
            name: 'textCenter',
            type: 'input',
            message: questions.textCenter
        }
    ])
    return generalData;
}

async function collectData(shape) {
    //take values of shapeData
    //take values of generalData
    //combine into a single object
}