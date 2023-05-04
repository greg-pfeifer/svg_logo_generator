const fs = require('fs')
const Circle = require('./utils/generateCircle')
const Polygon = require('./utils/generatePolygon')
const Square = require('./utils/generateSquare')
const inquirer = require('inquirer')

function logoGen({text, textcolor, shape, shapecolor}, shapeCont) {
    return `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shapeCont}
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textcolor}">${text}</text>
    </svg>
    `;
}

const questions = [
    {
        name: 'text',
        message: 'Please enter three characters'
    },
    {
        name: 'textcolor',
        message: 'Please enter the desired color of the characters'
    },
    {
        name: 'shape',
        type: 'checkbox',
        message: 'Select a shape (polygon = triangle)',
        choices: ['circle', 'polygon', 'square']
    },
    {
        name: 'shapecolor',
        message: 'Please enter the desired color of the shape'
    },
]

function init () {
    inquirer.prompt(questions)
        .then((questions) => {
            var shapeCont = ''


            
            if (questions.shape == 'circle') {
                const circle = new Circle()
                circle.addColor(questions.shapecolor)
                shapeCont = circle.render()

            } else if (questions.shape == 'polygon') {
                const polygon = new Polygon()
                polygon.addColor(questions.shapecolor)
                shapeCont = polygon.render()

            } else if (questions.shape == 'square') { 
                const square = new Square()
                square.addColor(questions.shapecolor)
                shapeCont = square.render()
            }
            const content = logoGen(questions, shapeCont)
            fs.writeFile('logo.svg', content, (err) => {
                if (err)
                return console.log(err)
            })
        })
}

init()