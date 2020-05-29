export class BookMark {

title: string;
icon: string;
favourite: boolean = false;

constructor (ptitle: string, picon:string){
    this.title = ptitle;
    this.icon = "";
    let URL = document.getElementById("URL") as HTMLInputElement | null;
    var URL2 = URL?.value;
    if (URL2 == null ){
    console.log("damn son!")
    
} else{
    let picon =  URL2.replace('http://','').replace('https://','').replace('www\.','').split(/[/?#]/);
    let domain = picon[0];
    this.icon = `https://s2.googleusercontent.com/s2/favicons?domain=${domain}`;
}
}
setURL(id: string){
let URL = document.getElementById("URL") as HTMLInputElement | null;

}

getURL(){

}

} 

export class BookMarkFun {

bookmark: BookMark;
element: HTMLElement | null = null;


constructor(pBookmark: BookMark){
this.bookmark = pBookmark;
}

Spawn(id: string, id2: string){
this.element = document.createElement("div");
this.element.classList.add("BookMarkView");
let NewBookMark = document.getElementById("NewBookMark") as HTMLDivElement | null;
let URL = this.bookmark.icon;
//setting up icon image
let img = document.createElement("img") as HTMLImageElement;
img.setAttribute('src', URL);
this.element.appendChild(img);
//setting up bookmark title
let title = document.createElement("h4");
title.appendChild(document.createTextNode(this.bookmark.title));
this.element.appendChild(title);
//setting up url
let url = document.createElement("h6");
url.appendChild(document.createTextNode(URL));
this.element.appendChild(document.createTextNode(id2));
// setting up favourites icon
let favIcon=document.createElement('button');
favIcon.innerHTML = '<i class="fas fa-star"></i>';
favIcon.classList.add("favIcon")
this.element.appendChild(favIcon);
// setting up delete icon
//Still working on this
///////////////////////////////////////////////////
let DeleteIcon=document.createElement('button');
DeleteIcon.innerHTML = '<i class="fas fa-trash"></i>';
DeleteIcon.classList.add("DeleteIcon")
this.element.appendChild(DeleteIcon);
////////////////////////////////////////////////////
//bottom bitch
NewBookMark?.appendChild(this.element);


}

deleteBookMark(e: { target: any; }){
    let item = e.target;
    if (item == null) return;
    if (item.classList[0] === 'DeleteIcon') {
        let del = item.parentElement;
        del.remove();
    }

}

toggleFavourites(){

}
}
