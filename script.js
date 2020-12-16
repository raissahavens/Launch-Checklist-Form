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
              let items = document.getElementById("faultyItems")
              const letters = /^[a-zA-Z\s]+$/;
              const number = /^[0-9]+$/;
              event.preventDefault();

                  if (!letters.test(pilotInput.value)) {
                    alert("Make sure to enter valid information for the name field.");
                 }
                  if (!letters.test(copilotInput.value)) {
                     alert("Make sure to enter valid information for the name field.");
                  }
                  if (!number.test(fuelInput.value)) {
                     alert("Make sure to enter valid information for each field.");
                  }
                  if (!number.test(cargoInput.value)) {
                     alert("Make sure to enter valid information for each field.");;
                  }
                  document.getElementById("pilotStatus").innerHTML = `${pilotInput.value} ready`
                  document.getElementById("copilotStatus").innerHTML = `${copilotInput.value} ready`
                  items.style.visibility = "visible"

                  if (fuelInput.value < 10000){
                  fuel.innerText = "There is not enough fuel for the journey.";
                  launch.innerText = "Shuttle not ready for launch";
                  launch.style.color = "red";
                  }

                  else if (cargoInput.value > 10000) {
                  cargo.innerText = "Too much mass for the shuttle to take off.";
                  launch.innerText = "Shuttle not ready for launch";
                  launch.style.color = "red";
                  }
                  else {
                  launch.innerText =  "Shuttle is ready for launch";
                  launch.style.color = "green";
                  }

fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
response.json().then(function(json) {
let index = 3;
const div = document.getElementById("missionTarget")
div.innerHTML = `
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${json[index].name}</li>
   <li>Diameter: ${json[index].diameter}</li>
   <li>Star: ${json[index].star}</li>
   <li>Distance from Earth: ${json[index].distance}</li>
   <li>Number of Moons: ${json[index].moons}</li>
</ol>
<img src="${json[index].image}">
`
});
});
});      
});