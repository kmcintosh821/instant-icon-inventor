const inquirer = require('inquirer');

prompts = () => {
    return {
        init: () => {
            const question = [{
                name: 'shape',
                type: 'list',
                message: 'Please choose a shape for the icon.',
                choices: ['Circle', 'Square', 'Triangle']
            }];
            return inquirer.prompt(question);
        },
        
        circle: () => {
            const question = [{
                name: 'base',
                type: 'input',
                message: 'Please provide the radius of the circle, in pixels (max 100)'
            }];
            return inquirer.prompt(question);

        },

        square: () => {
            const questions = [
                {
                    name: 'base',
                    type: 'input',
                    message: 'Please provide the length of a side of the square, in pixels (max 200)'
                },
                {
                    name: 'corners',
                    type: 'input',
                    message: 'How round do you want the corners? (0% for sharp corners, recommend max of 20%)'
                }
            ];
            return inquirer.prompt(questions);
        },

        triangle: () => {
            const questions = [
                {
                    name: 'direction',
                    type: 'list',
                    message: 'Which direction will this triangle point?',
                    choices: ['left', 'up', 'down', 'right']
                },
                {
                    name: 'base',
                    type: 'input',
                    message: `Please provide the length of the triangle's base, in pixels (max 200)`
                },
                {
                    name: 'length',
                    type: 'input',
                    message: `What is the length of the triangle, from the base to the opposite point, in pixels? (max 200, or 'equilateral' or 'right')`
                }
            ];
            return inquirer.prompt(questions);
        },

        general: () => {
            const questions = [
                {
                    name: 'shapeColor',
                    type: 'input',
                    message: 'Please provide an icon color, using either hexadecimal or a color keyword.'
                },
                {
                    name: 'textContent',
                    type: 'input',
                    message: 'Please provide up to 3 letters or numbers to overlay. (If none, leave blank.)'
                },
                {
                    name: 'textSize',
                    type: 'input',
                    message: 'Please provide the text font size. (If none, leave blank.)'
                },
                {
                    name: 'textFamily',
                    type: 'list',
                    message: 'Please provide a font family. (If none, choose any answer.)',
                    choices: ['serif', 'sans-serif', 'monospace']
                },
                {
                    name: 'textColor',
                    type: 'input',
                    message: 'Please provide a text color, using either hexadecimal or a color keyword. (If none, leave blank.)'
                },
                {
                    name: 'shapeCenter',
                    type: 'input',
                    message: 'Where will the icon shape be centered? (x,y) (note that viewport is 300x200)'
                },
                {
                    name: 'textCenter',
                    type: 'input',
                    message: 'Where will the text be centered? (x,y) (Relative to viewport, not icon shape)'
                }
            ];
            return inquirer.prompt(questions)
        }
    }
}

module.exports = { prompts };