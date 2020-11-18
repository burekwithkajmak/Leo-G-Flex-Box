var products = 0;

function Addcart() {
    
    $('.notification').fadeIn()
    setTimeout(function() { 
        $('.notification').fadeOut()
    }, 2000);

    products = products + 1;
    var countElement = document.getElementById("count");
    countElement.innerHTML = products;

}


