// //js start
// //IIFE immediatly invoked function expression
// //fetch function
// ( async function(){
// const response = await fetch("./recipes.json");
// const recipes = await  response.json()

// const inputElement = document.getElementById("searchInput")
// const btnElement = document.getElementById("searchBtn")
// const listElement = document.getElementById("recipe-list")
// const detailsElement = document.getElementById("recipeDetailsContainer")


// // function loadRecipeDetails(recipe) {
// //     detailsElem.innerHTML = `
// //         <h2 class="title">${recipe.title}</h2>
// //         <h3>Ingredients:</h3>
// //         <ul>${recipe.ingredients.map(function (ingredient) {
// //           return "<li>" + ingredient + "</li>"
// //         }).join("")}</ul>
// //         <h3>Instruction:</h3>
// //         <div>${recipe.instructions}</div>
// //     `;
// //   }

// /////////////////////////////////////////////////////// or ////////////////////////////
// function loadRecipeDetails(recipe) {
//     // Create an HTML string for the ingredients list using a normal function
//     const ingredientsList = recipe.ingredients
//         .map(function(ingredient,i) {
//             return `<li class= "lies">${i+1} -  ${ingredient}</li>`
//         })
//         .join("");

//     // Set the HTML content of detailsElem with the recipe details
//     detailsElement.innerHTML = `
//         <h2 class="title">${recipe.title}</h2>
//         <h3>Author :</h3>
//         <p class="red">${recipe.author}</p>
//         <h3>Ingredients:</h3>
//         <ul>${ingredientsList}</ul>
//         <h3>Instructions:</h3>
//         <div>${recipe.instructions}</div>
//     `;
// }


// function displaySearchResults(results) {

//     inputElement.value = ""
//     // Clear previous search results from the list
//     listElement.innerHTML = '';

//     // Iterate over the results array
//     results.forEach(function(recipe) {
//         // Create a list item for each recipe
//         const listItem = document.createElement('li');
//         listItem.innerHTML = `
//             <div class="title">${recipe.title}</div>
//             <div class="description">${recipe.description || "No description"}</div>
//         `;
        
//         listItem.addEventListener("click",function(){
//             loadRecipeDetails(recipe)
//         })

//         // Append the list item to the list element
//         listElement.appendChild(listItem);
//     });
// }


// // Define the search function to filter recipes based on user input
// function search() {
//     // Get the value from the input element (user's search query)
//     const query = inputElement.value.toLowerCase(); // Convert to lower case for case-insensitive search
    
//     // Filter the recipes array to find matching recipes
//     const result = recipes.filter(function(recipe) {
//         // Check if the recipe title includes the search query
//         const recipesTitles = recipe.title.toLowerCase().includes(query);
        
//         // Check if any of the recipe ingredients include the search query
//         const recipesIngredients = recipe.ingredients.join(" ").toLowerCase().includes(query);
        
//         // Return true if either the title or the ingredients match the query
//         return recipesTitles || recipesIngredients;
//     });
    
  

//     displaySearchResults(result)
// }

// // Attach the search function to the click event of the button element
// btnElement.addEventListener("click", search);


// })();




// JavaScript start
// IIFE - Immediately Invoked Function Expression
(async function() {
    // Fetching the recipes data from a JSON file
    const response = await fetch("./recipes.json"); // Fetch the JSON file from the server
    const recipes = await response.json(); // Parse the JSON data into a JavaScript object

    // Cache DOM elements for efficient manipulation
    const inputElement = document.getElementById("searchInput"); // Input field for search query
    const btnElement = document.getElementById("searchBtn"); // Button to trigger the search
    const listElement = document.getElementById("recipe-list"); // UL element to display the list of recipes
    const detailsElement = document.getElementById("recipeDetailsContainer"); // DIV element to show recipe details

    /**
     * Function to load and display recipe details
     * @param {Object} recipe - The recipe object containing details to be displayed
     */
    function loadRecipeDetails(recipe) {
        // Generate an HTML string for the list of ingredients with index
        const ingredientsList = recipe.ingredients
            .map(function(ingredient, i) {
                return `<li class="lies">${i + 1} - ${ingredient}</li>`; // Each ingredient is numbered
            })
            .join(""); // Join all ingredient list items into a single string

        // Set the HTML content of detailsElement to show the selected recipe's details
        detailsElement.innerHTML = `
            <h2 class="title">${recipe.title}</h2>
            <h3>Author:</h3>
            <p class="red">${recipe.author}</p> <!-- Display recipe author -->
            <h3>Ingredients:</h3>
            <ul>${ingredientsList}</ul> <!-- Display list of ingredients -->
            <h3>Instructions:</h3>
            <div>${recipe.instructions}</div> <!-- Display recipe instructions -->
        `;
    }

    /**
     * Function to display search results in the list
     * @param {Array} results - Array of recipe objects that match the search query
     */
    function displaySearchResults(results) {

if(results.length === 0){
    inputElement.value = ""
    alert("no")
    return;
}else{
      // Clear the previous search results from the list
      listElement.innerHTML = '';

      // Iterate over each recipe in the results array
      results.forEach(function(recipe) {
          // Create a new list item for each recipe
          const listItem = document.createElement('li');
          listItem.innerHTML = `
              <div class="title">${recipe.title}</div> <!-- Display recipe title -->
              <div class="description">${recipe.description || "No description"}</div> <!-- Display recipe description or a fallback message -->
          `;
          
          // Add an event listener to handle clicks on the list item
          listItem.addEventListener("click", function() {
              loadRecipeDetails(recipe); // Load and display details of the clicked recipe
          });

          // Append the newly created list item to the listElement
          listElement.appendChild(listItem);
      });
}

      
    }

    /**
     * Function to perform a search based on user input
     */
    function search() {
        if(inputElement.value === ""){
            alert("no")
          
        }else{
            console.log(inputElement.value)
 // Get the value from the input field and convert it to lowercase for case-insensitive search
 const query = inputElement.value.toLowerCase();
        
 // Filter the recipes array to find recipes that match the search query
 const result = recipes.filter(function(recipe) {
     // Check if the recipe title includes the search query
     const recipesTitles = recipe.title.toLowerCase().includes(query);
     
     // Check if any of the recipe ingredients include the search query
     const recipesIngredients = recipe.ingredients.join(" ").toLowerCase().includes(query);
     
     // Return true if either the title or the ingredients match the query
     return recipesTitles || recipesIngredients; //yaha sa kaam karna orrr>>>>>>>>>>>>>>>>>
 });
console.log(result)
 // Display the filtered search results
 displaySearchResults(result);
        }
       
    }

    // Attach the search function to the click event of the search button
    btnElement.addEventListener("click", search);

    // Optionally, you could display all recipes by default when the page loads
    // Uncomment the following line if you want to show all recipes on page load
    displaySearchResults(recipes);
})();