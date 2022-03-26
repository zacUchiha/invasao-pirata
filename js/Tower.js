class Tower {
    constructor(){
        this.image = loadImage("./assets/tower.png");
        var options_tower = {
            isStatic: true
        };
        this.tower = Bodies.rectangle(160,350,160,310,options_tower); 
        World.add(world, this.tower);
    }

    display() {
        push();
        imageMode(CENTER);
        image(this.image,this.tower.position.x,this.tower.position.y,160,310);
        pop();
    }
}