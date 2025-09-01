let result = document.getElementById('result');
let searchBtn = document.getElementById('search-btn');
let url = "https://thecocktaildb.com/api/json/v1/1/search.php?s=";

let getInfo = () => {
    let userInput = document.getElementById('user-input').value;

    if (userInput.length == 0) {
        result.innerHTML = `<h3 class="text-red-500 font-medium">The input field cannot be empty</h3>`;
    } else {
        fetch(url + userInput)
            .then((response) => response.json())
            .then((data) => {
                if (!data.drinks) {
                    result.innerHTML = `<h3 class="text-red-500 font-medium">Sorry, we couldn't find any cocktail with that name.</h3>`;
                    return;
                }

                let myDrink = data.drinks[0];
                let count = 1;
                let ingredients = [];

                for (let i in myDrink) {
                    if (i.startsWith("strIngredient") && myDrink[i]) {
                        let ingredient = myDrink[i];
                        let measure = myDrink[`strMeasure${count}`] ? myDrink[`strMeasure${count}`] : "";
                        ingredients.push(`${measure} ${ingredient}`);
                        count += 1;
                    }
                }
                
                result.innerHTML = `
                <div class="bg-white shadow-lg rounded-xl p-6 space-y-6 text-center">
                    <img src="${myDrink.strDrinkThumb}" alt="${myDrink.strDrink}" 
                        class="w-40 h-40 object-cover rounded-full mx-auto shadow-md">
                    
                    <h2 class="text-2xl font-bold text-purple-600">${myDrink.strDrink}</h2>
                    
                    <div class="text-left">
                        <h3 class="text-lg font-semibold text-gray-700 mb-2">Ingredients:</h3>
                        <ul class="ingredients list-disc list-inside text-gray-600 space-y-1"></ul>
                    </div>
                    
                    <div class="text-left">
                        <h3 class="text-lg font-semibold text-gray-700 mb-2">Instructions:</h3>
                        <p class="text-gray-600 leading-relaxed">${myDrink.strInstructions}</p>
                    </div>
                </div>
                `;

                let ingredientsCon = document.querySelector(".ingredients");
                ingredients.forEach(item => {
                    let listItem = document.createElement("li");
                    listItem.innerText = item;
                    ingredientsCon.appendChild(listItem);
                });
            })
            .catch(() => {
                result.innerHTML = `<h3 class="text-red-500 font-medium">Sorry, something went wrong. Try again later.</h3>`;
            });
    }
};

window.addEventListener('load', getInfo);
searchBtn.addEventListener('click', getInfo);
