import { BookMark, BookMarkFun } from "./BookMarkClass"
let InputPopup = document.getElementById("InputPopup") as HTMLButtonElement | null;
let ClosePopup = document.getElementById("ClosePopup") as HTMLButtonElement | null;
let AddBookMark = document.getElementById("AddBookMark") as HTMLButtonElement | null;
let NewBookMark = document.getElementById("NewBookMark") as HTMLDivElement | null;
let PopupPanel = document.getElementById("PopupPanel") as HTMLDivElement | null;
let Title = document.getElementById("Title") as HTMLInputElement | null;
let URL = document.getElementById("URL") as HTMLInputElement | null;


let youtube = new BookMark("youtube", "youtube.com");
let youtube2 = new BookMarkFun(youtube);
youtube2.Spawn("youtube", "youtube.com");


let facebook = new BookMark("facebook", "facebook.com");
let facebook2 = new BookMarkFun(facebook);
facebook2.Spawn("facebook", "facebook.com");


if (InputPopup == null || undefined) {
    alert("InputPopup not found.");
} else {
    InputPopup.onclick = function (id: MouseEvent) {
        if (PopupPanel == null || event == null) return;
        event.preventDefault();
        PopupPanel.style.display = "block";
    }

    if (ClosePopup == null || undefined) {
        alert("ClosePopup not found.");
    } else {
        ClosePopup.onclick = function (id: MouseEvent) {
            if (PopupPanel == null || event == null) return;
            event.preventDefault();
            PopupPanel.style.display = "none";
        }

        if (AddBookMark == null || undefined) {
            alert("AddBookMark not found.");
        } else {
            AddBookMark.onclick = function () {
                if (AddBookMark == null || event == null || PopupPanel == null || Title == null || URL == null) return;
                PopupPanel.style.display = "none";
                let a = Title.value;
                let b = URL.value;
                let bookMark = new BookMark(a, b);
                bookMark.setURL(b)
                let bookMarkFun = new BookMarkFun(bookMark)
                bookMarkFun.Spawn(a,b);
                Title.value = "";
                URL.value = "";
                
                
                

            }


        }
    }
    
}


