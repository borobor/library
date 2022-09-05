const library = document.querySelector('.library');

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
