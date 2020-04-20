var num = 6;
var colors = [];
var pickedColor;
var circles = document.querySelectorAll(".circle");
var displayColor = document.getElementById("h-color")
var msg = document.getElementById("msg");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    //mode buttons
    for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
        modeButtons[0].classList.remove("selectedButton");
        modeButtons[1].classList.remove("selectedButton");
        this.classList.add("selectedButton");
        this.textContent === "Easy" ? num = 3: num = 6;
        reset();
        });
   }
    
    //click listeners
    for (var i = 0 ; i < circles.length; i++){
        //add listeners to circles
        circles[i].addEventListener("click", function(){
       //get color of square and compare with picked color
       var clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor){
            msg.textContent = "Correct!"
            changeCircleColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
            resetButton.textContent = "Play Again?";
            }   
        else {
            this.style.backgroundColor = "#1f1615";
            msg.textContent = "Try again :(";
            }
        });
    }
    
    reset();
}

function reset(){
    colors = generateColors(num);
    pickedColor = randomizeColor();
    displayColor.textContent = pickedColor;
    for (var i = 0 ; i < circles.length; i++){
        if(colors[i]){
            circles[i].style.display = "block";
            circles[i].style.backgroundColor = colors[i];
        }
        else {
            circles[i].style.display = "none";
        }
    }   
    resetButton.textContent = "New Colors"
    h1.style.backgroundColor = "steelblue";
    msg.textContent = "";
}

resetButton.addEventListener("click", reset);

function changeCircleColors(corrColor){
    for (var i = 0 ; i < circles.length; i++){
        circles[i].style.backgroundColor = corrColor;
    }
   }

function randomizeColor(){
    var rnum = Math.floor(Math.random() * colors.length);
    return colors[rnum];
}

function generateColors(num){
    //create and return array of colors
    var cArr = [];
    var i = 0;
    while(i < num){
        cArr.push(getRandomColor());
        i++;
    }
    return cArr;
}

function getRandomColor(){
    //pick a red, blue, green from 0 - 255
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}