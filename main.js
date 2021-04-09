canvas = 
document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

car1_width = 120;
car1_height = 70;
car1_image = "car1.png";
car1_x = 10;
car1_y = 10;

car1_width = 120;
car1_height = 70;
car1_image = "car2.jfif";
car1_x = 10;
car1_y = 100;

background_image = "racing.jpg";

function add(){
    background_ImgTag = new Image();
    background_ImgTag.onload = uploadBackground;
    background_ImgTag.src = background_image;

    car1_ImgTag = new Image();
    car1_ImgTag.onload=uploadcar1;
    car1_ImgTag = car1_image;

    car2_ImgTag = new Image();
    car2_ImgTag.onload = uploadcar2;
    car2_ImgTag = car2_image;
}

function uploadbackground(){
    ctx.drawImage(background_ImgTag,0 ,0, canvas.width, canvas.height);
}

function uploadcar1(){
    ctx.drawImage(car1_ImgTag,car1_x ,car1_y, car1_width, car1_height);
}

function uploadcar2(){
    ctx.drawImage(car2_ImgTag,car2_x ,car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
keyPressed = e.keyCode;
console.log(keyPressed);

if (keyPressed == "38"){
    car1_up();
    console.log("up arrow key");
}
if (keyPressed == "40"){
    car1_down();
    console.log("down arrow key");
}
if (keyPressed == "39"){
    car1_right();
    console.log("right arrow key");
}
if (keyPressed == "37"){
    car1_up();
    console.log("left arrow key");
}
if (keyPressed == "87"){
    car2_up();
    console.log("key w");
}
if (keyPressed == "65"){
    car2_left();
    console.log("key a");
}
if (keyPressed == "83"){
    car2_down();
    console.log("key s");
}
if (keyPressed == "68"){
    car2_right();
    console.log("key d");
}
}