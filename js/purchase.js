// ** connection

document.getElementById('purchase').addEventListener('click', function(){

    const totalAmount = getTextInput('total-amount');

    setTheAmount('discount-amount',totalAmount);

    
})