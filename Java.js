
  
  var totalPrice = ticketPriceprice * quantity;document.getElementById('java.js').addEventListener('submit',function(event) {
     var age = parseInt(document.getElementById('age').value);
     var quantity = parseInt(document.getElementById('quantity').value);
     var totalPrice =ticketPrice * quantity;
    document.getElementById('totalPrice').innerHTML = "Total Price: R" + totalPrice;
    document.getElementById('totalPrice').innerHTML ="totalPrice: R" + totalPrice;
    document.getElementById('thabile').style.display='block';
    var price = 0;
}); 
function calculatePrice() {
    if (age <= 0 || age >= 65) {
      return 0;
    } else if (age >= 3 && age <= 12) {
      return  100;
    } else if (age > 12 && age <= 18) {
      return 150;
    } else if (age > 18 && age <= 60) {
      return 200;
    
    }
}
  