const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var maxDrops = 100;
var drop;

function preload(){
    
}

function setup(){
   drop = new drops(200,200,15);
    
}

function draw(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    drop.display();

    for(var i=0; i<maxDrops; i++) {
        drops.push(new createdrops(random(0,400),random(0,400)));
    }
}   

