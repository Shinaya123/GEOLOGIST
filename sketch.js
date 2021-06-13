const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var plane;
var rubber1, rubber2, rubber3;
var iron1, iron2, iron3;
var sonte1, stone2, stone3,stone4,stone5, stone6;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber1 = new Rubber(10,10,40);
    rubber2 = new Rubber(100,100,40);
    rubber3 = new Rubber(100,100,30);
    iron1 = new Iron(100,100,50,50);
    iron2 = new Iron(100,100,50,50);
    iron3 = new Iron(100,100,50,50);
    stone1 = new Stone(100,100,4);
    stone2 = new Stone(100,100,4);
    stone3 = new Stone(100,100,4);
    stone4 = new Stone(100,100,4);
    stone5 = new Stone(100,100,4);
    stone6 = new Stone(100,100,4);


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber1.display();
    rubber2.display();    
    rubber3.display();
    iron1.display();
    iron2.display();
    iron3.display();
    stone1.display();
    stone2.display();
    stone3.display();
    stone4.display();
    stone5.display();
    stone6.display();
}