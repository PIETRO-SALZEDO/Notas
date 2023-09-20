const button = document.querySelector ("#btn")
const container = document. getElementById("container")

button.addEventListener("click", createNote);
function createNote(){
    const note = document.createElement ("div")
    note.classList.add("note");
    note.style.backgroundColor = getRandomColor();
    // note.style.left = getRandomPosition() + "px";
    // note.style.top = getRandomPosition() + "px";
    note.setAttribute("contenteditable", "true")

    note.addEventListener("dblclick", () =>{
        container.removeChild(note);
    });

    container.appendChild(note)
}

function getRandomPosition(){
    return Math.floor((Math.random()*1000))
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
       color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
   }
