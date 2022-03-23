// /modules/ui.mjs - encapsulates all methods related to the user interface for this app

import Store from './store.js';
import { DateTime } from '../node_modules/luxon/src/luxon.js';

export default class UI {
  static addBookToUI(book) {
    const list = document.querySelector('#bookList');
    const item = document.createElement('li');
    item.className = 'listItem';
    const pBook = document.createElement('p');
    pBook.textContent = `"${book.title}" by ${book.author}`;
    const rmvBtn = document.createElement('button');
    rmvBtn.textContent = 'Remove';
    rmvBtn.className = 'rmv';

    item.appendChild(pBook);
    item.appendChild(rmvBtn);

    list.appendChild(item);
  }

  static displayBooks() {
    // display date
    this.displayLuxon();
    // display books
    const books = Store.getBooks();
    books.forEach((book) => this.addBookToUI(book));
  }

  static displayList() {
    const list = document.querySelector('.list');
    const form = document.querySelector('.addNew');
    const contact = document.querySelector('.contact');

    list.classList.remove('hide');
    form.classList.add('hide');
    contact.classList.add('hide');
  }

  static displayForm() {
    const list = document.querySelector('.list');
    const form = document.querySelector('.addNew');
    const contact = document.querySelector('.contact');

    list.classList.add('hide');
    form.classList.remove('hide');
    contact.classList.add('hide');
  }

  static displayContact() {
    const list = document.querySelector('.list');
    const form = document.querySelector('.addNew');
    const contact = document.querySelector('.contact');

    list.classList.add('hide');
    form.classList.add('hide');
    contact.classList.remove('hide');
  }

  static displayLuxon() {
    setInterval(() => {
      const now = DateTime.now();
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      const formatTime = (time) => (time < 10 ? `0${time}` : time);
      const dateText = `${months[now.month - 1]} ${now.day}th ${now.year}, ${formatTime(now.hour)}:${formatTime(now.minute)}:${formatTime(now.second)}`;
      const spanForDate = document.querySelector('#luxonDate');
      spanForDate.textContent = dateText;
    }, 1000);
  }
}