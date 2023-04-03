

function generateCircle(data) {
return `
    
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

<${data.shape} cx="150" cy="100" r="80" fill="${data.shapecolor}" />

<text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textcolor}">
${data.text}</text>

</svg>  

`;
}

module.exports = generateCircle;