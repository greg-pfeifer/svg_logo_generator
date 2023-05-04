class Circle {
    constructor() {
        this.text = "";
    }
    addColor(shapecolor) {
        this.text = `
        <circle cx="150" cy="100" r="80" fill="${shapecolor}" 
        />`;
    }
    render() {
        return this.text;
    }
  }
  
  module.exports = Circle;