let menu = document.createElement("div")

//title
let title = document.createElement("h1")
title.textContent = 'Menu'

let ul = document.createElement("ul")
ul.setAttribute('id','menuUl')


//dotted lines
let dots1 = document.createElement("div")
dots1.textContent='............................'
let dots2 = document.createElement("div")
dots2.textContent='............................'
let dots3 = document.createElement("div")
dots3.textContent='............................'

// burger 
let l1 = document.createElement("li")
let l1Name = document.createElement("div")
let l1Price = document.createElement("div")
l1Name.textContent='burger'
l1Price.textContent='99 KC'
l1.appendChild(l1Name)
l1.appendChild(dots1)
l1.appendChild(l1Price)

//pizza
let l2 = document.createElement("li")
let l2Name = document.createElement("div")
let l2Price = document.createElement("div")
l2Name.textContent='pizza'
l2Price.textContent='199 KC'
l2.appendChild(l2Name)
l2.appendChild(dots2)
l2.appendChild(l2Price)

// steak
let l3 = document.createElement("li")
let l3Name = document.createElement("div")
let l3Price = document.createElement("div")
l3Name.textContent='steak'
l3Price.textContent='299 KC'
l3.appendChild(l3Name)
l3.appendChild(dots3)
l3.appendChild(l3Price)


ul.appendChild(l1)
ul.appendChild(l2)
ul.appendChild(l3)

// add to the body
menu.appendChild(title)
menu.appendChild(ul)

export default menu