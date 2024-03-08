document.getElementById('entryForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get age and quantity from the form
    var age = parseInt(document.getElementById('age').value);
    var quantity = parseInt(document.getElementById('quantity').value);
    
    // Calculate ticket price and total price
    var ticketPrice = calculatePrice(age);
    var totalPrice = ticketPrice * quantity;
    
    // Display total price
    document.getElementById('totalPrice').innerHTML = "Total Price: R" + totalPrice;
    
    // Show the div containing the total price
    document.getElementById('thabile').style.display = 'block';
});

function calculatePrice(age) {
    if (age <= 0 || age >= 65) {
      return 0;
    } else if (age >= 3 && age <= 12) {
      return 100;
    } else if (age > 12 && age <= 18) {
      return 150;
    } else {
      return 200;
    }
}

  