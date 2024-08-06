//js start
//IIFE immediatly invoked function expression
//fetch function
( async function(){
const response = await fetch("./recipes.json");
const recipes = await  response.json()
console.log(recipes)
})();