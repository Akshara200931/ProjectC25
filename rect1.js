class  log{
    constructor(x,y,width,height){
    
    var body1={
    isStatic:true
    
    }
    this.body=Bodies.rectangle(x,y,width,height,body1)
    this.width=width;
    this.height=height;
    World.add(world,this.body)
    
    this.image=loadImage("dustbingreen.png")	
    
    
    }
    displayshape(){
    push()
    translate(this.body.position.x,this.body.position.y)
    rotate(this.body.angle)
    imageMode(CENTER)
    image(this.image,0,0,this.width,this.height)

    pop()
    }
    }