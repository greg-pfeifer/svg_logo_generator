const fs = require('fs')
const generateCircle = require('./utils/generateCircle')
const generatePolygon = require('./utils/generatePolygon')
const generateSquare = require('./utils/generateSquare')
const inquirer = require('inquirer')

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
        message: 'Select a shape (polygon = triangle, rect = square)',
        choices: ['circle', 'polygon', 'rect']
    },
    {
        name: 'shapecolor',
        message: 'Please enter the desired color of the shape'
    },
]