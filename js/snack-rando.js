

// Function to generate a random drink
//function generateRandomDrink() {
    //const randomIndex = Math.floor(Math.random() * snacks.length);
    //return snacks[randomIndex];
//}

// DOM elements
const generateBtn = document.getElementById("generateBtn");
const resultDiv = document.getElementById("result");

// Event listener for the button click
//generateBtn.addEventListener("click", () => {
    //const randomDrink = generateRandomSnack();
   // resultDiv.textContent = `Your random drink is: ${randomDrink}`;
//});

generateBtn.addEventListener('click',)
    const url = 'https://the-cocktail-db.p.rapidapi.com/search.php?s=vodka';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '0578e63d4amshee76984ae253556p1fb441jsn418e7dce4027',
            'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
        }
    };
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }