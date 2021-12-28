function makePizza(flavour){
    setTimeout(function(){
        console.log("Preparing Pizza");
        return "prepared" + flavour + "Pizza";
    },1000)
   return "Order Recieved " + flavour + " Pizza"
}
 console.log(makePizza("Tikka"));