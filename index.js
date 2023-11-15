const prompts = require('./lib/questions.js').prompts();
const { Circle, Square, Triangle, Text } = require('./lib/shapes.js')
const fs = require('fs');


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
    let svgText = '';
    const shape = data.shape === 'Circle' ? new Circle(data.base, data.shapeColor) : data.shape === 'Square' ? new Square(data.base, data.corners, data.shapeColor) : new Triangle(data.base, data.length, data.direction, data.shapeColor);
    if (data.textContent.length > 0) {
        const text = new Text(data.textContent, data.textSize, data.textFamily, data.textColor)
        svgText += text.render();
    }

    const svgContent = `<svg version="1.1" width="300" height="200"> ${shape.render()} ${svgText}</svg>`

    fs.writeFile(`./logo.svg`, svgContent, (err) => {
        if (err) throw err;
        console.log('Logo generated!')
    })

    
    
}

collectData();