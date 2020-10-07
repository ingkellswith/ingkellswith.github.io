const title=document.querySelector("#title");
const CLICKED_CLASS="clicked";
function handleClick(){
    //const hasClass=title.classList.contains(CLICKED_CLASS);
    //const currentClass=title.className;
    /*if(!hasClass){
        //title.className=CLICKED_CLASS;
        title.classList.add(CLICKED_CLASS);
    }else{
        title.classList.remove(CLICKED_CLASS);
    }*/
    title.classList.toggle(CLICKED_CLASS);
}

function init(){
    
    title.addEventListener("click",handleClick);
}
init();