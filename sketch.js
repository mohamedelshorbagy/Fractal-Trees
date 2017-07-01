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

} // end of draw Function 



function branch(len) {
    // To Make Branches Every time has Different Colors  
  if(len < 50) {
    stroke(len * 20 /256 , 255 ,70);
  } else {
    
    stroke(125 , 220 , 20);
  }
  
  // Root Branch 
  line(0 , 0 , 0 , - len);
  // Make End Point of Any Branch the Origin to Next 
  translate(0 , -len);
  
  
  
  // Base Condition
  // Condition Which Stops the Recursion 
  if (len > 4) {
  // Recursion Process
  // To Right 
    push();
    rotate(angle);
    branch(len * 0.67);
    pop();
  // To Left   
    push();
    rotate(-angle);
    branch(len * 0.67);
    pop();

  } // end of Base Condition



} // End of Branch Function
