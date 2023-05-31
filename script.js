let myLibrary= [];

function Book(title,author,pages,read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
}
Book.prototype.info = function(){
    return this.title + " ";
}
Book.prototype.toggleRead = function(){
    if(this.read === "yes"){
        this.read="no";
    }else{
        this.read="yes";
    }
}
function addBookToLibrary(book){
    myLibrary.push(book);
}
Object.getPrototypeOf(myLibrary).books = function(){
    let books = document.querySelector(".books");
    //console.log(books)
    books.textContent = "";
    let allTitles="";
    for (let [index] of myLibrary.entries()) {
            const element = myLibrary[index];
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
            
            const button = document.createElement("button");
            button.textContent="- Remove Book";
            button.value=index;
            button.classList.add("cardButton");
            button.addEventListener("click", removeFromLibrary);

            const readToggle = document.createElement("button");
            readToggle.textContent="Change Read";
            readToggle.value=index;
            readToggle.classList.add("cardButton");
            readToggle.addEventListener("click",() => toggleReadandUpdate(element));
            card.appendChild(button);
            card.appendChild(readToggle);
            books.appendChild(card);
    }
}
function toggleReadandUpdate(book){
    book.toggleRead();
    myLibrary.books();
}
function removeFromLibrary(e){
    let index = e.target.getAttribute("value");
    myLibrary.splice(index, 1);
    myLibrary.books();
}
const book1 = new Book("titlos 1","syggrafeas 1",256,"yes");
const book2 = new Book("titlos 2","syggrafeas 2",356,"no");
addBookToLibrary(book1);
addBookToLibrary(book2);
myLibrary.books();


const modal = document.getElementById("modal");
const openBtn = document.getElementsByClassName("button-add");
const span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
}
function showModal(){
    modal.style.display = "block";
}
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}


const formAdd= document.getElementById("add-book");

formAdd.addEventListener("submit", populateLibrary,false);
function populateLibrary(event){
    event.preventDefault();
    console.log("asd");
    const title =document.getElementById("title");
    const author=document.getElementById("author");
    const pages=document.getElementById("pages");
    const read=document.getElementById("read");
    console.log(read);
    let book;
    if(read.value === "yes"){
        book = new Book(title.value,author.value,pages.value,read.value);
    }else{
        book = new Book(title.value,author.value,pages.value,"no");
    }
    addBookToLibrary(book);
    myLibrary.books();
    modal.style.display = "none";
    formAdd.reset();
}
