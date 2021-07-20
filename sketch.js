const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

var sunrise1
var gameMode=sunrise1;
var sunrise2
var sunrise3
var sunrise4
var sunrise5
var sunrise6
var sunrise7
var sunrise8
var sunrise9
var sunrise10
var sunrise11
var sunrise12

function preload() {
    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg)
    background(backgroundImg)

    Engine.update(engine);

    // write code to display time in correct format here
textSize(20)
fill("Red")
if(gameMode===sunrise1)
{
    text("Time : 4 AM ",600,300)
}
else if(gameMode===sunrise2)
{
    text("Time : 6 AM ",600,300)
}
else if(gameMode===sunrise3)
{
    text("Time : 8 AM ",600,300)
}
else if(gameMode===sunrise4)
{
    text("Time : 10 AM ",600,300)
}
else if(gameMode===sunrise5)
{
    text("Time : 12 PM ",600,300)
}
else if(gameMode===sunrise6)
{
    text("Time : 2 PM ",600,300)
}
else if(gameMode===sunrise7)
{
    text("Time : 4 PM ",600,300)
}
else if(gameMode===sunrise8)
{
    text("Time : 6 PM ",600,300)
}
else if(gameMode===sunrise9)
{
    text("Time : 8 PM ",600,300)
}
else if(gameMode===sunrise10)
{
    text("Time : 10 PM ",600,300)
}
else if(gameMode===sunrise11)
{
    text("Time : 12 PM ",600,300)
}
else if(gameMode===sunrise12)
{
    text("Time : 2 PM ",600,300)
}
 
}

async function getBackgroundImg(){

   var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
   var responseJSON=await response.json();
   var dt= responseJSON.datetime;
   var hour=dt.slice(11,13)
if(hour>=00&& hour<=02)
{
bg="sunrise1.png" 
gameMode=sunrise1;
}
else if(hour>02&& hour<=04)
{
bg="sunrise2.png"
gameMode=sunrise2;
}
else if(hour>04&& hour<=06)
{
bg="sunrise3.png"
gameMode=sunrise3;
}
else if(hour>06&& hour<=08)
{
bg="sunrise4.png"
gameMode=sunrise4;
}
else if(hour>08&& hour<=10)
{
bg="sunrise5.png"
gameMode=sunrise5;
}
else if(hour>10&& hour<=12)
{
bg="sunrise6.png"
gameMode=sunrise6;
}
else if(hour>12&& hour<=14)
{
    bg="sunset7.png"
    gameMode=sunrise7;
}
else if(hour>14&& hour<=16)
{
    bg="sunset8.png"
    gameMode=sunrise8;
}
else if(hour>16&& hour<18)
{
    bg="sunset9.png"
    gameMode=sunrise9;
}
else if(hour>18&& hour<=20)
{
    bg="sunset10.png"
    gameMode=sunrise10;
}
else if(hour>20&& hour<=22)
{
    bg="sunset11.png"
    gameMode=sunrise11;
}
else if(hour>22&& hour<=24)
{
    bg="sunset12.png"
    gameMode=sunrise12;
}
backgroundImg=loadImage(bg);
}
