const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var drops = [];
var boy;
var maxDrops=100;
var rand;
function preload(){
    boyimg=loadAnimation("images/Walking Frame/walking_8.png",
    "images/Walking Frame/walking_7.png","images/Walking Frame/walking_6.png",
    "images/Walking Frame/walking_5.png","images/Walking Frame/walking_4.png",
    "images/Walking Frame/walking_3.png","images/Walking Frame/walking_2.png",
    "images/Walking Frame/walking_1.png")
    thunder1=loadImage("images/thunderbolt/1.png");
    thunder2=loadImage("images/thunderbolt/2.png");
    thunder3=loadImage("images/thunderbolt/3.png");
    thunder4=loadImage("images/thunderbolt/4.png");
}

function setup(){
   createCanvas(1000,800)
   engine = Engine.create();
   world = engine.world;

    boy=createSprite(500,600)
    boy.addAnimation("walking",boyimg);
    boy.scale=0.5;
    
    umbrella=new Umbrella(500,500)
    if(frameCount % 100 === 0){

        for(var i=0; i<maxDrops; i++){
            drops.push(new Drop(random(50,950), random(-10,500)));
        }

    }
    //creating thunder
    rand = Math.round(random(1,4));
    if(frameCount%80===0){
        thunderCreatedFrame=frameCount;
        thunder = createSprite(random(50,370), random(40,90), 10, 10);
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break; 
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default: break;
        }
        thunder.scale = random(0.8,2)
    }

    if(thunderCreatedFrame + 10 ===frameCount && thunder){
        thunder.destroy();
    }
}

function draw(){
    background(0);
    Engine.update(engine);
    umbrella.display();
   drawSprites();
    //displaying rain drops
    for(var i = 0; i<maxDrops; i++){
        drops[i].display();
        drops[i].updateY()
        
    }
//creating thunder
rand = Math.round(random(1,4));
if(frameCount%80===0){
    thunderCreatedFrame=frameCount;
    thunder = createSprite(random(50,950), random(40,90), 10, 10);
    switch(rand){
        case 1: thunder.addImage(thunder1);
        break;
        case 2: thunder.addImage(thunder2);
        break; 
        case 3: thunder.addImage(thunder3);
        break;
        case 4: thunder.addImage(thunder4);
        break;
        default: break;
    }
    thunder.scale = random(0.8,2)
}

if(thunderCreatedFrame + 10 ===frameCount && thunder){
    thunder.destroy();
}
}   

