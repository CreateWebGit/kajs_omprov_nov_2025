// Fråga 3. (3p) Moduler 
// Använd ES6 moduler för att importera och exportera klasserna Book och Author, Book.js och Author.js.
// Skapa en tredje fil, main.js, där du importerar klasserna och skapar en författare och en lägger till minst två böcker till författaren.
// Skriv ut författarens böcker och information om böckerna, samt författarens namn

//importera klasserna och använd dem
import { Book, Author } from "./question2.js";

//skapa en författare
const author = new Author("J.R.R Tolkien");

//lägg till minst två böcker
author.addBook(new Book("The Fellowship of the Ring", author.name, 4.8));
author.addBook(new Book("The Two Towers", author.name, 4.6));
author.addBook(new Book("The Return of the King", author.name, 4.9));

//skriv ut författarens namn
console.log("Författare:", author.name);

//skriv ut författarens böcker + info
const list = author.listBooks();
console.log("Books:", list);

//rendera i dom, kommer inte ihåg om du redan har en html
const ul = document.getElementById("movieList");
ul.innerHTML = `
    <li><strong>${author.name}</strong></li>
    ${author
      .listBooks()
      .map((b) => `<li>${b}</li>`)
      .join("")}
`;
