const text = document.getElementById("text");
const addButton = document.querySelector(".addTask");
const taskList = document.querySelector(".tasksList");
const totalTask = document.querySelector(".totalTask");

function UpdateTaskCount(){
    let total = taskList.querySelectorAll("li").length;
    totalTask.textContent = total;

}


function addTask() {



    addButton.addEventListener("click", () => {

        let curTask = text.value;



        //creaTing a li 
        if (curTask.trim() !== "") {


            let deleteTask = document.createElement("button");
            deleteTask.textContent = "Delete";
            deleteTask.className = "deleteButton";

            let li = document.createElement("li");
            li.textContent = curTask;
            li.addButton;

            deleteTask.addEventListener("click", () => {
                taskList.removeChild(li);
                UpdateTaskCount();
            })

            taskList.appendChild(li);
            li.appendChild(deleteTask);
            text.value = "";

            UpdateTaskCount();

        } else {
            console.log("Enter a task!")
        }


    })

}

addTask();