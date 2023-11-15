class Element {
    constructor(color) {
        this.color = color;
    }
}

class Circle extends Element {
    constructor(radius, color) {
        super(color);
        this.radius = radius;
    }

    render() {
        return `<circle cx="150" cy="100" r="${this.radius}" fill="${this.color}"/>`
    }
}

class Square extends Element {
    constructor(sideLength, cornerRoundness, color) {
        super(color);
        this.sideLength = sideLength;
        this.cornerRoundness = cornerRoundness;
    }

    render() {
        return `<rect x="150" y="100" rx="${this.cornerRoundness}" ry="${this.cornerRoundness}" width="${this.sideLength}" height="${this.color}" fill="${this.color}"/>`
    }
    
}

class Triangle extends Element {
    constructor(base, length, direction, color) {
        super(color);
        this.base = base;
        this.length = length;
        this.direction = direction;
    }

    render() {
        let bDist = (this.base / 2);
        let lDist = (this.length / 2);
        let cornerLX, cornerLY, cornerRX, cornerRY, peakX, peakY
        switch (this.direction) {
            case 'up':
                cornerLX = -bDist + 150;
                cornerRX = bDist + 150;
                peakX = 150;
                cornerLY = cornerRY = -lDist + 100;
                peakY = lDist + 100;
                break;
            case 'down':
                cornerLX = -bDist + 150;
                cornerRX = bDist + 150;
                peakX = 150;
                cornerLY = cornerRY = lDist + 100;
                peakY = -lDist + 100;
                break;
            case 'left':
                cornerLY = -bDist + 100;
                cornerRY = bDist + 100;
                peakY = 100;
                cornerLX = cornerRX = lDist + 150;
                peakX = -lDist + 150;
                break;
            default:
            case 'right':
                cornerLY = -bDist + 100;
                cornerRY = bDist + 100;
                peakY = 100;
                cornerLX = cornerRX = -lDist + 150;
                peakX = lDist + 150;
                break;
        }
        
        return `<polygon points="${cornerLX},${cornerLY} ${cornerRX},${cornerRY} ${peakX},${peakY}" fill="${this.color}"/>`
    }
}

class Text extends Element {
    constructor(textContent, fontSize, fontFamily, color) {
        super(color)
        this.textContent = textContent;
        this.fontSize = fontSize;
        this.fontFamily = fontFamily;
    }

    render() {
        return `<text x="150" y="100" font-size="${this.fontSize}" text-anchor="middle" font-family="${this.fontFamily}" fill="${this.color}">${this.textContent}</text>`
    }
}

module.exports = { Circle, Square, Triangle, Text }