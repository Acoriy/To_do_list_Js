const input = document.querySelector('input');
const btnAjouter = document.querySelector('.btn-Ajouter');
const container = document.querySelector('.container');



window.onload = ()=>{
    input.focus();
}

btnAjouter.addEventListener("click" , NewTask);
function NewTask(e){
    e.preventDefault();
    if(input.value.trim() === ""){
        input.classList.add("vide");
        return false;
    }
    
  

    // la creation des elements :
    const divTasks = document.createElement("div");
    divTasks.classList.add("todo-tasks");

    const spanTask = document.createElement("span");

    const btnCheckTask = document.createElement("button");
    btnCheckTask.classList.add("btn-check");
    btnCheckTask.innerHTML = `<i class="fa-solid fa-check"></i>`;

    const btnSuprimeTask = document.createElement("button");
    btnSuprimeTask.classList.add("btn-suprimer");
    btnSuprimeTask.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    
    // ----- Afficter les elements fils au elesments  parent :
    divTasks.appendChild(btnSuprimeTask);
    divTasks.appendChild(btnCheckTask);
    divTasks.appendChild(spanTask);
    
    container.appendChild(divTasks);
    
    // -- Ajoute task : 
    spanTask.innerText += input.value;
    // --- vider l'input aprer l'ajout du task :
    input.value = "";
    
    // -------- button check : ----------
    btnCheckTask.onclick = ()=>{
        spanTask.classList.toggle('check');
    }
    // -------- button suprimer : --------
    btnSuprimeTask.onclick = ()=>{
        divTasks.classList.add("suprime");
        divTasks.addEventListener("transitionend" , ()=>{
            divTasks.remove();
        });
    }
 
}
