
class Polygon {
    constructor() {
        this.text = ''
    }
    addColor(shapecolor) {
        this.text = `
        <polygon points="150, 25 250, 150 50, 150" fill="${shapecolor}" />
        `;
    }
    render() {
        return this.text
    }
}

module.exports = Polygon


{/* <polygon points="150, 18 244, 182 56, 182" fill="${shapecolor}" /> */}

