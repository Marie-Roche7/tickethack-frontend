console.log("arrivee dans cart");

fetch("url")
  .then()
  .then((data) => {});

const travels = [
  { departure: "Lyon", arrival: "Marseille", horaire: "13:50", prix: 111 },
  {
    departure: "Lyon",
    arrival: "Paris",
    horaire: "19:37",
    prix: 130,
  },
  {
    departure: "Paris",
    arrival: "Grenoble",
    horaire: "19:55",
    prix: 94,
  },
  {
    departure: "Grenoble",
    arrival: "Toulouse",
    horaire: "17:22",
    prix: 135,
  },
  {
    departure: "Marseille",
    arrival: "Grenoble",
    horaire: "10:50",
    prix: 77,
  },
  {
    departure: "Grenoble",
    arrival: "Marseille",
    horaire: "12:54",
    prix: 125,
  },
  {
    departure: "Lyon",
    arrival: "Grenoble",
    horaire: "17:30",
    prix: 88,
  },
  {
    departure: "Paris",
    arrival: "Grenoble",
    horaire: "13:06",
    prix: 25,
  },
];


function fetchNewArrayFromDB() { //J'aime les commentaires

  fetch("http://localhost:3000/jaimelestableaux/masuperroutequirenvoieuntableau")
  .then(response => response.json())
  .then(data => {
    
    for (let i = 0; i < data.trips; i++) {
      console.log("Departure =>", data.trips.departure);
      innertHTML += <> `${data.trips.departure}`</>
    }
  })
}

fetchNewArrayFromDB()


document
  .querySelector("#logo-container")
  .addEventListener("click", function () {
    document.location.href = "index-main-page.html";
  });

document.querySelector("#btn-booking").addEventListener("click", function () {
  document.location.href = "index-booking.html";
});

document.querySelector("#delete").addEventListener("click", function () {
  console.log("click detected on delete!");
});

/*console.log(travels)*/

function deleteTravel() {
  // for (let element of document.querySelectorAll('#delete')) {
  //   element.addEventListener("click", "tatata")
  // }
//fetch("http://localhost:3000/jaimelestableaux/masuperroutequirenvoieuntableau")
//.then(response => response.json())
//.then(data => {
  for (let i = 0; i < document.querySelectorAll("#delete").length; i++) {
    document
      .querySelectorAll("#delete")
      [i].addEventListener("click", function () {
        // fetch(`http://localhost:3000/.../${this.id}`, { method: "DELETE" })
        //   .then((response) => response.json())
        //   .then((data) => {
        //     if (data.result) {
        this.parentNode.parentNode.remove();
        //     }
        //   });
        console.log("la mort");
      });
  }
}

function departureIn(travels) {
  let result = "";

  const departure = new Date(travels.departure);
  const arrival = new Date(travels.arrival);
  let timeHour = 0;
  let timeMinute = 0;
  let hour = 0;

//fetch("http://localhost:3000/jaimelestableaux/masuperroutequirenvoieuntableau")
//.then(response => response.json())
//.then(data => {

  for (let i = departure.getMinutes(); i < arrival.getMinutes(); i++) {
    timeMinute++;
    if (departure.getHours() + timeHour !== arrival.getHours()) {
      timeMinute += 60;
      timeHour++;
    }
    result = `Departure in ${timeHour} hours and ${timeMinute} minutes`;
  }

  console.log(result);

  return result;
}
