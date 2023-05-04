class Square {
  constructor() {
      this.text = "";
  }
  addColor(shapecolor) {
      this.text = `<rect width="300" height="200" fill="${shapecolor}" />`;
  }
  render() {
      return this.text;
  }
}

module.exports = Square;