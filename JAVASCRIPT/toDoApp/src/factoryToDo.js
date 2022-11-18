const factoryToDo = (title, description, dueDate, priority, project, notes, done) => {
    const toDo = {
        title,
        description,
        dueDate,
        priority,
        project,
        notes, 
        done
    }
    return toDo
}

export default factoryToDo