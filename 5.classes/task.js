class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}

	fix() {
		this.state = this.state * 1.5;
	}

	set state(number) {
		if(number < 0) {
			 this._state = 0;
			 return;
		} else if (number > 100) {
    	this._state = 100;
    	return;
		} else {
			this._state = number;
			return;
		}
	}

	get state() {
		return this._state; 
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = "book";
	}
}

class NovelBook extends Book {
  constructor(name, releaseDate, pagesCount) {
  	super(name, releaseDate, pagesCount);
  	this.type = "novel";
  }
}

class FantasticBook extends Book {
	constructor(name, releaseDate, pagesCount) {
  	super(name, releaseDate, pagesCount);
  	this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(name, releaseDate, pagesCount) {
  	super(name, releaseDate, pagesCount);
  	this.type = "detective";
  }
}


class Library {
	constructor(name, books) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {
    if(book.state > 30) {
      this.books.push(book);
      return;
    }
	}

	findBookBy(type, value) {
		let result;
		for(let i = 0; i < this.books.length; i++) {
			if(this.books[i][type] === value) {
			  return result = this.books[i];
		  } else {
			  result = null;
		  }
	  }
	  return result;
	}

	giveBookByName(bookName) {
		let res = null;
		for(let i = 0; i < this.books.length; i++) {
			if(this.books[i].name === bookName) {
			 return this.books.splice(i,1)[0];
			} 
		}

		return res;
	
	}
}
