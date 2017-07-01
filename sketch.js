/*

  # Mohamed Elshorbagy
  # 01 / 07 / 2016 
  # Fractal Trees
  # Recursion Implementation

 */ 


var angle = 0;

var slider;



function setup() {
createCanvas(400 , 400);

slider = createSlider(0 , TWO_PI , 5.83 , 0.01);

}


function draw() {
background(51);
translate(width /2 , height);
stroke(255);
angle = slider.value();
branch(100);

}



function branch(len) {
  line(0 , 0 , 0 , - len);
  translate(0 , -len);
  // Base Condition
  // Condition Which Stops the Recursion 

  if (len > 4) {
    push();
    rotate(angle);
    branch(len * 0.67);
    pop();
    push();
    rotate(-angle);
    branch(len * 0.67);
    pop();

  }



}