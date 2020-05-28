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
        let poop = document.createElement("p")
        poop.classList.add('yafucked')
        poop.innerText = 'I will cut you'

        let
        NewBookMark?.appendChild(poop)
        
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