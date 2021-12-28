function makePizza(flavour){
    return new Promise((resolve,reject)=> {
        if(flavour == "fajita") reject("fajita is out of stock");
setTimeout(function(){
        console.log("Preparing Pizza");
        resolve(flavour + " Pizza");
    },1000);
    

    });
}
makePizza("fajita").then(message=>{
    console.log(message);
}).catch(message=>{
    console.log(message);
})