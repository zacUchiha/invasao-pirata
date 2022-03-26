class CannonBall{
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.raio = 30;
        var option = {
            isStatic:true
        };
        this.body = Bodies.circle(x,y,this.raio, option);
        World.add(world,this.body );
        this.image = loadImage("./assets/cannonball.png");
    }
    
    display(){
        push();
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y, 30,30);
        pop();
    }

    shoot() {
        var newAngle = canon.angle - 28;
        // transformar em radiano
        newAngle = newAngle * (3.14/180);
        var velocity = p5.Vector.fromAngle(newAngle);
        velocity.mult(0.3);

        Matter.Body.setStatic(this.body, false);
        Matter.Body.setVelocity(this.body, {x:velocity.x * (180/3.14), y:velocity.y * (180/3.14)});
    }
    
}