function getInputValue(inputId){
    const depositInput = document.getElementById(inputId);
    const depositAmounttext = depositInput.value;
    const depositAmount = parseFloat(depositAmounttext);
    depositInput.value =" ";
    return depositAmount;
    }

function updateTotalField(totalfieldid,  depositAmount){
    const depositTotal = document.getElementById(totalfieldid);
    const depositTotalText = depositTotal.innerText;
    const previusdepositTotalAmount = parseFloat(depositTotalText);
    depositTotal.innerText = previusdepositTotalAmount + depositAmount;
    }

    function getCurrentBalance(){
        const balancetotalupadate = document.getElementById("balance-total");
        const balancetotalText = balancetotalupadate.innerText;
        const previusbalanceupadate = parseFloat(balancetotalText); 
        return previusbalanceupadate;
    }

    function updateBalance(depositAmount, isadd){
        const balancetotalupadate = document.getElementById("balance-total");
        const previusbalanceupadate = getCurrentBalance();
        if(isadd == true){
            balancetotalupadate.innerText = previusbalanceupadate + depositAmount;
        }
        else{
            balancetotalupadate.innerText = previusbalanceupadate - depositAmount;
        }
      }




document.getElementById("Deposit-button").addEventListener
("click", function(){
    const depositAmount = getInputValue("Deposit");
    if(depositAmount > 0){
        updateTotalField('deposit-total', depositAmount);
        updateBalance(depositAmount, true);
    }
});



// WITHDRAW BUTTON CONNACT
document.getElementById("Withdraw-button").addEventListener("click", function(){
// input k connect korailam 
    const withdrawAmount= getInputValue("Withdraw-input");
    const currentbalance = getCurrentBalance();
    if(withdrawAmount > 0 && withdrawAmount < currentbalance){
        updateTotalField("Withdraw-total", withdrawAmount)
        updateBalance(withdrawAmount, false);
    }
    if(withdrawAmount > currentbalance){
        console.log('you cannot withdraw more then with your balance')
    }

});