import { BookMark, BookMarkFun } from "./BookMarkClass"
let InputPopup = document.getElementById("InputPopup") as HTMLButtonElement | null;
let ClosePopup = document.getElementById("ClosePopup") as HTMLButtonElement | null;
let AddBookMark = document.getElementById("AddBookMark") as HTMLButtonElement | null;
let NewBookMark = document.getElementById("NewBookMark") as HTMLDivElement | null;
let PopupPanel = document.getElementById("PopupPanel") as HTMLDivElement | null;
let Title = document.getElementById("Title") as HTMLInputElement | null;
let URL = document.getElementById("URL") as HTMLInputElement | null;





if (InputPopup == null || undefined) {
    alert("Button not found.");
} else {
    InputPopup.onclick = function (id: MouseEvent) {
        if (PopupPanel == null || event == null) return;
        event.preventDefault();
        PopupPanel.style.display = "block";
    }

    if (ClosePopup == null || undefined) {
        alert("Button not found.");
    } else {
        ClosePopup.onclick = function (id: MouseEvent) {
            if (PopupPanel == null || event == null) return;
            event.preventDefault();
            PopupPanel.style.display = "none";
        }

        if (AddBookMark == null || undefined) {
            alert("Button not found.");
        } else {
            AddBookMark.onclick = function () {
                if (AddBookMark == null || event == null || PopupPanel == null || Title == null || URL == null) return;
                PopupPanel.style.display = "none";
                let a = Title.value;
                let b = URL.value;
                let bookMark = new BookMark(a, b);
                let bookMarkFun = new BookMarkFun(bookMark)
                bookMarkFun.Spawn(a,b);
                Title.value = "";
                URL.value = "";
                
                
                

            }


        }
    }

}

/* if (AddBookMark == null) {
    alert("Button not found.");
} else {

    AddBookMark.onclick = function () {
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
