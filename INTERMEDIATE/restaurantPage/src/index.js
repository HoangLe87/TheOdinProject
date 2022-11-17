import navBar from './navBar'
import home from './home'
import menu from './menu'
import contacts from './contacts'
import footerText from './footer'

import './style.scss'


let header = document.createElement("header")
let main = document.createElement("main")
let footer = document.createElement("footer")

header.appendChild(navBar)
footer.appendChild(footerText)
main.appendChild(home)


let content = document.getElementById("content")
content.appendChild(header)
content.appendChild(main)
content.appendChild(footer)


let menuBtn = document.getElementById("menu")
menuBtn.addEventListener('click', ()=>{
    main.textContent=''
    main.appendChild(menu)
    content.insertBefore(main, footer)
})

let homeBtn = document.getElementById("home")
homeBtn.addEventListener('click', ()=>{
    main.textContent=''
    main.appendChild(home)
    content.insertBefore(main, footer)
})

let contactsBtn = document.getElementById("contacts")
contactsBtn.addEventListener('click', ()=>{
    main.textContent=''
    main.appendChild(contacts)
    content.insertBefore(main, footer)
})

