let input = document.querySelector(".input");
let output = document.querySelector("#output");

input.addEventListener("input",()=>{
    let val = input.value;
    let out = val*2.2;

    output.innerHTML =out.toFixed(2);
})