// Write your JavaScript code here!

// const { formSubmission, myFetch, pickPlanet, addDestinationInfo } = require("./scriptHelper");

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
    }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        const planet = pickPlanet(listedPlanets);
        addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image)
    })

   list.style.visibility = ('hidden');
   const form = document.querySelector("form");
   form.addEventListener("submit",function(event){
    event.preventDefault();
    const pilotName = document.querySelector("input[name=pilotName]").value;
    const copilotName = document.querySelector("input[name=copilotName]").value;
    const fuelLevel = document.querySelector("input[name=fuelLevel]").value;
    const cargoLevel = document.querySelector("input[name=cargoMass]").value;
   
    
    formSubmission(document, listedPlanets, pilotName, copilotName, fuelLevel, cargoLevel);
   });
   
});