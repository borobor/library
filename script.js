const library = document.querySelector('.library');
const addBook = document.querySelector('.add');
const sidebar = document.querySelector('.sidebar');

let myLibrary = [];

function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}

let android = new Book('Do Androids Dream of Electric Sheep', 'Philip K. Dick', 150, true);

myLibrary.push(android);

function addBookToLibrary() {
	while (library.firstChild) {
		library.removeChild(library.lastChild);
	}
	myLibrary.forEach(book => {
		const bookItem = document.createElement('div');
		library.appendChild(bookItem);
		bookItem.classList.add('card')
		Object.values(book).forEach(value => {
			const bookData = document.createElement('p');
			bookItem.appendChild(bookData);
			bookData.textContent = value;
		})
	})
}

addBookToLibrary();

addBook.addEventListener("click", createForm)

function createForm() {
	form = document.createElement('form');
	
	const formTitle = document.createElement('input');
	formTitle.setAttribute('type', 'text');
	formTitle.setAttribute('ID', 'title');
	formTitle.setAttribute('placeholder', 'Book title');
	
	const formAuthor = document.createElement('input');
	formAuthor.setAttribute('type', 'text');
	formAuthor.setAttribute('ID', 'author');
	formAuthor.setAttribute('placeholder', 'Book author');

	const formPages = document.createElement('input');
	formPages.setAttribute('type', 'number');
	formPages.setAttribute('ID', 'pages');
	formPages.setAttribute('placeholder', '99');
	
	const formRead = document.createElement('input');
	formRead.setAttribute('type', 'checkbox');
	formRead.setAttribute('ID', 'read');


	const submitButton = document.createElement('button');
	submitButton.setAttribute('type', 'submit');
	submitButton.textContent = 'Submit'

	form.appendChild(formTitle);
	form.appendChild(formAuthor);
	form.appendChild(formPages);
	form.appendChild(formRead);
	form.appendChild(submitButton);
	sidebar.appendChild(form);

}

document.addEventListener('submit', submitBook);

function submitBook(event) {
	event.preventDefault();
	let title = document.getElementById('title').value;
	let author = document.getElementById('author').value;
	let pages = document.getElementById('pages').value;
	let read = document.getElementById('read').checked;

	myLibrary.push(new Book(title, author, pages, read));

addBookToLibrary();
}
