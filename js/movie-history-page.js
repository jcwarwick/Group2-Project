var movieTitle = document.getElementById("movie-title");
var movieReview = document.getElementById("movie-review");
var saveBtn = document.getElementById("save-btn");



document.addEventListener("DOMContentLoaded", function() {
    saveBtn.addEventListener("click", function(event) { 
        function event(){
            var title = movieTitle.value;
            var review = movieReview.value;
            localStorage.getItem("movie", title);
            localStorage.getItem("review", review);

            console.log("Review saved!");
}})})











    


