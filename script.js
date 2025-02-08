$(document).ready(function () {
  console.log("Page Loaded/Ready");
  $("#driverSeat .emoji").draggable(); // This will make the emoji inside the driver seat draggable
});
//fun fact box? need loop
$(document).ready(function () {
  let facts = [
    "Baker Units are Huntsville Police South Patrol Units!",
    "The FPIU has controls to change the light bar and its settings on the steering wheel.",
    "The Ford Police Interceptor Utility is the most popular patrol vehicle in the U.S.",
    "ALL FPIU are AWD; but, NOT all are turbo charged.",
    "Huntsville Police's dashcams turn on at 80mph or above automatically"
  ];

  let index = 0;

  function showFact() {
    $("#funFactBox")
      .fadeIn(500)
      .delay(2000)
      .fadeOut(500, function () {
        index = (index + 1) % facts.length; // acrual loop thru txt
        $(this).text(facts[index]);
      });
  }

  setInterval(showFact, 5000); ///5 second  timer
});