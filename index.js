class Polygon {
    constructor(sides) {
      this.sides = sides;
    }
  
    get countSides() {
      return this.sides.length;
    }
  
    get perimeter() {
      return this.sides.reduce((acc, side) => acc + side, 0);
    }
  }
  
  class Triangle extends Polygon {
    get isValid() {
      const [a, b, c] = this.sides;
      return a + b > c && a + c > b && b + c > a;
    }
  }
  
  class Square extends Polygon {
    get isValid() {
      return this.sides.every(side => side === this.sides[0]);
    }
  
    get area() {
      return this.sides[0] ** 2;
    }
  }
  
  // Example usage:
  const triangle = new Triangle([3, 4, 5]);
  console.log("Is triangle valid?", triangle.isValid); // true
  console.log("Triangle perimeter:", triangle.perimeter); // 12
  
  const square = new Square([4, 4, 4, 4]);
  console.log("Is square valid?", square.isValid); // true
  console.log("Square perimeter:", square.perimeter); // 16
  console.log("Square area:", square.area); // 16
  