class Ground{
    constructor(x,y){
    var options = {
        isStatic : true 

    }
    //body
    this.body = Bodies.rectangle(x,y,800,50,options);
   
    World.add(world,this.body);
    }
    
display(){
    //namespace/nick name
    var position = this.body.position
    rectMode(CENTER);
    rect(position.x,position.y,800,50);
}

}
