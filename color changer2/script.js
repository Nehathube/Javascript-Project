let button = document.querySelector("#btn");


const getcolor = ()=>{
    const randomNumer1 = Math.floor(Math.random()*16777215)
    const randomCode1 = "#"+ randomNumer1.toString(16);
    const randomNumer2 = Math.floor(Math.random()*16777215)
    const randomCode2 = "#"+ randomNumer2.toString(16);
    console.log(randomNumer1,randomCode1,randomNumer2,randomCode2);

    // document.querySelector("#hcode").innerText=randomCode;
    document.querySelector("body").style.backgroundImage='-moz-linear-gradient()';

}

button.addEventListener("click",getcolor);
getcolor();
 

// document.querySelector("#btn").addEventListener("click",(e)=>{
//     body.style.backgroundColor="red";
// })