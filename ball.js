class ball{
    constructor(x,y){
    
    var body1={
    isStatic:false,
    friction:0.5,
    density:1.2
    }
    this.body=Bodies.circle(x,y,50,body1)
    this.radius=50;
    World.add(world,this.body)
    
    this.image=loadImage("paper.png")	
    
    }
    displayshape(){
    push()
    translate(this.body.position.x,this.body.position.y)
    rotate(this.body.angle)
    imageMode(CENTER)
    image(this.image,0,0,this.radius,this.radius)
    pop()
    }
    }