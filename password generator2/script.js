const number = "0123456789";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const symbol = "!@#$%^&*()_+/";


let password_output = document.querySelector("#pass-out");
let copy_btn = document.querySelector(".copy");
let button = document.querySelector("#submit");
let numbers = document.querySelector("#numbers");
let symbols = document.querySelector("#symbols");
let upper = document.querySelector("#upper");
let lower = document.querySelector("#lower");
let lengthp = document.querySelector("#length");
console.log(lengthp.value);
console.log(upper.checked);
console.log(lower.checked);



button.addEventListener("click",()=>{
    let str = "";
    if(upper.checked){
         str+=uppercase;
    }

    if(lower.checked){
        str = str+lowercase;
        
    }

    if(numbers.checked){
        str+=number;
    }

    if(symbols.checked){
        str+=symbol;
        
    }
    console.log(str);
    let password = "";
    for(let i = 0;i<lengthp.value;i++){
        console.log(str.length,"str.length");
        let index = Math.floor(Math.random()*str.length);
        console.log(index,"index");
        console.log("Math.random()",Math.random());
        console.log("math.random()*str.length",Math.random()*str.length);
        console.log("Math.floor(Math.random()*str.length",Math.floor(Math.random()*str.length));
        console.log(str[index]);
        password+=str[index];
        console.log("password=",password);
        password_output.value = password;
    }
})


copy_btn.addEventListener("click",()=>{
    if(password_output.value === ""){
        alert("please Generate password First");
    }
    else{
        const newele = document.createElement('textarea');
        newele.value = password_output.value;
        document.body.appendChild(newele);
        newele.select();
        // password_output.select()
        document.execCommand("copy");
        alert("Password copied to Clickbord");
        newele.remove();
    }
})


    





