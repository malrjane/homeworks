class Student {
	constructor(name, gender, age, marks) { 
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = {};
  }

  addMark(mark, subject) {
  	if((mark < 2) && (mark > 5)) {
  		break;
  	} else {
  		this.marks.subject = subbject.mark;
  	} 
  	if(!(subject in this.marks)) {
      this.marks.subject = [];
  	} else {
  		this.marks.subject = subbject.mark;
  	}
  }

  getAverageBySubject(subject) {
  	if(!(subject in this)) {
			return 0;
		} else {
      let sum = 0;
			for(let mark of this.marks) { 
			sum = sum + mark;
		  }
		  return sum / this.marks.length;
		}
  }
}

// Student.prototype.setSubject = function (subjectName) {
//     this.subject = subjectName;
// }

// Student.prototype.addMarks = function (...marks) {
//     if("marks" in this) {
//       this.marks.push(...marks);
//     };
// }

Student.prototype.getAverage = function () {
		if(!("marks" in this) || (this.marks.length === 0)) {
			return 0;
		} else {
      let sum = 0;
			for(let mark of this.marks) { 
			sum = sum + mark;
		  }
		  return sum / this.marks.length;
		}
}

Student.prototype.exclude = function (reason) {
  	delete this.subject;
  	delete this.marks;
  	this.excluded = reason;
}
