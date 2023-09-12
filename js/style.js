// document.addEventListener("DOMContentLoaded", function() {
//     const searchInput = document.getElementById('searching');
//     const searchButton = document.querySelector(".search-btn");
//   console.log("DOMContentLoaded event triggered");
//   // Function to perform the search
//   function performSearch() {
//     const searchingInput = searchInput.value;
//     if (searchingInput.trim() !== "") {
//       window.location.href = `movie-rating-page.html?search=${encodeURIComponent(searchingInput)}`;
//     }
//   }
//   searchInput.addEventListener("keydown", function(event) {
//     if (event.key === "Enter") {
//       event.preventDefault();
//       performSearch(); // Call the search function when Enter is pressed
//     }
//   });
//   searchButton.addEventListener("click", function(event) {
//     event.preventDefault();
//     console.log("Search button clicked");
//     performSearch(); // Call the search function when the button is clicked
//   });
// });



// document.addEventListener("DOMContentLoaded", function() {
//     const searchInput = document.getElementById('searching');
//     const searchButton = document.querySelector(".search-btn");
//       // Function to perform the search
//       function performSearch() {
//         const searchingInput = searchInput.value;
//         if (searchingInput.trim() !== "") {
//           window.location.href = `movie-rating-page.html?search=${encodeURIComponent(searchingInput)}`;
//         console.log(searchingInput);
//         }
//       }
//       searchInput.addEventListener("keydown", function(event) {
//         if (event.key === "Enter") {
//           event.preventDefault();
//           performSearch(); // Call the search function when Enter is pressed
//         }
//       });
      searchButton.addEventListener("click", function(event) {
        event.preventDefault();
        window.location.href = `movie-rating-page.html`;
        console.log("Search button clicked");

        performSearch(); // Call the search function when the button is clicked
      });
   




