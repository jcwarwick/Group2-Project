const snacks = [
    "Popcorn",
    "Chocolate Chip Cookies",
    "Chips and Salsa",
    "Ice Cream",
    "Pizza",
    "Fruit Salad",
    "Cheese and Crackers",
    "Pretzels",
    "Muffins",
    "Candy Bars",
];

// Function to generate a random snack
function generateRandomSnack() {
    const randomIndex = Math.floor(Math.random() * snacks.length);
    return snacks[randomIndex];
}

// DOM elements
const generateBtn = document.getElementById("generateBtn");
const resultDiv = document.getElementById("result");

// Event listener for the button click
generateBtn.addEventListener("click", () => {
    const randomSnack = generateRandomSnack();
    resultDiv.textContent = `Your random snack is: ${randomSnack}`;
});