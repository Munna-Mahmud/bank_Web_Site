document.getElementById('deposit-button').addEventListener('click', function () {

    const depositeInput = document.getElementById('deposite-input');
    const depositValueText = depositeInput.value;
    const depositValue = parseFloat(depositValueText);


    const depositTotal = document.getElementById('deposit-total');
    const depositBox = depositTotal.innerText;
    const depositBoxText = parseFloat(depositBox);
    const depositTotalTaka = depositValue + depositBoxText;

    depositTotal.innerText = depositTotalTaka;

    // clear section 
    depositeInput.value = '';
    //  update balance 

    const balanceTotal = document.getElementById('balance-total');
    const balanceBox = balanceTotal.innerText;
    const balanceBoxText = parseFloat(balanceBox);
    const balanceTotalTaka = balanceBoxText + depositBoxText;

    balanceTotal.innerText = balanceTotalTaka;

});

// withdraw update 

document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawValueText = withdrawInput.value;
    const withdrawValue = parseFloat(withdrawValueText);

    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawBox = withdrawTotal.innerText;
    const withdrawBoxText = parseFloat(withdrawBox);
    const withdrawTotalTaka = withdrawValue + withdrawBoxText;

    withdrawTotal.innerText = withdrawTotalTaka;


    // update balanbce 

    const balanceTotal = document.getElementById('balance-total');
    const balanceBox = balanceTotal.innerText;
    const balanceBoxText = parseFloat(balanceBox);
    const restMoney = balanceBoxText - withdrawBoxText;

    balanceTotal.innerText = restMoney;




    // clear this.inputMode 
    withdrawInput.value = '';
});





































// // handle deposite button 
// document.getElementById('deposit-button').addEventListener('click', function () {
//     //update deposit  total
//     const depositInput = document.getElementById('deposite-input');
//     const newDepositAmountText = depositInput.value;
//     const newDepositAmount = parseFloat(newDepositAmountText);

//     const depositTotal = document.getElementById('deposit-total');
//     const previousDepositText = depositTotal.innerText;
//     const previousDepositAmount = parseFloat(previousDepositText);
//     const newDepositTotal = previousDepositAmount + newDepositAmount;

//     depositTotal.innerText = newDepositTotal;
//     // update account balace 
//     const balaceTotal = document.getElementById('balance-total');

//     const balaceTotalText = balaceTotal.innerText;
//     const previousBalanceTotal = parseFloat(balaceTotalText);
//     const newBalanceTotal = previousBalanceTotal + newDepositAmount;
//     balaceTotal.innerText = newBalanceTotal;


//     //clear the deposit input
//     depositInput.value = '';
// });
// //handle evenet withdraw total
// const withdrawTotal = document.getElementById('withdraw-button').addEventListener('click', function () {

//     const withdrawInput = document.getElementById('withdraw-input');
//     const withdrawAmountText = withdrawInput.value;
//     const newWithdrawAmount = parseFloat(withdrawAmountText);
//     //  console.log(newWithdrawAmount);
//     //set withdraw total
//     const withdrawTotal = document.getElementById('withdraw-total');
//     const previousWithdrawText = withdrawTotal.innerText;
//     const previousWithdrawTotal = parseFloat(previousWithdrawText);
//     const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
//     withdrawTotal.innerText = newWithdrawTotal;

//     //update balance
//     const balanceTotal=document.getElementById('balance-total');
//     const previousBalanceText=balanceTotal.innerText;
//     const previousBalanceTotal=parseFloat(previousBalanceText);
//    const newBalanceTotal=previousBalanceTotal -newWithdrawAmount;

//    balanceTotal.innerText=newBalanceTotal;

//     //clear withdraw
//     withdrawInput.value = '';

// })

