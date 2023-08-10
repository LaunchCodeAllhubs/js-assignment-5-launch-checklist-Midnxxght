// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    const missionTarget = document.getElementById("missionTarget");
   // Here is the HTML formatting for our mission target div.
    missionTarget.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name:${name} </li>
                    <li>Diameter:${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth:${distance} </li>
                    <li>Number of Moons:${moons} </li>
                </ol>
                <img src="${imageUrl}">
                `;
}

function validateInput(inputValue) {
   if(inputValue === ""){
    return "Empty";
   } else if (isNaN(inputValue)) {
    return "Not a Number";
   } else {
    return "Is a Number";
   }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel){
   const pilotValid = validateInput(pilot);
   const copilotValid = validateInput(copilot);
   const fuelLevelValid = validateInput(fuelLevel);
   const cargoLevelValid = validateInput(cargoLevel);

   if (pilotValid === "Empty" || copilotValid === "Empty" || fuelLevelValid === "Empty" || cargoLevelValid ==="Empty"){
    alert("ALL FIELDS REQURED!!");
    return;
   }

   if(fuelLevelValid !== "Is a Number" || cargoLevelValid !== "Is a Number"){
    alert("FUEL AND CARGO MUST BE NUMBERS!!!")
    return;
   }
   list.syle.visibility("hidden");
   document.getElementById("pilotStatus").textContent =  `Pilot ${pilot} is ready for launch`;
   document.getElementById("copilotStatus").textContent =  `Co-pilot ${copilot} is ready for launch`;

   if (fuelLevel < 10000) {
    document.getElementById("fuelStatus").textContent = "Fuel level too low for launch";
    // document.getElementById("faultyItems").style.visibility = "visible";
    document.getElementById("launchStatus").textContent = "Shuttle Not Ready for Launch";
    document.getElementById("launchStatus").style.color = "#C7254E";
   } else {
    document.getElementById("fuelStatus").textContent = "Fuel level high enough for launch"
   }

   if (cargoLevel > 10000) {
    document.getElementById("cargoStatus").textContent = "Cargo mass too heavy for launch";
    // document.getElementById("faultyItems").style.visibility = "visible";
    document.getElementById("launchStatus").textContent = "Shuttle Not Ready for Launch";
    document.getElementById("launchStatus").style.color = "#C7254E";
   } else {
    document.getElementById("cargoStatus").textContent = "Cargo mass low enough for launch"
   }

   if (fuelLevel >= 10000 && cargoLevel <= 10000){
    document.getElementById("faultyItems").style.visibility= "visible";
    document.getElementById("launchStatus").textContent = "Shuttle is Ready for Launch";
    document.getElementById("launchStatus").style.color = "#419F6A";
   } else {
    document.getElementById("faultyItems").style.visibility= "visible";
    document.getElementById("launchStatus").textContent = "Shuttle Not Ready for Launch";
    document.getElementById("launchStatus").style.color = "#C7254E";
   }

}

async function myFetch() {
    const  response =  await fetch ("https://handlers.education.launchcode.org/static/planets.json");
    let planetsReturned = await response.json()
    return planetsReturned;
}

function pickPlanet(planets) {
    const randomIndex = Math.floor(Math.random()*planets.length);
    const randomPlanet = planets[randomIndex];
    return randomPlanet;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
