class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.image = loadImage("block.png")
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.visibilaty = 255;
      World.add(world, this.body);
    }
    display(){
        if(this.body.speed<4.6){
          
          var posX= this.body.position.x;
          var posY = this.body.position.y;
          rectMode(CENTER);
      
          image(this.image,posX,posY,this.width, this.height);
        }
        if(this.body.speed>4.6){
          World.remove(world,this.body);
          push();
          this.visibility = this.visibility - 5;
          tint(255,this.visibility);
          image(this.image,this.body.position.x,this.body.position.y,this.width, this.height);
          pop();
        }
    }

}