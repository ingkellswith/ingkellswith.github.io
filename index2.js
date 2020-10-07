const title=document.querySelector("#title");

const BASE_COLOR="blue";
const OTHER_COLOR="#c8d6e5";

function handleClick(){
    const currentColor=title.style.color;
    if(currentColor===BASE_COLOR){
        title.style.color=OTHER_COLOR;
    }else{
        title.style.color=BASE_COLOR;
    }
}

function init(){
    title.style.color=BASE_COLOR;
    title.addEventListener("mouseenter",handleClick);
}
init();