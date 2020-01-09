"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Tutorial Case

   Countdown Clock
   Author: 
   Date:   

*/
runClock();
setInterval("runClock()", 1000);

// setTimeout("command", delay);
// setTimeout("runClock()", 1000);
// clearTimeout();

function runClock(){
   var currentYear= new Date();

   var thisDate = currentYear.toDateString(); // == 1/7/2020
   var thisTime = currentYear.toLocaleTimeString(); // == 13:54:23

   document.getElementById("dateNow").innerHTML = thisDate + "<br/>" + thisTime;


   var newYear = new Date("January 1, 2021");
   var nextYear = currentYear.getFullYear()+1;
   newYear.setFullYear(nextYear);
   var daysLeft = (newYear - currentYear)/(1000*60*60*24);

   var hrsLeft = (daysLeft - Math.floor(daysLeft))*24;

   var minsLeft = (hrsLeft - Math.floor(hrsLeft))*60;

   var secsLeft = (minsLeft - Math.floor(minsLeft))*60;

   document.getElementById("days").textContent = Math.floor(daysLeft);
   document.getElementById("hrs").textContent = Math.floor(hrsLeft);
   document.getElementById("mins").textContent = Math.floor(minsLeft);
   document.getElementById("secs").textContent = Math.ceil(secsLeft);
}

function calcArea(length, width){
   var area = length*width;
   return area;
}

function calcAreaCirc(radius){
   var areaCirc = radius*radius
   return areaCirc + "pi";
}

function distance(x1, y1, x2, y2){
   var xs = x2 - x1;
   var xVar = xs*xs;
   var ys = y2 - y1;
   var yVar = ys*ys;
   var dividend = xVar + yVar;
   var dist = Math.sqrt(dividend);
   return dist;
}

var squareArea = calcArea(6, 6);
var circArea = calcAreaCirc(2);

console.log(distance(1,1,4,5));



function findArea(){
   var height = Math.ceil(Math.random()*10);
   var length = Math.ceil(Math.random()*10);   
   var area = height*length;
   console.log( "The length is " + length + " and the height is " + height + " so the area is " + area);
}

setInterval("findArea()", 1000);