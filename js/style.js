document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.getElementById("menu-btn");
    const menuItems = document.getElementById("menu-items");
    const searchInput = document.getElementById('searching');
    const searchButton = document.querySelector(".search-btn");

    menuButton.addEventListener("click", function() {
        menuItems.classList.toggle("active");
    });

    searchButton.addEventListener("click", function(event) {
        event.preventDefault();
        const searchingInput = searchInput.value;
        if (searchingInput.trim() !== "") {
           window.location.href = `movie-rating-page.html?search=${encodeURIComponent(searchingInput)}`;
       
        }
    });
});
