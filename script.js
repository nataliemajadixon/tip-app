let inputEl = document.querySelector("#bill-amount");
let buttonEl = document.querySelector("#calculate-tip");
let tipContainer = document.querySelector("#tip-amount");
let tipAmount = 0;

function handleTipCalculation(){
    
console.log(inputEl.value)

tipAmount = inputEl.value * .12;

tipContainer.innerHTML = "You should tip " + "$" + tipAmount.toFixed(2)

}

buttonEl.addEventListener("click", handleTipCalculation);
