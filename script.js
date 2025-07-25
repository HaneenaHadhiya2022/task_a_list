//constants declared for input button and task list area
  const taskinput = document.querySelector("#newtask input");
  const taskSection = document.querySelector('.tasks');
  //listener for the Enter key.Used to add a new task.
  taskinput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      createTask();
    }
  });
  //the onclick event for the 'Add' button
  document.querySelector('#push').onclick = function(){

    createTask();}
    //the function that creates a task
function createTask() {
    if (taskinput.value.length == 0) {
        alert("The task field is blank. Enter a task name and try again.");
    } else {
        // this block inserts HTML that creates each task into the task area div element
        taskSection.innerHTML += `
            <div class="task">
                <label id="taskname">
                    <input onclick="updateTask(this)" type="checkbox" id="check-task">
                    <p>${taskinput.value}</p>
                </label>
                <div class="delete">
                    <i class="uil uil-trash"></i>
                </div>
            </div>
        `;
        var current_tasks = document.querySelectorAll('.delete');
        for (var i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function () {
                this.parentNode.remove();
            }
        }
        taskSection.offsetHeight >= 300
            ? taskSection.classList.add("overflow")
            : taskSection.classList.remove("overflow");
    }
}
function updateTask(task){
  let taskItem=task.parentElement.lastElementChild;
  if(task.checked){
    taskItem.classList.add("checked");}
    else{taskItem.classList.remove("checked");
    }
  }
    
  

        
    

  