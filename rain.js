class Rain {
    constructor(x, y) {
        var options = {
            'restitution': 0.25,
            'friction': 0,

        }
        console.log(this.index)
        this.radius = 2;
        this.body = Bodies.circle(x, y, this.radius, options);
        this.dead = false;
        // this.height = height;
        this.index = rains.length - 1;
        this.color = color(random(0, 255), random(0, 255), random(0, 255))
        World.add(world, this.body);

    }
    display() {
        if (this.body.position.y < height + this.radius) {
            push();
            fill("darkblue");
            noStroke();
            ellipseMode(CENTER);
            ellipse(this.body.position.x, this.body.position.y, this.radius * 2, this.radius * 2)
            pop();
        } else {
            World.remove(world, this.body);
            rains.splice(this.body, 1);

        }
    }
}