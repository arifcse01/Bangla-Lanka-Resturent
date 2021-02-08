const displayButton = document.getElementById("search-button");
displayButton.addEventListener("click", function(){
    const inputMeal = document.getElementById("search-item").value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputMeal}`)
    . then(response => response.json())
    .then(data => displayMeal(data.meals))
    
    .catch((error)=>{
        window.alert("Invalid Meal");
    })
        
})

const displayMeal = mealName =>{    
    const searchMeal = document.getElementById("meals");
    searchMeal.innerHTML = "";
    mealName.forEach(mealItem => {        
        const newDiv = document.createElement("div");
        const mealInfo = `
            <img onclick="detailsMeal('${mealItem.idMeal}')" src="${mealItem.strMealThumb}">
            <h3 class="meal-name">${mealItem.strMeal}</h3>        
        `;
        newDiv.innerHTML = mealInfo;
        searchMeal.appendChild(newDiv);
    })
    
}

const detailsMeal = (mealTitle) =>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealTitle}`;  
    fetch(url)
    .then(response => response.json())
    .then(data => ingredientList(data.meals[0]));

}

const ingredientList = mealDetails =>{
    console.log(mealDetails)
    const mealList = document.getElementById("meal-details");
    mealList.innerHTML =`
        <img src="${mealDetails.strMealThumb}">
        <h3 class="title">${mealDetails.strMeal}</h3>
        <h5>${mealDetails.strArea}</h5>
        <p>${mealDetails.strIngredient1}</p>
        <p>${mealDetails.strIngredient2}</p>
        <p>${mealDetails.strIngredient3}</p>
        <p>${mealDetails.strIngredient4}</p> 
        <p>${mealDetails.strIngredient5}</p>
        <p>${mealDetails.strIngredient6}</p>      
        `
} 


