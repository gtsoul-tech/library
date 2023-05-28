let myLibrary= [];

function Book(title,author,pages,read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
}
Object.getPrototypeOf(Book).info = function(){
    return this.title + " ";
}
function addBookToLibrary(book){
    myLibrary.push(book);
}
Object.getPrototypeOf(myLibrary).books = function(){
    const books = document.querySelector(".books");
    console.log(books);
    let allTitles="";
    for (const book in myLibrary) {
        if (Object.hasOwnProperty.call(myLibrary, book)) {
            const element = myLibrary[book];
            const card = document.createElement("div");
            card.classList.add("card");
            
            const title = document.createElement("h1");
            title.textContent = "Title: " +element.title;
            card.appendChild(title);
            const author = document.createElement("p");
            author.textContent = "Author: " +element.author;
            card.appendChild(author);
            const pages = document.createElement("p");
            pages.textContent = "Pages: " +element.pages;
            card.appendChild(pages);
            const read= document.createElement("p");
            read.textContent = "Read: " +element.read;
            card.appendChild(read);
            
            books.appendChild(card);
        }
    }
}

const book1 = new Book("titlos 1","syggrafeas 1",256,"yes");
const book2 = new Book("titlos 2","syggrafeas 2",356,"no");
addBookToLibrary(book1);
addBookToLibrary(book2);
myLibrary.books();