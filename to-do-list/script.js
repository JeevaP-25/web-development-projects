const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const change = document.getElementById("change");

addBtn.addEventListener('keydown',function(){
    const task = taskInput.value;

    if (task.trim() === "") {
        return;
    }

    const li = document.createElement("li");

    li.textContent = task;
li.addEventListener("click", function() {
    li.classList.toggle("completed");
});
    taskList.appendChild(li);
     const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";
    deleteBtn.addEventListener('click',function(){
        li.remove();
    })
    
})