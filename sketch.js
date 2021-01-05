var walks1, walks2, walks3, walks4, walks5, walks6, walks7, walks8;
var bruce;
var walking;

var strike1, strike2, strike3, strike4;
var bolt;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var umbrella;
var rains = [];

function preload() {
    walks1 = loadImage("images/Walking Frame/walking_8.png");
    walks2 = loadImage("images/Walking Frame/walking_7.png");
    walks3 = loadImage("images/Walking Frame/walking_6.png");
    walks4 = loadImage("images/Walking Frame/walking_5.png");
    walks5 = loadImage("images/Walking Frame/walking_4.png");
    walks6 = loadImage("images/Walking Frame/walking_3.png");
    walks7 = loadImage("images/Walking Frame/walking_2.png");
    walks8 = loadImage("images/Walking Frame/walking_1.png");
    //lightning
    strike1 = loadImage("images/thunderbolt/1.png");
    strike2 = loadImage("images/thunderbolt/2.png");
    strike3 = loadImage("images/thunderbolt/3.png");
    strike4 = loadImage("images/thunderbolt/4.png");

}

function setup() {
    createCanvas(500, 900);
    //Bruce Rayne (lol)
    bruce = createSprite(250, 600, 100, 100);
    walking = loadAnimation(walks1, walks2, walks3, walks4, walks5, walks6, walks7, walks8)
    bruce.addAnimation("walking", walking);
    bruce.scale = 0.8;
    //umbrella
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
    umbrella = Bodies.circle(271, 467.5, 124, { isStatic: true })
    World.add(world, umbrella);
    //
    bolt = createSprite(250, 50, 50, 100);
}

function draw() {
    background("black")
    strike();
    drawSprites();
    Engine.update(engine)
    rain();
    for (var i = 0; i < rains.length; i++) {
        rains[i].display();
    }


}

function rain() {


    for (var i = 0; i <= 5; i++) {
        rains.push(new Rain(random(0, width), random(-10, 0)))
    }


}

function strike() {

    if (frameCount % 50 >= 0 && frameCount % 50 <= 7) {
        bolt.y = -100;
        var rand = Math.round(random(1, 4));
        if (rand == 1) {
            bolt.addImage("1", strike1)
            console.log(1)
        } else if (rand == 2) {
            bolt.addImage("2", strike2)
            console.log(2)
        } else if (rand == 3) {
            bolt.addImage("3", strike3)
            console.log(3)
        } else if (rand == 4) {
            bolt.addImage("4", strike4)
            console.log(4)
        }
        bolt.x = random(150, 850);
    } else {
        bolt.y = -400;
    }
}