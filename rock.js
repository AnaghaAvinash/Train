class Rock{
    constructor(){
        var options={
            isStatic:true,
            density:2
        }
      this.body = Bodies.rectangle(1100,490,200,200,options);
      this.width = 100;
      this.height = 100;
      this.image = loadImage("images/rock1.png");
      World.add(world,this.body);
    }

    display(){
      imageMode(CENTER);
      image(this.image,1100,490,200,200);
    }
}