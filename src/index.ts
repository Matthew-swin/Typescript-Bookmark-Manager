//import {BookMark} from "./BookMarkClass"
let CreateBookMark = document.getElementById("CreateBookMark") as HTMLButtonElement | null;
let container = document.getElementById("container") as HTMLDivElement | null;
let NewBookMark = document.getElementById("NewBookMark") as HTMLDivElement | null;


if (CreateBookMark == null) {
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
        let favourite = document.createElement("button")
        favourite.innerHTML = '<i class="fas fa-star"></i>';
        favourite.classList.add("favouriteToggle")
        NewBookMark?.appendChild(poop);
        poop.appendChild(deleted);
        poop.appendChild(favourite);
        
    }

    /*myButton2.onclick = function (event) {
        event.preventDefault();
        if(myButton2 == undefined || input == null || container == null ) return;
        const newOne = document.createElement('li')
        newOne.classList.add('NewOneClass');
        newOne.innerText = input.value;
        container.appendChild(newOne);

        
    }*/
}