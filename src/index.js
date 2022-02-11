let movieData;
let currentMovie;

fetch("http://localhost:3000/movies")
.then(response => response.json())
.then(json => {
     movieData = json;
     
     movieData.forEach(movie => {
         createMovieImageInBar(movie);
     })

     showMovieDetail(movieData[0]);

     hookUpWatchedButton();

     hookUpBloodForm();
});

function createMovieImageInBar(movie) {
    let movieList = document.querySelector("#movie-list");

    let movieImage = document.createElement("img");
    movieImage.src = movie.image;
    movieList.appendChild(movieImage);

    movieImage.addEventListener('click', () => {
        showMovieDetail(movie);
    });
}

function showMovieDetail(movie) {
    currentMovie = movie;

    let detailTitle = document.querySelector("#title");
    let detailImage = document.querySelector("#detail-image");
    let detailDescription = document.querySelector("#description");
    let detailYearReleased = document.querySelector("#year-released");
    let watchedButton = document.querySelector("#watched");
    let bloodAmount = document.querySelector("#amount");

    detailTitle.textContent = movie.title;
    detailImage.src = movie.image;
    detailDescription.textContent = movie.description;
    detailYearReleased.textContent = movie.release_year;
    watchedButton.textContent = movie.watched ? "Watched" : "Unwatched"
    bloodAmount.textContent = movie.blood_amount;
}

function hookUpWatchedButton() {
    let watchedButton = document.querySelector("#watched");
    watchedButton.addEventListener('click', () => {
        currentMovie.watched = !currentMovie.watched;
        watchedButton.textContent = currentMovie.watched ? "Watched" : "Unwatched";
    });
}

function hookUpBloodForm() {
    const bloodForm = document.querySelector("#blood-form");
    bloodForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const amountToAdd = event.target["blood-amount"].value;
        currentMovie.blood_amount += parseInt(amountToAdd);

        document.querySelector("#amount").textContent = currentMovie.blood_amount;

        event.target.reset();
    })
}