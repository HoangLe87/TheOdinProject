import steak from './img/steak.jpg'
import pizza from './img/pizza.jpg'
import burger from './img/burger.jpg'

let home = document.createElement("div")


let title = document.createElement("h1")
title.textContent='Asian Fusion'


let panel = document.createElement("div")
panel.classList.add('panel')
const steakImg = document.createElement('img')
const pizzaImg = document.createElement('img')
const burgerImg = document.createElement('img')
home.appendChild(steakImg)
home.appendChild(pizzaImg)
home.appendChild(burgerImg)

steakImg.src=steak
pizzaImg.src=pizza
burgerImg.src=burger

home.appendChild(title)
home.appendChild(panel)

export default home