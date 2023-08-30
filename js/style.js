document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.getElementById("menu-btn");
    const menuItems = document.getElementById("menu-items");
    const searchButton = document.querySelector(".search-btn");

    menuButton.addEventListener("click", function() {
        menuItems.classList.toggle("active");
    });

    searchButton.addEventListener("click", function(event) {
        event.preventDefault();
        const searchingInput = document.getElementById("searching").value;
        if (searchingInput.trim() !== "") {
            alert("You want to search for: " + searchingInput);
        } else {
            alert("Please enter a movie name.");
        }
    });
});
