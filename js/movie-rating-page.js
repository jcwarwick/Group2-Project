document.addEventListener("DOMContentLoaded", function () {
  const movieResults = document.getElementById('movie-results');
  const movieTemplate = document.getElementById('movie-template');
  const searchInput = document.getElementById('searching');
  const searchButton = document.querySelector(".search-btn");

  // Function to render a movie in the list
  function renderMovie(item) {
    var name = item.l;
    var poster = item.i.imageUrl;
    var releaseDate = item.y;
    const movieBox = document.importNode(movieTemplate.content, true);
    const img = movieBox.querySelector('img');
    const title = movieBox.querySelector('h2');
    const releaseYear = movieBox.querySelector('p');
    img.src = poster;
    img.alt = name;
    title.textContent = name;
    releaseYear.textContent = `Release Year: ${releaseDate}`;

    // Add event listener for submitting a review
    const submitReviewBtn = movieBox.querySelector('.submit-btn');
    submitReviewBtn.addEventListener("click", function (event) {
      event.preventDefault();
      const reviewTextarea = document.querySelector("#review");
      const ratingStars = document.querySelectorAll('.rating-star');
      const streamingServiceDropdown = document.querySelector("#streaming-service");

      // Get the selected rating
      let selectedRating = 0;
      ratingStars.forEach(function (starButton, index) {
        if (starButton.classList.contains("starChecked")) {
          selectedRating = index + 1;
        }
      });

         // Save all information to local storage
         const reviewData = {
          movieTitle: name,
          review: reviewTextarea.value, // Save the review text
          rating: selectedRating, // Save the rating
          streamingService: streamingServiceDropdown.value, // Save the streaming service
        };
  
        // Store the review data in an array (you can append to an existing array if needed)
        const reviews = JSON.parse(localStorage.getItem('userReviews')) || [];
        reviews.push(reviewData);
        localStorage.setItem('userReviews', JSON.stringify(reviews));
      });
  

    // Add event listener for rating stars
    const ratingStars = movieBox.querySelectorAll('.rating-star');
    ratingStars.forEach(function (starButton, index) {
      starButton.addEventListener("click", function () {
        for (let i = 0; i <= index; i++) {
          ratingStars[i].classList.add("starChecked");
        }
        for (let i = index + 1; i < ratingStars.length; i++) {
          ratingStars[i].classList.remove("starChecked");
        }
      });
    });

    movieResults.appendChild(movieBox);
  }

  // Function to fetch movie data and render movies
  function fetchAndRenderMovies(searchTerm) {
    if (searchTerm !== '') {
      fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=${searchTerm}`, {
        "method": "GET",
        "headers": {
          'X-RapidAPI-Host': 'imdb8.p.rapidapi.com',
          'X-RapidAPI-Key': '0578e63d4amshee76984ae253556p1fb441jsn418e7dce4027'
        }
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          var list = data.d;
          list.forEach((item) => {
            renderMovie(item);
          });
        })
        .catch(err => {
          console.error(err);
        });
    }
  }
fetchAndRenderMovies()
  // add event listener for the "Search Movies!" button
  searchButton.addEventListener("click", function (event) {
    event.preventDefault();
    const searchingInput = searchInput.value;
    if (searchingInput.trim() !== "") {
      movieResults.innerHTML = ''; // Clear previous search results
      fetchAndRenderMovies(searchingInput);
    }
  });
});
