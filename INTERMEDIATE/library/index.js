// library array
let myLibrary = [];

// the constructor
function Book(title, author, genre, rating, read) {
  this.title=title
  this.author=author
  this.genre=genre
  this.rating=rating
  this.read=read
}


// add book to the library by reading the form
function addBookToLibrary() {
    let inputTitle = document.getElementById("inputTitle").value
    let inputAuthor = document.getElementById("inputAuthor").value
    let inputGenre = document.getElementById("inputGenre").value
    let inputRating = document.getElementById("inputRating").value
    let inputRead = document.getElementById("inputRead").checked
    let newBook = new Book(inputTitle, inputAuthor, inputGenre, inputRating, inputRead)
    myLibrary.push(newBook)
    display()
}


//display library items
const display = () => {
    const main = document.getElementById("main")
    main.textContent=''
    myLibrary.forEach(element => {
        
        // create card elements
        let mainDiv = document.createElement('div')
        mainDiv.className='mainDiv'
        let div = document.createElement('div')
        div.className='card'
        let title = document.createElement('p')
        title.className='title'
        title.textContent=`${element.title}`
        let author = document.createElement('p')
        author.textContent=`${element.author}`
        let genre = document.createElement('p')
        genre.textContent=`${element.genre}`
        let rating = document.createElement('p')
        rating.textContent=`${element.rating}`
        let read = document.createElement('p')
        read.className='toggle'
        read.textContent=`${element.read?'Already read':'Not read yet'}`
        
        //user can change read/unread status if clicked on this
        read.addEventListener("click", ()=>{
            if (element.read) {
                element.read=false
                display()
            }
            else {
                element.read=true
                display()
            }
        })
        
        let deleteButton = document.createElement('p')
        deleteButton.className='deleteButton'
        deleteButton.textContent='delete'
        deleteButton.addEventListener("click", ()=> {
            let newArray = myLibrary.filter(i => i.title!=element.title)
            myLibrary = newArray.map(i=>i)
            display()
        })

        //append elements to the main div
        div.appendChild(title)
        div.appendChild(author)
        div.appendChild(genre)
        div.appendChild(rating)
        div.appendChild(read)
        div.appendChild(deleteButton)
        mainDiv.appendChild(div)
        main.appendChild(mainDiv)

        //change green or red on the card depending if the book is read/unread
        if (element.read) {
            div.classList.add("green")
            div.classList.remove("red")
        }
        else {
            div.classList.add("red")
            div.classList.remove("green")
        }
    });
}

// load and display upon document load
window.addEventListener("load", ()=> {
    loadButton()
    display()
})


// load buttons once DOM is created
const loadButton = () => {
    //open pop up
    const openAddBookBoxButton = document.getElementById("openAddBookBoxButton")
    openAddBookBoxButton.addEventListener("click", ()=>{
        document.getElementById("addBookScreen").classList.toggle("scaled");
        document.getElementById("addSign").classList.toggle("rotate");
    })
    //close pop up
    const closeAddBook = document.getElementById("closeAddBook")
    closeAddBook.addEventListener("click", ()=>{
        document.getElementById("addBookScreen").classList.toggle("scaled");
    })
    // read the form and add it into the library
    const add = document.getElementById('add')
    add.addEventListener('click', (e)=> {
        e.preventDefault()
        addBookToLibrary()
    })
}
