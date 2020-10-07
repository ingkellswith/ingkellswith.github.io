const title=document.querySelector("#title");//css와 비슷
console.dir(title);
title.innerHTML="what?";
console.dir(document);
title.style.color="blue";
document.title="i own mine";
function handleResize(event){
    console.log(event);
}
window.addEventListener("resize",handleResize);
//handleResize()를 안쓰고 handleResize를 쓰면 처음에 호출하지 않고 이벤트가 발생할 때마다 호출된다.
function handleClick(){
    title.style.color="red";
}
title.addEventListener("click",handleClick);