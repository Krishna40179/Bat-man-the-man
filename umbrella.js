class Umbrella {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        
        this.umbrella = Bodies.circle(x,y,100,options);
        this.r = 30;
        World.add(world, this.umbrella)
    }

    display(){
        var pos = this.umbrella.position;
        fill("black");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y+120,this.r+20,150)
    }
}