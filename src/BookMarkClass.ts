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
img.setAttribute('src', URL)
this.element.appendChild(img);
//the start of the appendaning with title and URL
this.element.appendChild(document.createTextNode(this.bookmark.title))
this.element.appendChild(document.createTextNode(" "))
this.element.appendChild(document.createTextNode(id2))
//bottom bitch
NewBookMark?.appendChild(this.element);


}

deleteBookMark(){

}

toggleFavourites(id : string){

}
}
