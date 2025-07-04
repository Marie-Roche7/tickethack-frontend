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

document.querySelector("#btn-cart").addEventListener("click", function () {
  document.location.href = "index-cart.html";
});

document.querySelector("#btn-booking").addEventListener("click", function () {
  document.location.href = "index-booking.html";
});




document.querySelector(".btn").addEventListener("click", function () {
  const departure = document.querySelector("#departure").value;
  const arrival = document.querySelector("#arrival").value;
  const start = document.querySelector("#start").value;

  fetch(`http://localhost:3000/trips/search/${departure}/${arrival}/${start}`)
  .then(response => response.json())
  .then(data => {
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        console.log(data[i]);
        document.querySelector('.trip-summary').innerHTML +=
        `<li>
                    <p>${data[i].departure}>${data[i].arrival}</p>
                    <p>${data[i].date}</p>
                    <p>${data[i].price}€</p>
                    <button type="button" id="btn-book">Book</button>
                  </li>`
      }

    })

});
