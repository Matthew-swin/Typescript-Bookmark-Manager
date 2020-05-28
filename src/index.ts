//import {BookMark} from "./BookMarkClass"
let InputPopup = document.getElementById("InputPopup") as HTMLButtonElement | null;
let ClosePopup = document.getElementById("ClosePopup") as HTMLButtonElement | null;
let container = document.getElementById("container") as HTMLDivElement | null;
let NewBookMark = document.getElementById("NewBookMark") as HTMLDivElement | null;
let PopupPanel = document.getElementById("PopupPanel") as HTMLDivElement | null;


if (InputPopup == null || undefined) {
    alert("Button not found.");
} else {
    InputPopup.onclick = function (id){
    if (PopupPanel == null || event == null) return;
    event.preventDefault();
    PopupPanel.style.display = "block";
} 

if (ClosePopup == null || undefined) {
    alert("Button not found.");
} else {
    ClosePopup.onclick = function (id){
    if (PopupPanel == null || event == null) return;
    event.preventDefault();
    PopupPanel.style.display = "none";
} 

 
}
}

/* if (CreateBookMark == null) {
    alert("Button not found.");
} else {

    CreateBookMark.onclick = function () {
        if(CreateBookMark == undefined) return;
        //new bookMark
        let poop = document.createElement("p");
        poop.classList.add("yafucked");
        poop.innerText = 'I will cut you';
        //delete botton
        let deleted = document.createElement("button");
        deleted.classList.add("deleteButton");
        deleted.innerHTML = '<i class="fas fa-trash">';
        //favourites button. need to set up toggle
        let favourite = document.createElement("button")
        favourite.innerHTML = '<i class="fas fa-star"></i>';
        favourite.classList.add("favouriteToggle")
        // the appendaning!!
        NewBookMark?.appendChild(poop);
        poop.appendChild(deleted);
        poop.appendChild(favourite);

        deleted.onclick = function (e) {
        if(deleted == undefined) return;
        let item = e.target;
        if (deleted.classList[0] === "deleteButton"){

        }
        }
    }
}
*/
