window.addEventListener('load',()=>
{
   const form = document.getElementById('new-todo-form')
   const input = document.getElementById('new-input-task')
   const tasklist = document.getElementById('tasks')

form.addEventListener('submit',(e)=>
{
    e.preventdefault();
    const task = input.value

    if(!task)
    {
        alert("enter the task to add")
        return;
    }
    const tasknew = document.createElement('div')
    tasknew.classList.add('task')

    const tasknewcontent = document.createElement('div')
    tasknewcontent.classList.add('content')

    tasknew.appendChild(tasknewcontent)

    const task_input = document.createElement('input')
    task_input.classList.add('text')
    task_input.type = "text"
    task_input.value = task;
    task_input.setAttribute("readonly","readonly")
    tasknewcontent.appendChild(task_input)

    const task_actions = document.createElement('div')
    task_actions.classList.add('actions')

    const task_edit = document.createElement('button')
    task_edit.classList.add('edit')
    task_edit.innerHTML = "edit"
    
    const task_delete = document.createElement('button')
    task_delete.classList.add('delete')
    task_delete.innerHTML = "delete"


    task_actions.append(task_edit,task_delete)
    tasknew.appendChild(task_actions)
    tasklist.appendChild(tasknew)
    input.value="";

    task_edit.addEventListener('click',()=>
    {
        if (task_edit.innerText.toLocaleLowerCase() == "edit") {
            task_input.removeAttribute("readonly");
            task_input.focus();
            task_edit.innerText = "save";
        } else {
            task_input.setAttribute("readonly", "readonly")
            task_edit.innerText = "edit";
        }
        
    });


    task_delete.addEventListener("click", () => {
        tasklist.removeChild(task_el);
    });


})
});