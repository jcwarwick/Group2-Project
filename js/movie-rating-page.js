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

