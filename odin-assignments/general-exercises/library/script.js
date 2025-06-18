const myLibrary = [];

function Book(title, author){
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
}

// onload event must occur first before any other event listener because the dom has 
// not been created yet before the other event listeners are trying to access specific elements

window.addEventListener('load', ()=>{
    // document selectors
    const openModal = document.querySelector(`.open-button`);
    const closeModal = document.querySelector(`.close-button`);
    const modal = document.querySelector(`.modal`);
    const submit = document.querySelector('.submit');
    const title = document.querySelector('#title');
    const author = document.querySelector('#author');

    // preloaded books
    addBookToLibrary("Harry Potter", "JK Rowling");
    addBookToLibrary("The Hobbit", "I dunno");
    addBookToLibrary("No Game No Life", "Japanese Person");

    displayLibrary();

    // event handlers
    openModal.addEventListener('click', ()=>{
        modal.showModal();
        title.value = "";
        author.value = "";
    });
    submit.addEventListener('click', ()=>{


        if(title.value != '' && author.value != ''){
            addBookToLibrary(title.value, author.value);
        }
        else{
            window.alert("Please input a title and an author");
        }

        displayLibrary();
    });
    closeModal.addEventListener('click', ()=>{
        modal.close();
    });
});

// functions
function addBookToLibrary(title, author){
    let newBook = new Book(title, author);
    myLibrary.push(newBook);
}

function displayLibrary(){
    const library = document.querySelector(".cards.container");
    library.textContent = "";

    myLibrary.forEach((book, index) => {
        const newBook = document.createElement("div");
        const newTitle = document.createElement('div'); 
        const newAuthor = document.createElement('div'); 
        const newID = document.createElement('div');

        newBook.classList.add(`book${index+1}`);
        newTitle.classList.add(`title`);
        newAuthor.classList.add(`author`);
        newID.classList.add(`id`);

        newID.textContent = `ID: ${book.id}`
        newTitle.textContent = `Title: ${book.title}`
        newAuthor.textContent = `Author: ${book.author}`
        newBook.appendChild(newID);
        newBook.appendChild(newTitle);
        newBook.appendChild(newAuthor);
        library.appendChild(newBook);
    });
}