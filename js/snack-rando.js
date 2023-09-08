
// DOM elements
const generateBtn = document.getElementById("generateBtn");
const resultDiv = document.getElementById("result");
generateBtn.addEventListener("click", async () => {
    // Make the API request to fetch all drinks
    const url = 'https://the-cocktail-db.p.rapidapi.com/search.php?s=vodka';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'd6f2606d58msh81eaaa32d1f44e5p1b9486jsnb707d37370e7',
            'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
        }
    };
    try {
        const response = await fetch(url, options);
        const data = await response.json();
        if (data.drinks && data.drinks.length > 0) {
            // Get a random drink from the list
            const randomIndex = Math.floor(Math.random() * data.drinks.length);
            const randomDrink = data.drinks[randomIndex].strDrink;
            resultDiv.textContent = `Your random drink is: ${randomDrink}`;
        } else {
            resultDiv.textContent = 'No drinks found.';
        }
    } catch (error) {
        console.error(error);
        resultDiv.textContent = 'Error occurred while fetching the drink list.';
    }
});