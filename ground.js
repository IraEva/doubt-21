class Ground 
{
  constructor(x, y, w, h) 
  {
    let options = {
      isStatic:true
    };
    
    this.body = Bodies.rect(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  }

  show() {
    var pos = this.body.position;
    push();
    circleMode(RADIUS);
    stroke(255);
    fill(110);
    rect(pos.x, pos.y, this.w, this.h);
    pop();
  }
  
}
