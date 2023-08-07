// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(valueInput) {
   if(valueInput === ""){
    return "Empty";
   } else if (isNaN(valueInput)) {
    return "Not a Number";
   } else {
    return "Is a Number";
   }
}

function formSubmission(document, pilot, copilot, fuelLevel, cargoLevel) {   
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
   
   document.getElementById("pilotStatus").textContent =  `Pilot ${pilot} is ready for launch.`;
   document.getElementById("copilotStatus").textContent =  `Co-pilot ${copilot} is ready for launch.`;

   if (fuelLevel < 10000) {
    document.getElementById("fuelStatus").textContent = "Fuel level too low for launch.";
    document.getElementById("faultyItems").style.visibility = "visible";
    document.getElementById("launchStatus").textContent = "Shuttle Not Ready for Launch!";
    document.getElementById("launchStatus").style.color = "#C7254E";
   } else {
    document.getElementById("fuelStatus").textContent = "Fuel level high enough for launch."
   }

   if (cargoLevel > 10000) {
    document.getElementById("cargoStatus").textContent = "Cargo mass to high for launch.";
    document.getElementById("faultyItems").style.visibility = "visible";
    document.getElementById("launchStatus").textContent = "Shuttle Not Ready for Launch!";
    document.getElementById("launchStatus").style.color = "#C7254E";
   } else {
    document.getElementById("cargoStatus").textContent = "Cargo mass low enough for launch."
   }

}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
