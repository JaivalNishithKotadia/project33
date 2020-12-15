const  Engine = Matter.Engine,
  World = Matter.World,
  Constraint = Matter.Constraint,
  Bodies = Matter.Bodies;
var engine,world;
var ground1;
var particles = [];
var particle;
var turn=0;
var plinkos = [];
var divisions= [];
var divisionHeight=300;
var score =0;
var gameState="play";
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground1 = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  textSize(35);
  fill("white");
  text("500",12,550);
  textSize(35);
  fill("white");
  text("500",92,550);
  textSize(35);
  fill("white");
  text("500",172,550);
  textSize(35);
  fill("white");
  text("500",252,550);
  textSize(35);
  fill("white");
  text("100",332,550);
  textSize(35);
  fill("white");
  text("100",412,550);
  textSize(35);
  fill("white");
  text("100",492,550);
  textSize(35);
  fill("white");
  text("200",572,550);
  textSize(35);
  fill("white");
  text("200",652,550);
  textSize(35);
  fill("white");
  text("200",732,550);
  stroke("yellow");
  strokeWeight(10);
  line(0,450,800,450);
  noStroke();
  Engine.update(engine);


  if(particle!=null)
  {
     particle.display();
      
      if (particle.body.position.y>760)
      {
            if (particle.body.position.x < 300) 
            {
                score=score+500;      
                particle=null;
                if ( turn>= 5) gameState ="end";                          
            }


            else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) 
            {
                  score = score + 100;
                  particle=null;
                  if ( turn>= 5) gameState ="end";

            }
            else if (particle.body.position.x < 900 && particle.body.position.x > 601 )
            {
                  score = score + 200;
                  particle=null;
                  if ( turn>= 5)  gameState ="end";

            }      
            
      }

    }
  
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}
function keyPressed(){
 if (keyCode === 32){

 
if (gameState!="end"){
    turn++;
    particle = new Particle(mouseX,10,10,10);
  }
 }
}
