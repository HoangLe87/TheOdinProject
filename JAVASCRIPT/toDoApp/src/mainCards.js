import factoryToDo from './factoryToDo'

let toDo1 = factoryToDo('toDo1','no idea', '14/05/2022','high','fitness','i am fat', true)
let toDo2 = factoryToDo('toDo2','no idea', '14/05/2022','high','fitness','i am slim', false)
let toDo3 = factoryToDo('toDo3','no idea', '14/05/2022','high','all','i am slim', false)
let tasks = [toDo1,toDo2,toDo3]

let mainCards = document.createElement('div')
mainCards.id='mainCards'

const displayCards = (tasks) => {
    mainCards.textContent=''
    tasks.forEach(element => {
        let card = document.createElement('div')
        card.className = 'card'
        let x = document.createElement('div')
        x.textContent='x'
        x.className='x'
        x.id=tasks.indexOf(element)
        x.addEventListener('click', ()=> {
            let index = tasks.indexOf(element)
            tasks = tasks.filter(element=>element!==tasks[index])
            displayCards(tasks)
        })
        let title = document.createElement('div')
        title.className='title'
        title.textContent=element.title
        let description = document.createElement('div')
        description.textContent=`description: ${element.description}`
        description.className='description'
        let dueDate = document.createElement('div')
        dueDate.textContent=`dueDate: ${element.dueDate}`
        dueDate.className='dueDate'
        let priority = document.createElement('div')
        priority.textContent=`priority: ${element.priority}`
        priority.className='priority'
        let project = document.createElement('div')
        project.textContent=`project: ${element.project}`
        project.className='project'
        let notes = document.createElement('div')
        notes.textContent=`notes: ${element.notes}`
        notes.className='notes'
        if(element.done) {
            card.classList.toggle('done')
        }
        //add info to card
        card.appendChild(x)
        card.appendChild(title)
        card.appendChild(project)
        card.appendChild(description)
        card.appendChild(dueDate)
        card.appendChild(priority)
        card.appendChild(notes)
        //add card to main
        mainCards.appendChild(card)
    });
}

displayCards(tasks)

export {mainCards, tasks, displayCards}

