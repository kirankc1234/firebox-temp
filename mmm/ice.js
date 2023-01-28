const button = document.querySelector(".toggleButton");
const rowi = document.querySelector(".order1");
const rowj = document.querySelector(".order3");

button.addEventListener("click",function(){
    if(rowi.getAttribute("id")){
rowi.removeAttribute("id");
rowj.removeAttribute("id");
    }
    else{
        rowi.setAttribute("id","order1");
        rowj.setAttribute("id","order3");
    }
})