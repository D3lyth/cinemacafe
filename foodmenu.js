function showAlert(e) {
    var myText = ("Item has been added to cart."+e.target.innerHTML);
   console.log(e.target.previousSibling);
   var price = e.target.previousSibling;
   var item = price.previousSibling;
   var billItem = document.createElement("p");
   billItem.innerHTML = `${item.innerHTML}     ${price.innerHTML}`;
   var bill = document.getElementById("bill");
console.log (bill);
console.log (billItem);
bill.appendChild(billItem);
}

var foodItems = document.getElementsByClassName("foodbutton");
console.log(foodItems);

Array.from(foodItems).forEach( 
    function eventListener(i) {
        i.addEventListener("click", showAlert);
    }
)

var drinkItems = document.getElementsByClassName("drinkbutton");
console.log(drinkItems);

Array.from(drinkItems).forEach( 
    function eventListener(i) {
        i.addEventListener("click", showAlert);
    }
)

var iceCreamItems = document.getElementsByClassName("scoopbutton");
console.log(iceCreamItems);

Array.from(iceCreamItems).forEach( 
    function eventListener(i) {
        i.addEventListener("click", showAlert);
    }
)