fetch("https://ghibliapi.herokuapp.com/films", {
    method: "get",
})
.then((r) => r.json())
.then((filmsArray) => {
    displayFilms(filmsArray);
});

function displayFilms(filmsArray) {
    for (let films of filmsArray) {
    let filmsTable = document.getElementById("filmsTable");


    let newRow = document.createElement("tr");


    let title = document.createElement("td");
    let director = document.createElement("td");
    let release_date = document.createElement("td");
    let running_time = document.createElement("td");


    title.innerText = films.title;
    director.innerText = films.director;
    release_date.innerText = films.release_date;
    running_time.innerText = films.running_time;


    newRow.appendChild(title);
    newRow.appendChild(director);
    newRow.appendChild(release_date);
    newRow.appendChild(running_time);

    filmsTable.appendChild(newRow);
    }
}