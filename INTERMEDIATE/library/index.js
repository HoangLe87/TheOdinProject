
//a function that loops through the array and displays each book on the page

//Add a “NEW BOOK” button that brings up a form allowing users to input the details for the new book: author, title, number of pages, whether it’s been read

//Add a button on each book’s display to remove the book from the library.

//Add a button on each book’s display to change its read status.

window.addEventListener("load", ()=> {
    loadButton()
})

const loadButton = () => {
    document.getElementById("openAddBookBox").addEventListener("click", ()=>{
        document.getElementById("addBookScreen").classList.toggle("scaled");
    })
    document.getElementById("closeAddBook").addEventListener("click", ()=>{
        document.getElementById("addBookScreen").classList.toggle("scaled");
    })
}