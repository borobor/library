const library = document.querySelector('.library');
const addBook = document.querySelector('.add');
const sidebar = document.querySelector('.sidebar');

let myLibrary = [];

function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = 'Pages: ' + pages;
	this.read = read;
}

let android = new Book('Do Androids Dream of Electric Sheep', 'Philip K. Dick', 150, true);

myLibrary.push(android);

function createBookCard() {
	while (library.firstChild) {
		library.removeChild(library.lastChild);
	}
	let index = 0;
	myLibrary.forEach(book => {
		const bookItem = document.createElement('div');
		library.appendChild(bookItem);
		bookItem.classList.add('card');

		Object.values(book).forEach(value => {
			const bookData = document.createElement('p');
			bookItem.appendChild(bookData);
			bookData.textContent = value;
		})

		if (myLibrary[index].read == true) {
			bookItem.classList.add('readTrue');
		}

		readStatusButton = document.createElement('button');
		readStatusButton.classList.add('readBtn');
		readStatusButton.textContent = 'Change read status';
		bookItem.appendChild(readStatusButton);
		readStatusButton.setAttribute('data-index', index);
		readStatusButton.addEventListener('click', changeReadStatus);

		deleteButton = document.createElement('button');
		deleteButton.classList.add('delete')
		deleteButton.textContent = '❌';
		bookItem.appendChild(deleteButton);

		deleteButton.setAttribute('data-index', index);
		deleteButton.addEventListener('click', deleteBook);
		index++;		
	})
}

createBookCard();

addBook.addEventListener("click", createForm)

function createForm() {
	if (sidebar.childElementCount != 1) return;

	form = document.createElement('form');
	
	const formTitle = document.createElement('input');
	formTitle.setAttribute('type', 'text');
	formTitle.setAttribute('id', 'title');
	formTitle.setAttribute('required', 'true');
	formTitle.setAttribute('placeholder', 'Book title');
	
	const formAuthor = document.createElement('input');
	formAuthor.setAttribute('type', 'text');
	formAuthor.setAttribute('id', 'author');
	formAuthor.setAttribute('required', 'true');
	formAuthor.setAttribute('placeholder', 'Book author');

	const readContainer = document.createElement('div');

	const formPages = document.createElement('input');
	formPages.setAttribute('type', 'number');
	formPages.setAttribute('id', 'pages');
	formPages.setAttribute('placeholder', '99');
	
	const formRead = document.createElement('input');
	const readLabel = document.createElement('label');
	readLabel.textContent = 'Have you read it?';
	readLabel.setAttribute('for', 'read');
	formRead.setAttribute('type', 'checkbox');
	formRead.setAttribute('id', 'read');


	const submitButton = document.createElement('button');
	submitButton.setAttribute('type', 'submit');
	submitButton.textContent = 'Submit';

	readContainer.appendChild(readLabel);
	readContainer.appendChild(formRead);

	form.appendChild(formTitle);
	form.appendChild(formAuthor);
	form.appendChild(formPages);
	form.appendChild(readContainer);
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
	createBookCard();
}

function deleteBook(event) {
	let index = event.target.getAttribute('data-index');
	myLibrary.splice(index, 1);
	createBookCard();
}

function changeReadStatus(event) {
	let index = event.target.getAttribute('data-index');
	if (myLibrary[index].read == true) {
	  (myLibrary[index].read = false);
	} else {
		(myLibrary[index].read = true);
	}
		
	createBookCard();
}
