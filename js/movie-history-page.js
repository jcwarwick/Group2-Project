document.addEventListener("DOMContentLoaded", function () {
  const reviewsContainer = document.getElementById('reviews-container');

  // Function to display saved reviews on "movie-history-page"
  function displayReviewsOnMovieHistoryPage() {
    // Retrieve saved reviews from local storage
    const savedReviews = JSON.parse(localStorage.getItem('userReviews')) || [];

    if (savedReviews.length === 0) {
      reviewsContainer.innerHTML = '<p>No reviews available.</p>';
      return;
    }

    savedReviews.forEach((reviewData, index) => {
      const reviewElement = document.createElement('div');
      reviewElement.classList.add('review-item');

      // Create and populate HTML elements to display the reviews
      const reviewTitle = document.createElement('h3');
      reviewTitle.textContent = `Review for ${reviewData.movieTitle}`;

      const reviewText = document.createElement('p');
      reviewText.textContent = `Rating: ${reviewData.rating}, Streaming Service: ${reviewData.streamingService}`;

      const reviewBody = document.createElement('p');
      reviewBody.textContent = `Review: ${reviewData.review}`;

      reviewElement.appendChild(reviewTitle);
      reviewElement.appendChild(reviewText);
      reviewElement.appendChild(reviewBody);

      reviewsContainer.appendChild(reviewElement);
    });
  }

  // Add event listener for displaying reviews when "movie-history-page" loads
  window.addEventListener("load", displayReviewsOnMovieHistoryPage);
});