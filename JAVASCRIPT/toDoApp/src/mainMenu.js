let mainMenu = document.createElement('div')
mainMenu.id='mainMenu'
// available projects
let projects = ['all', 'fitness','finance', 'relationship']

//create div1
let div1 = document.createElement('div')
div1.setAttribute('id', 'mainMenu')

// div1>buttons
let div1Buttons = document.createElement('div')
div1Buttons.setAttribute('id','div1Buttons')

//add a project
let createProjectBtn = document.createElement('button')
createProjectBtn.textContent='+'
createProjectBtn.addEventListener('click', ()=> {
    document.getElementById('mainCards').style.filter = "blur(4px)";
    (!document.getElementById('form'))?createForm():closeForm()
})

//delete a project
let deleteProjectBtn = document.createElement('button')
deleteProjectBtn.textContent='-'
deleteProjectBtn.addEventListener('click', ()=> {
    let projectSelectInput = document.getElementById('projectSelectInput');
    let project = projectSelectInput.value;
    projects = projects.filter(i => i!=project)
    titleSelect(projects)
})
div1Buttons.appendChild(createProjectBtn)
div1Buttons.appendChild(deleteProjectBtn)

// div1>buttons logic
const openForm = () => {
    let div = document.getElementById('form')
}

const closeForm = () => {
    let div = document.getElementById('form')
    div.style.display = 'none'
    div1Buttons.removeChild(div)
    document.getElementById('mainCards').style.filter = "blur(0px)";
}

const createForm = () => {
    if (!document.getElementById('form')) {
        let div = document.createElement('div')
        let p = document.createElement('p')
        p.textContent='Project Name'
        div.id = 'form'
        div.style.zIndex = "1";
        let divBtn = document.createElement('div')
        let input = document.createElement('input')
        let add = document.createElement('button')
        add.textContent='add'
        add.addEventListener('click', ()=>{
            if (input.value) {
                projects.push(input.value)
            }
            closeForm()
            titleSelect(projects)
        })
        let cancel = document.createElement('button')
        cancel.textContent='cancel'
        cancel.addEventListener('click', ()=>closeForm())
        divBtn.appendChild(add)
        divBtn.appendChild(cancel)
        div.appendChild(p)
        div.appendChild(input)
        div.appendChild(divBtn)
        div1Buttons.appendChild(div)
    }
}

//div1>title
let div1Title = document.createElement('div')
let select = document.createElement('select')
select.id='projectSelectInput'
let titleSelect = ((projects) => {
    select.textContent=''
    projects.forEach(element => {
    let option = document.createElement('option')
    option.textContent=element
    option.value=element
    select.appendChild(option)
    })
})
titleSelect(projects)
div1Title.appendChild(select)





// append buttons and title to div1
div1.appendChild(div1Title)
div1.appendChild(div1Buttons)

//create div1
let div2 = document.createElement('div')
let div2btn = document.createElement('button')
div2btn.textContent='add Task'
div2btn.id='addTask'
div2.appendChild(div2btn)

//apend div1 and div2 to main
mainMenu.appendChild(div2)
mainMenu.appendChild(div1)

export {mainMenu, closeForm}