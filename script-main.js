const travels = [
  {     departure: "Lyon",
        arrival: "Marseille",
        horaire: "13:50",
        prix: 111
    },
    {
        departure: "Lyon",
        arrival: "Paris",
        horaire: "19:37",
        prix: 130
    },
    {
        departure: "Paris",
        arrival: "Grenoble",
        horaire: "19:55",
        prix: 94
    },
    {
        departure: "Grenoble",
        arrival: "Toulouse",
        horaire: "17:22",
        prix: 135
    },
    {
        departure: "Marseille",
        arrival: "Grenoble",
        horaire: "10:50",
        prix: 77
    },
    {
        departure: "Grenoble",
        arrival: "Marseille",
        horaire: "12:54",
        prix: 125
    },
    {
        departure: "Lyon",
        arrival: "Grenoble",
        horaire: "17:30",
        prix: 88
    },
    {
        departure: "Paris",
        arrival: "Grenoble",
        horaire: "13:06",
        prix: 25
    },
]


document.querySelector('#btn-cart').addEventListener('click',
  function () {
   document.location.href = "index-cart.html";
 }
);

document.querySelector('#btn-booking').addEventListener('click',
  function () {
   document.location.href = "index-booking.html";
 }
);

function fetchArrayTravel() { //J'aime les commentaires

  //fetch("http://localhost:3000/jaimelestableaux/masuperroutequirenvoieuntableau")
  //.then(response => response.json())
  //.then(data => {
    
    for (let i = 0; i < data.trips; i++) {
      console.log("Departure =>", data.trips.departure);
      innertHTML += <> `${data.trips.departure}`</>
    }
  }//)
//}

fetchArrayTravel()


document.querySelector('#btn-search').addEventListener('click',
  function () {
   document.location.href = "index-cart.html";
 }
);