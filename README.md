# Friday the 13th!
## Setup
- Run  
`json-server --watch db.json`

## Challenge 1
For each movie returned from `http://localhost:3000/movies` create an image and add it to the `movie-list` nav element.

## Challenge 2
When you click on each movie image, you should populate the detail area with the`title`, `release_year`, `description`, `watched`, and `blood_amount` for the movie that was clicked.

## Challenge 3
When you click on the button in the details it should toggle between `Watched` or `Unwatched` depending on the value of `watched` for the movie currently being displayed.

## Challenge 4
On the right side there's a form that allows the user to enter a number of blood drops to add to each movie (don't ask why). For each movie, I should be able to add more drops. 

Example: 
- If the value is 0 and I enter 10, then number of drops for the movie should be 10.
- If the value is 20 and I enter 5, then the number of drops for the movie should be 25.

The watched and blood amount values should stay the same when you click between the different movies.