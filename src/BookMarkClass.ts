export class BookMark {

title: string;
icon: string;
favourite: boolean = false;
URL: string;

constructor (ptitle: string, picon:string){
    this.title = ptitle;
    this.icon = "";
    this.URL = "";
    var URL2 = picon;
    if (URL2 == null ){    
} else{
    let picon =  URL2.replace('http://','').replace('https://','').replace('www\.','').split(/[/?#]/);
    let domain = picon[0];
    console.log(domain);
    this.icon = `https://s2.googleusercontent.com/s2/favicons?domain=${domain}`;
}
}
setURL(id: string){
id = this.URL

}

getURL(){
if (this.URL == null) {
    return "";
}
return this.URL
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
title.appendChild(document.createTextNode(id));
this.element.appendChild(title);
//setting up url
let url = document.createElement("a");
url.setAttribute('href', id2);
url.classList.add("urlLimit");
if (id2.length > 20){
url.appendChild(document.createTextNode(id2.substring(0,20)+ "..."));
}
else {
url.appendChild(document.createTextNode(id2)); 
}
this.element.appendChild(url);
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
//bottom of the appendaning
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
