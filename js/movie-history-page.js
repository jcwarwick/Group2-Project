
var savedReview = JSON.parse(localStorage.getItem("userReview"));
var savedTemplate = localStorage.getItem('savedTemplateId');

if (savedReview) {

  var reviewElement = document.getElementById("review");
  var movieResults = document.getElementById('movie-results');

  reviewElement.textContent = savedReview.reviewTextarea;
  
  
}



