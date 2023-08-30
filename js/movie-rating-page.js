const movieResults = document.getElementById('movie-results');
const stars = document.querySelectorAll('.star');



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
      var movieBox = document.createElement('div');
      movieBox.classList.add('bg-black', 'text-white', 'p-4', 'rounded-md', 'shadow-md', 'w-full', 'md:w-1/2', 'lg:w-1/3', 'movie-form');
      
      // Construct movie content
      movieBox.innerHTML = `
        <img src="${poster}" alt="${name}" class="max-w-full h-auto">
        <h2 class="text-lg font-semibold mt-2">${name}</h2>
        <p class="mt-1">Release Year: 20XX</p>
        <div class="flex items-center mt-2">
          <span class="mr-1">Your Rating:</span>
          <div class="flex space-x-1">
            <button class="star bg-yellow-500 text-white px-2 py-1 rounded-md star">
                <i class="fas fa-star"></i>
            </button>
            <button class="star bg-yellow-500 text-white px-2 py-1 rounded-md">
                <i class="fas fa-star"></i>
            </button>
            <button class="star bg-yellow-500 text-white px-2 py-1 rounded-md">
                <i class="fas fa-star"></i>
            </button>
            <button class="star bg-yellow-500 text-white px-2 py-1 rounded-md">
                <i class="fas fa-star"></i>
            </button>
            <button class="star bg-yellow-500 text-white px-2 py-1 rounded-md">
                <i class="fas fa-star"></i>
            </button>
          </div>
        </div>
        <section class="mt-4 bg-black text-white p-4 rounded-md shadow-md">
        <h2 class="text-lg font-semibold">Write a Review</h2>
        <form class="mt-2">
            <label class="block" for="username">Your Name:</label>
            <input type="text" id="username" name="username" class="w-full px-3 py-2 border rounded-md">
            <label class="block mt-2" for="rating">Rating:</label>
            <div class="flex space-x-1">
                <button class="bg-red-900 text-white px-2 py-1 rounded-md">
                    <i class="fas fa-star"></i>
                </button>
                <button class="bg-red-900 text-white px-2 py-1 rounded-md">
                    <i class="fas fa-star"></i>
                </button>
                <button class="bg-red-900 text-white px-2 py-1 rounded-md">
                    <i class="fas fa-star"></i>
                </button>
                <button class="bg-red-900 text-white px-2 py-1 rounded-md">
                    <i class="fas fa-star"></i>
                </button>
                <button class="bg-red-900 text-white px-2 py-1 rounded-md">
                    <i class="fas fa-star"></i>
                </button>
            </div>
            <label class="block mt-2" for="review">Your Review:</label>
            <textarea id="review" name="review" class="w-full px-3 py-2 border rounded-md"></textarea>
            <button type="submit" class="mt-2 bg-red-900 text-white px-3 py-1 rounded-md">Submit Review</button>
        </form>
    </section>
      `;
      
      movieResults.appendChild(movieBox);

      stars.forEach((star, index) => {
        star.addEventListener('click', () => {
          // Set the clicked star and all previous stars to a selected state
          for (let i = 0; i <= index; i++) {
            stars[i].classList.add('selected');
          }
      
          // Reset the following stars to an unselected state
          for (let i = index + 1; i < stars.length; i++) {
            stars[i].classList.remove('selected');
          }
        });
      });
    });
  })
  .catch(err => {
    console.error(err);
  });
}
