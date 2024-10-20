Description
Features
GetTransform: Generates a 3x3 transformation matrix based on the drone's position (X and Y), rotation (in degrees), and scale. The transformations are applied in the following order: scaling, rotation, and then translation. The matrix is represented in column-major order.

ApplyTransform: Combines two transformation matrices by applying the first transformation followed by the second. This function is useful for chaining multiple transformations seamlessly.

ResetTransform: Resets the drone's position, rotation, scale, and speed to default values, effectively bringing it back to a neutral state.

BoostSpeed: Temporarily increases the drone's speed by a factor of 10 for a duration of 5 seconds before reverting to the original speed.

HoverMode: Activates hover mode by setting the drone's altitude to 50 units and stopping horizontal movement.

MouseMovement: Allows the drone to follow the mouse cursor, unless the drone is in hover mode, providing interactive control.

Usage
To utilize these functions, integrate them into a drone control system where you can manipulate the drone's transformations and behavior based on user inputs or other conditions. The transformation matrices facilitate complex movements and orientations, while the control functions enhance user interaction.

Installation
Clone this repository and include the script in your HTML file or JavaScript project to get started.


https://github.com/user-attachments/assets/313dbe93-63ae-4ade-91c6-43e2c1dd00fb

