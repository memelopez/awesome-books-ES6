// /index.js

import Book from './modules/book.js';
import Store from './modules/store.js';
import UI from './modules/ui.js';

// Events:

// on content load
document.addEventListener('DOMContentLoaded', UI.displayBooks());

// on form submit
document.querySelector('#form').addEventListener('submit', (e) => {
  e.preventDefault();

  // gets values from inputs
  const titleI = document.querySelector('#title').value.trim();
  const authorI = document.querySelector('#author').value.trim();

  // validate empty strings
  if (titleI === '' || authorI === '') {
    // console.log('title and author must not be empty!');
  } else {
    const books = Store.getBooks();
    const book = new Book(titleI, authorI);
    books.push(book);
    Store.setBooks(books);
    UI.addBookToUI(book);
  }
  document.querySelector('#title').value = '';
  document.querySelector('#author').value = '';
});

// on remove btn click
document.querySelector('#bookList').addEventListener('click', (e) => {
  e.preventDefault();

  const classes = e.target.className;
  const classesArray = classes.split(' ');
  // console.log(classesArray);

  const ulList = document.querySelector('#bookList');
  const item2BeRemoved = e.target.parentElement;
  const nodes = Array.from(ulList.children);
  const index = nodes.indexOf(item2BeRemoved);

  if (classesArray.indexOf('rmv') !== -1) {
    const books = Store.getBooks();
    books.splice(index, 1);
    Store.setBooks(books);
    item2BeRemoved.remove();
  }
});

// on form nav link
document.querySelector('#listA').addEventListener('click', (e) => {
  e.preventDefault();

  UI.displayList();
});

// on form nav link
document.querySelector('#formA').addEventListener('click', (e) => {
  e.preventDefault();

  UI.displayForm();
});

// on contact nav link
document.querySelector('#contactA').addEventListener('click', (e) => {
  e.preventDefault();

  UI.displayContact();
});
