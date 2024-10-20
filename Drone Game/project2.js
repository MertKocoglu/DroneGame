// TO DO 1: Provides a 3x3 transformation matrix represented as an array containing 9 values arranged in column-major sequence.
// Initially, the transformation employs scaling, followed by rotation, and ultimately, translation.
// The specified rotation measurement is in degrees.
function GetTransform(positionX, positionY, rotation, scale) {
    const rad = rotation * (Math.PI / 180);
    const cosRad = Math.cos(rad);
    const sinRad = Math.sin(rad);
    const matrix = [
        scale * cosRad, scale * sinRad, 0,
        -scale * sinRad, scale * cosRad, 0,
        positionX, positionY, 1
    ];
    return matrix;
}





// TO DO 2:Provides a 3x3 transformation matrix represented as an array containing 9 values arranged in column-major sequence.
// The inputs consist of transformation matrices following the identical format.
// The resulting transformation initially employs trans1 and subsequently applies trans2.
function ApplyTransform(trans1, trans2) {
    let result = new Array(9);
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            result[row * 3 + col] = 0;
            for (let k = 0; k < 3; k++) {
                result[row * 3 + col] += trans1[row * 3 + k] * trans2[k * 3 + col];
            }
        }
    }
    return result;
}


//You will write the function for ResetTransform
//This function resets the drone’s position, rotation, scale, and altitude
function resetTransform() {
    drone.rotation = 0;
    drone.scale = 1;
    drone.positionX = 0;
    drone.speed = 0;
	
    drone.positionY = 0;
}


//You will write the function for boostSpeed
//Temporarily increases the drone's speed for 5 seconds and then resets it to the normal speed.
function boostSpeed() {
    let originalSpeed = drone.speed; 
    let boostedSpeed = originalSpeed * 10; 
    drone.speed = boostedSpeed;
    setTimeout(() => {
        drone.speed = originalSpeed;
    }, 5000);
}




//You will write the function for hoverMode
//Increases the altitude to 50 units and stops the drone from moving horizontally.
function hoverMode() {
    drone.altitude = 50;
    drone.speed = 0; 
}


//You will write the function for  mouseMovement
//The drone follows the mouse unless it is in hover modes
function mouseMovement(event) {
    if (drone.altitude !== 50) { 
        drone.positionX = event.clientX;
        drone.positionY = event.clientY;
    }
}
