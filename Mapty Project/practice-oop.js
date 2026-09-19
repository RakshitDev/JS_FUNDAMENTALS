"use strict";

/*
  PRACTICE: Classes, Inheritance, Object Creation
  Theme: Library System (same pattern as Mapty's Workout/Running/Cycling/App)

  Structure to build, mirroring script.js:
    Book        <-- like Workout (base class)
      EBook     <-- like Running (extends Book)
      PrintBook <-- like Cycling (extends Book)
    Library     <-- like App (creates and manages instances)

  Fill in every TODO. Don't look at script.js while you do it —
  try to recall the pattern from memory first, then compare after.
*/

// ============================
// 1. BASE CLASS
// ============================
class Book {
  // TODO: add a public class field `id` that auto-generates a value
  //       (in Mapty, Workout did: id = (new Date() + '').slice(-10))
  // TODO: add a public class field `dateAdded` = new Date()
  id = Math.random(new Date());
  dateAdded = new Date();

  constructor(title, author, pages) {
    // TODO: assign title, author, pages to `this`
    this.title = title;
    this.author = author;
    this.pages = pages;
  }

  // TODO: add a method `getSummary()` that returns a string like:
  //       "'1984' by George Orwell (328 pages)"
  _getSummary() {
    return `${this.dateAdded} by ${this.author} {this.pages}`;
  }
}

// ============================
// 2. SUBCLASS #1
// ============================
class EBook extends Book {
  constructor(title, author, pages, fileSizeMB) {
    // TODO: call super() with the shared properties
    // TODO: assign fileSizeMB to `this`
    // TODO: call a method to compute something derived, e.g. this.calDownloadTime()
    super(title, author, pages);
    this.fileSizeMB = fileSizeMB;
    this._calDownloade();
  }

  // TODO: add a method `calDownloadTime()` that computes and returns
  //       something like (fileSizeMB / 5) and stores it on `this.downloadMinutes`
  //       (mirrors how Running.calpace() computed & stored this.pace)

  _calDownloade() {
    return `${this.fileSizeMB / 5} and store it on time`;
  }
}

// ============================
// 3. SUBCLASS #2
// ============================
class PrintBook extends Book {
  constructor(title, author, pages, stock) {
    // TODO: call super()
    // TODO: assign stock (number of physical copies) to `this`

    super(title, author, pages, stock);
    this.stock = stock;
  }

  // TODO: add a method `isAvailable()` that returns true if stock > 0
  _isAvailable() {
    return this.stock > 0;
  }
}

// ============================
// 4. MANAGER CLASS (like App)
// ============================
class Library {
  // TODO: add a PRIVATE field `#books` initialized to an empty array
  //       (private fields use the # prefix, like App's #workouts)
  #books = [];

  constructor() {
    // nothing needed yet — just here for structure
  }

  // TODO: add method `addBook(type, title, author, pages, extra)`
  //   - if type === 'ebook', create a `new EBook(...)` (extra = fileSizeMB)
  //   - if type === 'print', create a `new PrintBook(...)` (extra = stock)
  //   - push the created object into #books
  //   - return the created object

  _addBook(type, title, author, pages, extra) {
    let book;
    if (type === "ebook") {
      book = new EBook(title, author, pages, extra);
    }
    if (type === "print") {
      book = new PrintBook(title, author, pages, extra);
    }
    this.#books.push(book);
    return book;
  }

  // TODO: add method `listBooks()` that logs getSummary() for every book
  listBooks() {
    this.#books.forEach((book) => console.log(book._getSummary()));
  }

  // TODO: add method `findBookById(id)` that returns the matching book
  //       from #books, or undefined if not found
  findBookById(id) {
    return this.#books.find((book) => book.id === id);
  }
}

// ============================
// 5. TRY IT OUT
// ============================
const myLibrary = new Library();

// TODO: add one EBook and one PrintBook via myLibrary.addBook(...)
// const ebook = new Book("atomic habits", "james", "220", 1);
// const print = new Book("omic habits", "james", "220", 1);

// myLibrary._addBook(ebook);
// myLibrary._addBook(print);
// // TODO: call myLibrary.listBooks()
// myLibrary.listBooks();
// // TODO: grab one book's id and call myLibrary.findBookById(id), log the result

myLibrary._addBook("ebook", "Atomic Habits", "James Clear", 320, 15);
myLibrary._addBook("print", "1984", "George Orwell", 328, 4);

myLibrary.listBooks();

const firstBook = myLibrary._addBook("print", "Dune", "Frank Herbert", 412, 2);
// console.log(myLibrary.findBookById(firstBook.id));

const secondtBook = myLibrary._addBook(
  "ebook",
  "Atomic Habbit",
  "Frank Herbert",
  412,
  2,
);
console.log(myLibrary.findBookById(secondtBook.id));

// Once this runs without errors and logs sensible output, you're done.
// Ping me and I'll review it against the pattern.
