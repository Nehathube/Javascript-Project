const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "1234567890";
const symbols = "!@#$%^&*()_+/";

const passBox = document.querySelector("#pass-box");
const totalChar = document.querySelector("#total-char");
const upperInput = document.querySelector("#uppercase");
const lowerInput = document.querySelector("#lower-case");
const numberInput = document.querySelector("#numbers");
const symbolSet = document.querySelector("#symbols");
const button = document.querySelector("#btn");

const getRandomData = (dataset)=>{
    return dataset[Math.floor(Math.random()*dataset.length)]
}

const generatePassword =(password="")=>{
    if(upperInput.checked){
        password += getRandomData(upperSet)
    }
    console.log(password);

}
generatePassword();

button.addEventListener("click",
    function () {
        generatePassword();
    }
    
)

