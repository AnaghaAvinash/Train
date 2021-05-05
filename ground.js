class Ground{
    constructor(){
    var options = {
        isStatic:true
    }

    this.body = Bodies.rectangle(600,580,1200,25,options)
    World.add(world, this.body)
    this.width=1200;
    this.height=25;
  }

  display(){
   rectMode(CENTER)
   fill('brown')
   rect(this.body.position.x,this.body.position.y,this.width,this.height);
 }
}

