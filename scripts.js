// Write your JavaScript code here.
let init = function() {
    const takeoffButton = document.getElementById("takeoff");
    const landingButton = document.getElementById("landing");
    const abortMissionButton = document.getElementById("missionAbort");
    const upButton = document.getElementById("up");
    const downButton = document.getElementById("down");
    const rightButton = document.getElementById("right");
    const leftButton = document.getElementById("left");

    takeoffButton.addEventListener("click", takeoffConfirm);
    landingButton.addEventListener("click", land);
    abortMissionButton.addEventListener("click", abortMission);
    upButton.addEventListener("click", moveShipUp);
    downButton.addEventListener("click", moveShipDown);
    rightButton.addEventListener("click", moveShipRight);
    leftButton.addEventListener("click", moveShipLeft);
}

    function takeoffConfirm() {
        let confirm = window.confirm("Confirm that the shuttle is ready for takeoff")

        if (confirm) {
            flightStatus.innerHTML = "Space shuttle in flight."
            shuttleBackground.style.backgroundColor = "blue"
            let newHeight = Number(spaceShuttleHeight.innerHTML + 10000)
            spaceShuttleHeight.innerHTML = newHeight;
        }
    }

    function land() {
        window.alert("The shuttle is landing. Landing gear engaged.");
        
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerHTML = 0
        
    }

    function abortMission() {
        let abort = window.confirm("Confirm that you want to abort the mission.");

        if (abort) {
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.backgroundColor = 'green';
            spaceShuttleHeight.innerHTML = 0;
        }
    }

    function moveShipUp() {
        
        document.getElementById("rocket").style.bottom = (Number(document.getElementById("rocket").style.bottom.replace('px','')) + 10) + 'px';
        
    }
    function moveShipDown() {
        
        document.getElementById("rocket").style.bottom = (Number(document.getElementById("rocket").style.bottom.replace('px','')) - 10) + 'px';
       

    }
    
    function moveShipLeft() {
        document.getElementById("rocket").style.left = (Number(document.getElementById("rocket").style.left.replace('px','')) - 10) + 'px';
       
    }
    
    function moveShipRight() {
        document.getElementById("rocket").style.left = (Number(document.getElementById("rocket").style.left.replace('px','')) + 10) + 'px';
        
    }


// Remember to pay attention to page loading!

window.addEventListener("load", init)
//for each direction button add or update a "left" ot "up" value maybe?