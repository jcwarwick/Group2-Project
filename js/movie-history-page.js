var savedReview = JSON.parse(localStorage.getItem("userReview"));
var savedTemplate = localStorage.getItem('savedTemplateId');

if (savedReview) {

  var usernameElement = document.getElementById("username");
  var reviewElement = document.getElementById("review");
  var movieResults = document.getElementById('movie-results');

  usernameElement.textContent = savedReview.username;
  reviewElement.textContent = savedReview.reviewTextarea;
  
  
}

document.addEventListener("DOMContentLoaded", function() {
    
    const savedTemplate = localStorage.getItem('savedTemplate');

    if (savedTemplate) {
        
        const displaySavedTemplate = document.getElementById('savedTemplate');
        displaySavedTemplate.innerHTML = savedTemplate;
    }
});



