document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task");
    const addTaskButton = document.getElementById("add-task");
    const taskList = document.getElementById("task-list");

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value;

        if (taskText.trim() === "") {
            return; 
        }

        const li = document.createElement("li");
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="delete">Delete</button>
        `;

        taskList.appendChild(li);
        taskInput.value = "";

        const taskTextElement = li.querySelector("span");

        taskTextElement.addEventListener("click", function () {
            if (taskTextElement.style.textDecoration === "line-through") {
                taskTextElement.style.textDecoration = "none";
            } else {
                taskTextElement.style.textDecoration = "line-through";
            }
        });

        li.querySelector(".delete").addEventListener("click", function () {
            li.remove();
        });
    });
});

         li.querySelector(".delete").addEventListener("click", function () {
            li.remove();
        });
  