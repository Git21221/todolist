const add = document.getElementById("add");
const del = document.getElementById("delete");
add.onclick = addingelement;
del.onclick = deletingelement;
function addingelement(){
    console.log("click")
    const heading  = document.createElement("h2");
    heading.innerText = "Added";
    document.body.append(heading);
}
function deletingelement(){
    const heading = document.getElementsByTagName("h2");
    heading[0].remove();
}