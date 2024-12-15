
let addButton = document.getElementById("taskAdd");
let list = document.getElementById("ol");


addButton.addEventListener("click",()=>{
    let inPutTasks = document.getElementById("taskInput").value;

    if (inPutTasks.trim() === "") {
        alert("Please enter a task!");
        return;
    }


    //creating li element
    let listenItem = document.createElement("li");
    listenItem.textContent = inPutTasks;
  

    //create a delete button
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "delete";
    deleteButton.className = "taskAdd deletebtn"
   
    deleteButton.addEventListener("click", ()=>{
        list.removeChild(listenItem);
    })

    //append the delete button to the <li>
    listenItem.appendChild(deleteButton);

    //append the list to ol
    list.appendChild(listenItem);

    //clear the input
    document.getElementById("taskInput").value = "";


});
