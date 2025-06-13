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

function addTask(){
    const taskinput=document.getElementById('taskInput');
    const tasklist=document.getElementById('taskList');
    if(taskinput.value===''){
        alert('Please enter a task');
        return;
    }
    let li=document.createElement('li');
    li.innerText=taskinput.value;
    tasklist.appendChild(li);
    taskinput.value='';
    let completedBtn=document.createElement('button');
    completedBtn.innerText='Completed';
    li.appendChild(completedBtn);
    li.className='d-flex justify-content-between my-2';
    completedBtn.className='btn btn-danger';
    completedBtn.addEventListener('click',()=> {
        li.style.textDecoration = 'line-through';
    });
}