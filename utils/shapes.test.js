const Square = require('./generateSquare')
const Polygon = require('./generatePolygon')
const Circle = require('./generateCircle')


describe("square" , () => {
    it("code should generate square with color blue", () => {
        const obj = new Square();
        obj.addColor("blue");
        const result = obj.render();
        expect(result).toEqual(`<rect width="300" height="200" fill="blue" />`);
    })
});

describe("polygon" , () => {
    it("code should generate polygon with color blue", () => {
        const obj = new Polygon();
        obj.addColor("blue");
        const result = obj.render();
        expect(result).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="blue" />`);
    })
});

describe("circle" , () => {
    it("code should generate circle with color blue", () => {
        const obj = new Circle();
        obj.addColor("blue");
        const result = obj.render();
        expect(result).toEqual(`<circle cx="150" cy="100" r="80" fill="blue" />`);
    })
});

