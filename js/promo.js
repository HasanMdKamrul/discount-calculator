document.getElementById('promo').addEventListener('keyup', function(e){
    
    if (e.target.value === 'DOM') {
        document.getElementById('discount').removeAttribute('disabled');
    } else{
        document.getElementById('discount').setAttribute('disabled','true');
    }
})