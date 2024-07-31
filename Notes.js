
const NotesContainer = document.querySelector(".Notes-container");
const createBtn = document.querySelector(".btn");
const Notes = document.querySelectorAll(".input-box");
function UpdateStorage() {
    localStorage.setItem("Notes",NotesContainer.innerHTML);
}
function ShowNotes() {
    NotesContainer.innerHTML = localStorage.getItem("Notes");
}
ShowNotes();
createBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src = "images/delete.png";
    NotesContainer.appendChild(inputBox).appendChild(img); 
})

NotesContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();    
        UpdateStorage()
    }else if(e.target.tagName === "p"){
        Notes = document.querySelectorAll("input-box");
        Notes.forEach(nt => {
            nt.onkeyup =function(){
                UpdateStorage();
            }
        })
    }
    document.addEventListener("keydown",Event =>{
        if(Event.key ==="enter"){
            document.execCommand("insertLineBreak");
            Event.parentDefault();
        }
    })
})
