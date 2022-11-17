let navBar = document.createElement("div")

let ul = document.createElement("ul")
let li1 = document.createElement("li")
let li2 = document.createElement("li")
let li3 = document.createElement("li")

li1.textContent = 'Home'
li1.setAttribute("id", "home");
li2.textContent = 'Contacts'
li2.setAttribute("id", "contacts");
li3.textContent = 'Menu'
li3.setAttribute("id", "menu");

ul.appendChild(li1)
ul.appendChild(li2)
ul.appendChild(li3)

navBar.appendChild(ul)

export default navBar

