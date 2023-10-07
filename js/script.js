const addBtn = document.querySelector("#addTaskBtn");
const removeBtn = document.querySelector(".addTaskBtn button");
const tasksList = document.querySelector("#tasksList");
let counter = 0;

function addTask(task, importance){
    counter++;
    task = task[0].toUpperCase() + task.substr(1);
    const item = createTask(task, importance, counter);
    tasksList.appendChild(item);
}

function createTask(task, importance, id){
    const divItem = document.createElement("div");
        const divName = document.createElement("div");
            const divIcon = document.createElement("div");
                const iImportance = document.createElement("i");
            const divParagrah = document.createElement("div");
                let p = document.createElement("p");
        const divTrash = document.createElement("div");
            const iTrash = document.createElement("i");
            const btn = document.createElement("button");

    divItem.id = id
    divItem.classList.add("tasksItem");
        divName.classList.add("tasksName");
            divIcon.classList.add(`${importance}Icon`);
                iImportance.classList.add("fa-solid");
                iImportance.classList.add("fa-circle");
                iImportance.classList.add("fa-2xs");
            divParagrah.classList.add("tasksParagraph");
        divTrash.classList.add("tasksTrash")
            iTrash.classList.add("fa-solid");
            iTrash.classList.add("fa-trash");
            iTrash.classList.add("fa-lg");
            
    p.innerHTML += task;
    btn.addEventListener("click", e => {
        const element = document.getElementById(id);
        element.remove();
    });

    divItem.appendChild(divName);
        divName.appendChild(divIcon);
            divIcon.appendChild(iImportance);
        divName.appendChild(divParagrah);
            divParagrah.appendChild(p);
    divItem.appendChild(divTrash);
    divTrash.appendChild(btn)
        btn.appendChild(iTrash);

    return divItem;
}

addBtn.addEventListener("click", e => {
    const name = document.querySelector("#addTaskName");
    const importance = document.querySelector("#addTaskImportance");

    if(name.value == "" || importance.value == ""){
        alert("Put importance and name!");
        return;
    }
    
    addTask(name.value, importance.value);
    name.value = "";
});