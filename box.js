class Box{
    constructor(x,y,w,h){

    //body
    this.body = Bodies.rectangle(x,y,w,h);
    this.width = w;
    this.height= h;
    World.add(world,this.body);
    }
    
display(){
    //namespace/nick name
    var position = this.body.position
    var angle = this.body.angle;

    push();

    translate(position.x,position.y);
    rotate(angle);

    rectMode(CENTER);
    rect(0,0,this.width,this.height);

    pop();
}

}