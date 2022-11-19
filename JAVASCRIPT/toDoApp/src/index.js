import "./style.scss";
import header from './header'
import footer from './footer'
import {mainMenu, closeForm} from './mainMenu'
import {mainCards, displayCards, tasks, displySelection} from './mainCards'
import factoryToDo from './factoryToDo'



let main = document.createElement('main')
main.appendChild(mainMenu)
main.appendChild(mainCards)

document.body.appendChild(header)
document.body.appendChild(main)
document.body.appendChild(footer)


let projectSelectInput = document.getElementById('projectSelectInput')

projectSelectInput.addEventListener('change', ()=>{
    if (projectSelectInput.value.toLowerCase()==='all') {
        displayCards()
    }
    else {
        let filteredTasks = tasks.filter(i=>i.project.toLowerCase()===projectSelectInput.value.toLowerCase())
        displySelection(filteredTasks)
    }
})

const addTaskForm = () => {
    if (!document.getElementById('form')) {
        let div = document.createElement('div')
        div.id = 'form'
        div.style.zIndex = "1";
        let divBtn = document.createElement('div')
        let title = document.createElement('input')
        title.placeholder='title'
        let project = document.createElement('input')
        project.placeholder='project'
        let description = document.createElement('input')
        description.placeholder='description'
        let dueDate = document.createElement('input')
        dueDate.placeholder='DD/MM/YYYY'
        let priority = document.createElement('input')
        priority.placeholder='high/low/medium'
        let notes = document.createElement('input')
        notes.placeholder='notes'
        let done = document.createElement('input')
        done.placeholder='yes/no'

        let add = document.createElement('button')
        add.textContent='add'
        add.addEventListener('click', ()=>{
            if (title.value&&priority.value&&dueDate.value&&description.value&&project.value) {
                let newTask = factoryToDo(title.value, description.value, dueDate.value, priority.value, project.value, notes.value, done.value)
                tasks.push(newTask)
                console.log(tasks)
                displayCards(tasks)
            }
            closeForm()
        })
        let cancel = document.createElement('button')
        cancel.textContent='cancel'
        cancel.addEventListener('click', ()=>closeForm())
        divBtn.appendChild(add)
        divBtn.appendChild(cancel)
        div.appendChild(title)
        div.appendChild(project)
        div.appendChild(description)
        div.appendChild(dueDate)
        div.appendChild(priority)
        div.appendChild(notes)
        div.appendChild(done)
        div.appendChild(divBtn)
        div1Buttons.appendChild(div)
    }
}

let addTask = document.getElementById('addTask')

addTask.addEventListener('click', ()=>{
    if (!document.getElementById('form')) {
        addTaskForm()
    } else {
        closeForm() 
    }
})


