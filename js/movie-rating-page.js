const movieResults = document.getElementById('movie-results');
const movieTemplate = document.getElementById('movie-template');
const searchParams = new URLSearchParams(window.location.search);
const searchTerm = searchParams.get('search');

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

      movieResults.appendChild(movieBox);


    });
  })
  .catch(err => {
    console.error(err);
  });
}




document.addEventListener("DOMContentLoaded", function() {
  const searchInput = document.getElementById('searching');
  const searchButton = document.querySelector(".search-btn");


  searchButton.addEventListener("click", function(event) {
    event.preventDefault();
    const searchingInput = searchInput.value;
    if (searchingInput.trim() !== "") {
       window.location.href = `movie-rating-page.html?search=${encodeURIComponent(searchingInput)}`;
    }
  })
  });

document.addEventListener("DOMContentLoaded", function() {
 

  movieResults.addEventListener("click", function(event) {
    if (event.target.id === "submit-review") {
      event.preventDefault();
      const form = event.target.closest("form");
      if (form) {
        const reviewTextarea = form.querySelector("#review");

    

        if (reviewTextarea) {
          const userReview = {
            reviewTextarea: reviewTextarea.value
          };

          if (userReview.reviewTextarea !== null && userReview.reviewTextarea.trim() !== '') {
            localStorage.setItem('userReview', JSON.stringify(userReview));

        
          
  
          } 
        } 
      }
    }
  });

  
});




document.addEventListener("DOMContentLoaded", function() {
  movieResults.addEventListener("click", function(event) {
    if (event.target.classList.contains("rating-star")) {
      const clickedStar = event.target;
      const starButtons = clickedStar.parentElement.querySelectorAll(".rating-star");

      starButtons.forEach(function(starButton) {
        starButton.classList.remove("starChecked");
      });

      clickedStar.classList.add("starChecked");
    }
  });
});








