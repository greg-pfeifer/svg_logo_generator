

function generatePolygon(data) {
    return `
        
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
    <${data.shape} points="150, 18 244, 182 56, 182" fill="${data.shapecolor}" />
    
    <text x="150" y="125" font-size="430" text-anchor="middle" fill="${data.textcolor}">
    ${data.text}</text>
    
    </svg>  
    
    `;
    }
     
    module.exports = generatePolygon;