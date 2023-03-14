let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.toggleRead = function() {
  this.read = !this.read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayBooks() {
  const tbody = document.querySelector("#book-table tbody");
  tbody.innerHTML = "";
  myLibrary.sort((a, b) => {
    const authorA = a.author.toLowerCase();
    const authorB = b.author.toLowerCase();
    if (authorA < authorB) {
      return -1;
    } else if (authorA > authorB) {
      return 1;
    } else {
      return 0;
    }
  });
  myLibrary.forEach((book, index) => {
    const tr = document.createElement("tr");
    tr.setAttribute("data-index", index);
    tr.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.pages}</td>
      <td>${book.read ? "Yes" : "No"}</td>
      <td><button class="toggle-read-btn">${book.read ? "Not Read" : "Read"}</button></td>
      <td><button class="delete-book-btn">Delete</button></td>
    `;
    tbody.appendChild(tr);
  });
}

function showForm() {
  const formContainer = document.querySelector("#form-container");
  const newBookBtn = document.querySelector("#new-book-btn");
  formContainer.style.display = "block";
  newBookBtn.style.display = "none";
}

function hideForm() {
  const formContainer = document.querySelector("#form-container");
  const newBookBtn = document.querySelector("#new-book-btn");
  formContainer.style.display = "none";
  newBookBtn.style.display = "block";
  const form = document.querySelector("#add-book-form");
  form.reset();
}

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const title = form.title.value;
  const author = form.author.value;
  const pages = form.pages.value;
  const read = form.read.checked;
  const book = new Book(title, author, pages, read);
  addBookToLibrary(book);
  hideForm();
  displayBooks();
}


function handleTableClick(event) {
  const target = event.target;
  if (target.classList.contains("toggle-read-btn")) {
    const tr = target.closest("tr");
    const index = tr.getAttribute("data-index");
    const book = myLibrary[index];
    book.toggleRead();
    displayBooks();
  } else if (target.classList.contains("delete-book-btn")) {
    const tr = target.closest("tr");
    const index = tr.getAttribute("data-index");
    myLibrary.splice(index, 1);
    displayBooks();
  }
}
const newBookBtn = document.querySelector("#new-book-btn");
newBookBtn.addEventListener("click", showForm);


const form = document.querySelector("#add-book-form");
form.addEventListener("submit", handleSubmit);

const bookTable = document.querySelector("#book-table");
bookTable.addEventListener("click", handleTableClick);

addBookToLibrary(new Book("The Hobbit", "J.R.R. Tolkien", 295, true));
addBookToLibrary(new Book("To Kill a Mockingbird", "Harper Lee", 281, true));
addBookToLibrary(new Book("Siddhartha", "Hermann Hesse", 152, true));
addBookToLibrary(new Book("One Hundred Years of Solitude", "Gabriel García Márquez", 417, false));
addBookToLibrary(new Book("The Master and Margarita", "Mikhail Bulgakov", 363, true));
addBookToLibrary(new Book("The Catcher in the Rye", "J.D. Salinger", 277, true));
addBookToLibrary(new Book("Cat's Cradle", "Kurt Vonnegut", 179, true));
addBookToLibrary(new Book("Ficciones", "Jorge Luis Borges", 174, false));
addBookToLibrary(new Book("The Trial", "Franz Kafka", 315, false));
addBookToLibrary(new Book("A Clockwork Orange", "Anthony Burgess", 192, false));
addBookToLibrary(new Book("The Aleph and Other Stories", "Jorge Luis Borges", 224, true));
addBookToLibrary(new Book("Rayuela", "Julio Cortázar", 726, false));
displayBooks();