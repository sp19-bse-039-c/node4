const axios = require("axios");

axios.get("https://usman-recipes.herokuapp.com/api/recipes")
.then(res=>{
    console.log(res.data);
})
.catch(res=>{
    console.log(res);
})