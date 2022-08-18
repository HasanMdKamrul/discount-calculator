// ** connection

document.getElementById('discount').addEventListener('click', function(){

    const totalAmount = getTextInput('total-amount');

    const discount = discountedAmount(totalAmount);

    setTheAmount('discount-amount',discount);

   
});




// const promo = getPromoCode('promo');

// console.log(promo)


// promo === 'DOM' ? document.getElementById('discount').removeAttribute('disabled') : document.getElementById('discount').setAttribute('disabled','true');