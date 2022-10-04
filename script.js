let inputEl = document.querySelector("#bill-amount");
let buttonEl1 = document.querySelector("#calculate-tip12");
let tipContainer12 = document.querySelector("#tip-amount12");
let tipAmount12 = 0;
let buttonEl2 = document.querySelector("#calculate-tip15");
let tipContainer15 = document.querySelector("#tip-amount15");
let tipAmount15 = 0;
let buttonEl3 = document.querySelector("#calculate-tip20");
let tipContainer20 = document.querySelector("#tip-amount20");
let tipAmount20 = 0;



function handleTipCalculation12(){
    
    console.log(inputEl.value)

    tipAmount12 = inputEl.value * .12;

    tipContainer12.innerHTML = "You should tip " + "$" + tipAmount12.toFixed(2)

}

    buttonEl1.addEventListener("click", handleTipCalculation12);

function handleTipCalculation15(){
   
    tipAmount15 = inputEl.value * .15;

    tipContainer15.innerHTML = "You should tip " + "$" + tipAmount15.toFixed(2)

}

    buttonEl2.addEventListener("click", handleTipCalculation15);

function handleTipCalculation20(){

    tipAmount20 = inputEl.value * .20;
    
    tipContainer20.innerHTML = "You should tip " + "$" + tipAmount20.toFixed(2)
}
    buttonEl3.addEventListener("click", handleTipCalculation20);