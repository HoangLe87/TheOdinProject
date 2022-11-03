// define global variables
const sliderValue = document.getElementById("sliderValue")
const myGrid = document.getElementById("myGrid")
const drawArea = document.getElementById("drawArea")
const currentColorDiv = document.getElementById("currentColor")
const styles = window.getComputedStyle(currentColorDiv); 
let currentColor=styles.getPropertyValue('background-color')
let optionsAction = document.getElementById("optionsAction")
const red = document.getElementById("red")
const blue = document.getElementById("blue")
const black = document.getElementById("black")
const yellow = document.getElementById("yellow")
const green = document.getElementById("green")
const gray = document.getElementById("gray")


// display grid values
const updateGridValue = () => {
    sliderValue.textContent=`Size: ${myGrid.value} x ${myGrid.value}`
}
// create grids
const createGrids = () => {
    drawArea.textContent=''
    for (let i=0; i<myGrid.value; i++) {
        let div1 = document.createElement("div")
        div1.classList.add("div1")
        drawArea.append(div1)
        for (let j=0; j<myGrid.value; j++) {
            let div2 = document.createElement("div")
            div2.classList.add("div2")
            div1.append(div2)
        }
    }
    return Promise.resolve()
}

// draw and erase function
const draw = () => {
    let div2s = document.querySelectorAll(".div2")
    let mouseDown=false
    window.addEventListener("mousedown", ()=>mouseDown=true)
    window.addEventListener("mouseup", ()=>mouseDown=false)
    div2s.forEach(element => {
        element.addEventListener('mousemove', () => {
            if (mouseDown) {
                if (optionsAction.value==='1')
                    element.style.backgroundColor=currentColor
                if (optionsAction.value==='2')
                    element.style.backgroundColor="white"
            }
        })
    });
}

// change action buttons on click
const changeActionButtons = () => {
    if (optionsAction.value==='1') {
        document.getElementById("one").classList.add("picked")
        document.getElementById("two").classList.remove("picked")
        document.getElementById("three").classList.remove("picked")
    }
    if (optionsAction.value==='2') {
        document.getElementById("two").classList.add("picked")
        document.getElementById("one").classList.remove("picked")
        document.getElementById("three").classList.remove("picked")
    }
    if (optionsAction.value==='3') {
        document.getElementById("two").classList.remove("picked")
        document.getElementById("three").classList.add("picked")
        document.getElementById("one").classList.remove("picked")
        drawArea.textContent=''
    }
}

// draw, erase and clear action buttons toggle
let actionButtons = document.querySelectorAll("option")
actionButtons.forEach(element => {
    element.addEventListener('click', () => changeActionButtons())
})

// add eventlistener to the slider
myGrid.addEventListener("change", async () => {
    optionsAction.value==='1'
    updateGridValue()
    await createGrids()
    draw()
})

// add eventlistener to the color options menu to update the current color
const updateColors = () => {
    currentColorDiv = document.getElementById("currentColor")
    styles = window.getComputedStyle(currentColorDiv); 
    currentColor=styles.getPropertyValue('background-color')
}
red.addEventListener("click", () => {
    currentColorDiv.style.backgroundColor = "red"
    currentColor="red"
})

blue.addEventListener("click", () => {
    currentColorDiv.style.backgroundColor = "blue"
    currentColor="blue"
})

black.addEventListener("click", () => {
    currentColorDiv.style.backgroundColor = "black"
    currentColor="black"
})

yellow.addEventListener("click", () => {
    currentColorDiv.style.backgroundColor = "yellow"
    currentColor="yellow"
})

green.addEventListener("click", () => {
    currentColorDiv.style.backgroundColor = "green"
    currentColor="green"
})

gray.addEventListener("click", () => {
    currentColorDiv.style.backgroundColor = "gray"
    currentColor="gray"
})