document.addEventListener("DOMContentLoaded", function () {
  // ... (previous code)

  // Function to render the saved review data
  function renderSavedReview() {
    const savedReviewData = JSON.parse(localStorage.getItem('userReview'));

    if (savedReviewData) {
      // Populate the review input with saved data
      const reviewTextarea = document.getElementById("review");
      reviewTextarea.value = savedReviewData.review;

      // Populate the rating stars with saved data
      const ratingStars = document.querySelectorAll('.rating-star');
      ratingStars.forEach(function (starButton, index) {
        if (index < savedReviewData.rating) {
          starButton.classList.add("starChecked");
        } else {
          starButton.classList.remove("starChecked");
        }
      });

      // Populate the streaming service dropdown with saved data
      const streamingServiceDropdown = document.getElementById("streaming-service");
      streamingServiceDropdown.value = savedReviewData.streamingService;
    }
  }

  // Call the function to render saved review data when the page loads
  renderSavedReview();
});
