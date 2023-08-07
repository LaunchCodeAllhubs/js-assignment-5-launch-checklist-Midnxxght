// Write your JavaScript code here!

const { formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
   
   const form = document.querySelector("form[data-testid='testForm']");
   form.addEventListener("sumbit",function(event){
    event.preventDefault();
    const pilotName = document.getElementById("pilotName").value;
    const copilotName = document.getElementById("copilotName").value;
    const fuelLevel = document.getElementById("fuelLevel").value;
    const cargoLevel = document.getElementById("cargoLevel").value;
    
    formSubmission(document, pilotName, copilotName, fuelLevel, cargoLevel);
   });
   
});