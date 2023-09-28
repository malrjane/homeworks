
function parseCount(number) {
	let num = Number.parseFloat(number);
	if(isNaN(num)) {
		throw new Error("Невалидное значение");
	}
	return num;
}

function validateCount(number) {
	try {
		return parseCount(number);
	} catch (Error) {
			return Error;
	}
}



class Triangle {
	constructor(a, b, c) {
		this.a = a;
		this.b = b;
		this.c = c;
		if((this.a + this.b < this.c) || (this.a + this.c < this.b) || (this.c + this.b < this.a)) {
			throw new Error("Треугольник с такими сторонами не существует");
		}
	}
  
  // let p = 0;
	get perimeter() {
		let p = this.a + this.b + this.c
		return p;
	}

  // let p2 = p / 2;
	get area() {
		let p2 = this.perimeter / 2;
		return Number.parseFloat(Math.sqrt((p2 * (p2 - this.a) * (p2 - this.b) * (p2 - this.c))).toFixed(3));
	}
}

	function getTriangle(a, b, c) {
		try {
			return new Triangle(a, b, c);
		} catch(Error) {
			  return {
          get perimeter() {
					  return ("Ошибка! Треугольник не существует");
				  },
          get area() {
					  return ("Ошибка! Треугольник не существует");
				  },
				}
      }
	}
