var movieResults = document.getElementById('movie-results');
var movieTemplate = document.getElementById('movie-template');
var searchParams = new URLSearchParams(window.location.search);
var searchTerm = searchParams.get('search');

if (searchTerm !== '') {
  fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=${searchTerm}`, {
    method: "GET",
    headers: {
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

      var movieBox = document.importNode(movieTemplate.content, true);
      var img = movieBox.querySelector('img');
      var title = movieBox.querySelector('h2');
      var releaseYear = movieBox.querySelector('p');

      img.src = poster;
      img.alt = name;
      title.textContent = name;
      releaseYear.textContent = `Release Year: ${releaseDate}`;

      movieResults.appendChild(movieBox);
    });
  })
}

document.addEventListener("DOMContentLoaded", function() {
  var searchInput = document.getElementById('searching');
  var searchButton = document.querySelector(".search-btn");

  searchButton.addEventListener("click", function(event) {
    event.preventDefault();
    var searchingInput = searchInput.value;
    if (searchingInput.trim() !== "") {
      window.location.href = `movie-rating-page.html?search=${encodeURIComponent(searchingInput)}`;
    }
  });
});

document.addEventListener("DOMContentLoaded", function() {
  movieResults.addEventListener("click", function(event) {
    if (event.target.id === "submit-review") {
      event.preventDefault();
      var form = event.target.closest("form");
      if (form) {
        var reviewTextarea = form.querySelector("#review");
       

        if (reviewTextarea) {
          var userReview = {
            reviewTextarea: reviewTextarea.value,
            
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
      var clickedStar = event.target;
      var starButtons = clickedStar.parentElement.querySelectorAll(".rating-star");

      starButtons.forEach(function(starButton) {
        starButton.classList.remove("starChecked");
      });

      clickedStar.classList.add("starChecked");
    }
  });
});
