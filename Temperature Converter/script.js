let celcius = document.querySelector("#cel");
let kelvin = document.querySelector("#kel");
let farenheit = document.querySelector("#far");


celcius.addEventListener("input",()=>{

    let c = parseFloat(celcius.value);
    let k = (c*9/5)+32;
    let f = c+273.15;

    kelvin.value = k;
    farenheit.value = f;
})

farenheit.addEventListener("input",()=>{
    let f = parseFloat(farenheit.value);
    let c = (f-32) * 5/9;
    let k = (f-32) * 5/9 + 273.15;
    celcius.value = c;
    kelvin.value = k;
})
kelvin.addEventListener("input",()=>{
    let k = parseFloat(kelvin.value);
    let c = k - 273.15;
    let f = (k - 273.15)*9/5+32;
    celcius.value = c;
    farenheit.value = k;
})