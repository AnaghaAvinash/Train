class Coach{
   constructor(x,y){
    var options={
        density:0.1
    }
   this.image = loadImage("images/coach.png");
   this.body = Bodies.rectangle(x,y,80,80,options)
   World.add(world,this.body);
   this.width=80;
   this.height=80;
 }
 display(){
    imageMode(CENTER)
    image(this.image,this.body.position.x,this.body.position.y,80,80)
 }
}

