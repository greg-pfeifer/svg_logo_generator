class Polygon {
    constructor() {
        this.text = "";
    }
    addColor(shapecolor) {
        this.text = `<polygon points="150, 18 244, 182 56, 182" fill="${shapecolor}" />`;
    }
    render() {
        return this.text;
    }
  }
  
  module.exports = Polygon;



