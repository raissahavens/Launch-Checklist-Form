//JavaScript code here:
window.addEventListener("load", function(event) {
   let form = document.querySelector("form");
        form.addEventListener("submit", function(event) {
              let pilotInput = document.querySelector("input[name=pilotName]");
              let copilotInput = document.querySelector("input[name=copilotName]");
              let fuelInput = document.querySelector("input[name=fuelLevel]");
              let cargoInput = document.querySelector("input[name=cargoMass]");
              let fuel = document.getElementById("fuelStatus");
              let launch = document.getElementById("launchStatus");
              let cargo = document.getElementById("cargoStatus");

                 if (Number(pilotInput.value) === "") {
                    window.alert("All fields are required!");
                 }
                 if (Number(copilotInput.value) === "") {
                     window.alert("All fields are required!");
                  }
                  if (fuelInput.value === "") {
                     window.alert("All fields are required!");
                  }
                  if (cargoInput.value === "") {
                     window.alert("All fields are required!");
                  }
                  if ( isNaN(Number(pilotInput.value))===false || isNaN(Number(copilotInput.value))===false ) {
                     window.alert("Please inform names only.");
                  }
                  if ( isNan(fuelInput.value) || isNaN(cargoInput.value) ) {
                     window.alert("Please inform numbers only.");
                  }
   document.getElementById("pilotStatus").innerHTML = `${pilotInput}`
   document.getElementById("copilotStatus").innerHTML = `${copilotInput}`

   if (fuelLevel < 10,000){
   fuel.innerHTML = "There is not enough fuel for the journey.";
   launch.innerHTML = "Shuttle not ready for launch";
   launch.style.backgroundColor = "red";
   }

   if (cargoMass > 10,000) {
   cargo.innerHTML = "Too much mass for the shuttle to take off.";
   launch.innerHTML = "Shuttle not ready for launch";
   launch.style.backgroundColor = "red";
   }
   else {
   launch.innerHTML =  "Shuttle is ready for launch";
   launch.style.backgroundColor = "green";
   }

// fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
// response.json().then(function(json) {
   // const div = document.getElementById("missionTarget")
// div.innerHTML = `
/*<h2>Mission Destination</h2>
<ol>
   <li>Name: ${json.name}</li>
   <li>Diameter: ${json.diameter}</li>
   <li>Star: ${json.star}</li>
   <li>Distance from Earth: ${json.distanceFromEarth}</li>
   <li>Number of Moons: ${json.NumberOfMoons}</li>
</ol>
<img src="${}">
*/

event.preventDefault();
});        
});