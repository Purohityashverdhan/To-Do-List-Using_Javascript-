// const addbtn=document.getElementById('addBtn');
// const taskinput=document.getElementById('taskInput');
// const tasklist=document.getElementById('taskList');

// addbtn.addEventListener('click',()=>{
//     if(taskinput.value===''){
//         alert('Please enter a task');
//         return;
//     }
//     let li=document.createElement('li');
//     li.innerText=taskinput.value;
//     tasklist.appendChild(li);
//     taskinput.value='';
//     let completedBtn=document.createElement('button');
//     completedBtn.innerText='Completed';
//     li.appendChild(completedBtn);
//     li.className='d-flex justify-content-between my-2';
//     completedBtn.className='btn btn-danger';
//     completedBtn.addEventListener('click',()=>{
//         li.style.textDecoration='line-through';
//     })
// });

// function addTask(){
//     const taskinput=document.getElementById('taskInput');
//     const tasklist=document.getElementById('taskList');
//     if(taskinput.value===''){
//         alert('Please enter a task');
//         return;
//     }
//     let li=document.createElement('li');
//     li.innerText=taskinput.value;
//     tasklist.appendChild(li);
//     taskinput.value='';
//     let completedBtn=document.createElement('button');
//     completedBtn.innerText='Completed';
//     li.appendChild(completedBtn);
//     li.className='d-flex justify-content-between my-2';
//     completedBtn.className='btn btn-danger';
//     completedBtn.addEventListener('click',()=> {
//         li.style.textDecoration = 'line-through';
//     });
// }


function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value === '') {
        alert('Please enter a task');
        return;
    }

    const li = document.createElement('li');
    li.className = 'd-flex justify-content-between align-items-center my-2';

    const taskText = document.createElement('span');
    taskText.innerText = taskInput.value;
    li.appendChild(taskText);

    const buttonGroup = document.createElement('div');

    const completeBtn = document.createElement('button');
    completeBtn.innerText = 'Completed';
    completeBtn.className = 'btn btn-success btn-sm mx-1';
    completeBtn.addEventListener('click', () => {
        li.style.textDecoration = 'line-through';
    });

    const editBtn = document.createElement('button');
    editBtn.innerText = 'Edit';
    editBtn.className = 'btn btn-primary btn-sm mx-1';
    editBtn.addEventListener('click', () => editTask(taskText));

    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.className = 'btn btn-danger btn-sm mx-1';
    deleteBtn.addEventListener('click', () => deleteTask(li));

    buttonGroup.appendChild(completeBtn);
    buttonGroup.appendChild(editBtn);
    buttonGroup.appendChild(deleteBtn);

    li.appendChild(buttonGroup);
    taskList.appendChild(li);

    taskInput.value = '';
}

function deleteTask(taskElement) {
    const taskList = document.getElementById('taskList');
    taskList.removeChild(taskElement);
}

function editTask(taskTextElement) {
    const newTask = prompt("Edit your task:", taskTextElement.innerText);
    if (newTask !== null && newTask.trim() !== '') {
        taskTextElement.innerText = newTask.trim();
    }
}
