const deleteBtn = document.querySelectorAll('.del')
const taskItem = document.querySelectorAll('span.not')
const taskDone = document.querySelectorAll('span.done')

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteTask)
})

Array.from(taskItem).forEach((el)=>{
    el.addEventListener('click', markDone)
})

Array.from(taskDone).forEach((el)=>{
    el.addEventListener('click', markNotDone)
})

async function deleteTask(){
    const taskId = this.parentNode.dataset.id
    try{
        const response = await fetch('tasks/deleteTask', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'taskIdFromJSFile': taskId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markDone(){
    const taskId = this.parentNode.dataset.id
    try{
        const response = await fetch('tasks/markDone', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'taskIdFromJSFile': taskId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markNotDone(){
    const taskId = this.parentNode.dataset.id
    try{
        const response = await fetch('tasks/markNotDone', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'taskIdFromJSFile': taskId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}