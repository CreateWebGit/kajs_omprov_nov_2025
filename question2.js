// Fråga 2. (4p) OOP & Javascript
// Du ska skapa två klasser med ES6 syntax, Book och Author.

// Book ska ha följande egenskaper:
// title, author, rating
// och metoden displayBook som visar information om boken

// Author ska ha följande egenskaper:
// name, 
// books (en array med böcker som är tom från början)
// och metoden
// addBook som lägger till en bok till författarens lista
// listBooks som visar en lista på författarens böcker

// ES6-klass: Book
export class Book {
  constructor(title, author, rating) {
    this.title = title;
    this.author = author;
    this.rating = rating;
  }

  displayBook() {
    return `${this.title} – ${this.author} (${this.rating}/5)`;
  }
}

// ES6-klass: Author
export class Author {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  listBooks() {
    return this.books.map((b) => b.displayBook());
  }
}
