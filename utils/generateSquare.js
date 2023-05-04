
class Square {
    constructor() {
        this.text = ''
    }
    addColor(shapecolor) {
        this.text = 
        `
        <rect width="300" height="200" fill="${shapecolor}" />
        `;
    }
    render() {
        return this.text
    }
}

module.exports = Square












// function generateSquare(data) {
//     return `
        
//     <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
//     <${data.shape} width="200" height="200" fill="${data.shapecolor}" />
    
//     <text x="100" y="125" font-size="60" text-anchor="middle" fill="${data.textcolor}">
//     ${data.text}</text>
    
//     </svg>  
    
//     `;
//     }
    
//     module.exports = generateSquare;