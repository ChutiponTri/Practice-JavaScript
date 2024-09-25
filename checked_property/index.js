// checked = property that determines the checked state of an HTML checkbox or radio button element

// Declare Variables
const checkbox = document.getElementById("myCheckBox");
const visa = document.getElementById("visaButton");
const master = document.getElementById("masterButton");
const paypal = document.getElementById("paypalButton");
const button = document.getElementById("mySubmit");
const result = document.getElementById("myResult");
const payment_result = document.getElementById("paymentResult");

// Declare Function
function on_click(){
    if (checkbox.checked){
        result.textContent = `You are subscribed`;
        
        if (visa.checked){
            payment_result.textContent = `You are paying with Visa`;
        }
        else if (master.checked){
            payment_result.textContent = `You are paying with MasterCard`;
        }
        else if (paypal.checked){
            payment_result.textContent = `You are paying with PayPal`;
        }
        else{
            payment_result.textContent = `Please Select Payment Method`;
        }
    }
    else{
        result.textContent = `You are NOT subscribed`;
    }
}


button.onclick = on_click;
