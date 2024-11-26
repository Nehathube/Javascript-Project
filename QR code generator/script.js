const button = document.querySelector("#btn");
const input = document.querySelector("#input");
const image = document.querySelector("#qrimg");

button.addEventListener("click",()=>{
    const inputVal = input.value;
    if(!inputVal){
        alert("please Enter value");
    }
    else{
        qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputVal}`;
        qrimg.alt = `QR Code for ${inputVal}`;
        
    }
})
