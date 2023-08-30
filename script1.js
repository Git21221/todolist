const addbtn = document.getElementById("btn");
const taskname = document.getElementById("task");
const descrip = document.getElementById("tasktodo");
const delbtn = document.getElementById("deletebtn");
const form = document.querySelector("form");
const box = document.querySelector(".box");
const tasks = localStorage.getItem("tasks")
 ? JSON.parse(localStorage.getItem("tasks"))
 : [];
 const showalltask = () => {
     tasks.forEach((value, index) => {
         
         const div = document.createElement("div");
         div.setAttribute("class", "task");
         
         const innerdiv = document.createElement("div");
         div.append(innerdiv);
         
         const taskn = document.createElement("p");
         taskn.setAttribute("class", "taskname");
         taskn.innerText = value.title;
         innerdiv.append(taskn);
         
         const taskd = document.createElement("span");
         taskd.setAttribute("class", "taskdescription");
         taskd.innerText = value.description;
         innerdiv.append(taskd);
         
         const delbt = document.createElement("button");
         delbt.setAttribute("id", "deletebtn");
         delbt.innerText = "-";
         delbt.addEventListener("click", () => {
             removetask()
             tasks.splice(index, 1);
             localStorage.setItem("tasks", JSON.stringify(tasks));
             showalltask()
            })
        div.append(delbt);
        box.append(div);
    })
}
showalltask();
function removetask() {
    tasks.forEach((value, index) => {
        const div = document.querySelector(".task")
        div.remove();
    })
}
form.addEventListener("submit", (e) => {
    e.preventDefault();
    removetask();
    tasks.push({
        title: taskname.value,
        description: descrip.value
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    showalltask();
})