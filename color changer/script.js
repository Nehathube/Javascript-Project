let button = document.querySelectorAll(".div");
let body = document.querySelector("body");




button.forEach((div)=>{
    div.addEventListener("click",(e)=>{
        console.log(e);
        console.log(e.target);

        if(e.target.id==="div1"){
            body.style.backgroundColor="pink";
        }
        if(e.target.id==="div2"){
            body.style.backgroundColor="brown";
        }
        if(e.target.id==="div3"){
            body.style.backgroundColor="green";
        }
        if(e.target.id==="div4"){
            body.style.backgroundColor="blue";
        }
    })
})
