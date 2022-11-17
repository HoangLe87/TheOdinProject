let contacts = document.createElement("div")


// title
let title = document.createElement("h1")
title.textContent = 'Contacts'

let ul = document.createElement("ul")
ul.setAttribute('id','contactsUl')

// address 
let l1 = document.createElement("li")
let l1Name = document.createElement("div")
l1Name.textContent='Andel 115, Prague'
l1.appendChild(l1Name)

let l2 = document.createElement("li")
let l2Name = document.createElement("div")
l2Name.textContent='Czech Republic, 150 00'
l2.appendChild(l2Name)

// tel
let l3 = document.createElement("li")
let l3Name = document.createElement("div")
l3Name.textContent='Tel: 987 654 321'
l3.appendChild(l3Name)


ul.appendChild(l1)
ul.appendChild(l2)
ul.appendChild(l3)

// add to the body
contacts.appendChild(title)
contacts.appendChild(ul)

export default contacts