// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init () {
    const shuttle = document.getElementById("rocket");
    const takeOffButton = document.getElementById("takeoff");
    const landing = document.getElementById("landing");
    const missionAbort = document.getElementById("missionAbort");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    const upButton = document.getElementById("up");
    const rightButton = document.getElementById("right");

    shuttle.style.position = "absolute";
    shuttle.style.left ="0px";
    shuttle.style.bottom = "0px"; 

    function takeOff() {
        let confirmResult = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (confirmResult) {
            flightStatus.innerHTML = "Shuttle in flight";
            shuttleBackground.style.backgroundColor = 'blue';
            spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) + 10000;
        }
    }
    function land() {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerHTML = 0;
    }

    function moveRocketUp() {
        shuttle.style.bottom = parseInt(shuttle.style.bottom) + 10 + 'px';
        spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) + 10000;
    }

    function moveRocketRight() {
        shuttle.style.left = parseInt(shuttle.style.left) + 10 + 'px';
    }

    takeOffButton.addEventListener("click", takeOff);
    landing.addEventListener("click", land);
    upButton.addEventListener("click", moveRocketUp);
    rightButton.addEventListener("click", moveRocketRight);
    
}
    
window.addEventListener("load", init);



