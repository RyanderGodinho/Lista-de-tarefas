const inputTask = document.querySelector('#input-task');
const btnAdd = document.querySelector('#btn-add');
const containerTasks = document.querySelector('.container-tasks');

btnAdd.addEventListener('click', ()=>{
  const tasks = document.createElement('div');
  tasks.classList.add('task');

  containerTasks.appendChild(tasks);

  const task = document.createElement('span');
  const inputDelete = document.createElement('img');

  task.textContent = inputTask.value;
  inputDelete.src = '../assets/remove.svg';

  tasks.appendChild(task);
  tasks.appendChild(inputDelete)
  inputTask.value = '';

  inputDelete.addEventListener('click',()=>{
    containerTasks.removeChild(tasks);
  })
})