class Chain{
    constructor(bodyA,bodyB){
    var options={
    bodyA:bodyA,
    bodyB:bodyB,
    stiffness:0.5,
    }
    this.chain=Constraint.create(options);
    World.add(world,this.chain);
  }
  display(){
    strokeWeight(5);
    stroke("brown")
    line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,
        this.chain.bodyB.position.x,this.chain.bodyB.position.y)
  }
}