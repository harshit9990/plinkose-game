class Block{
constructor(hieght,width,x,y,angle){
var option = {
restitution:0.7,
friction:0.6,
isStactic:false,

}

this.body=Bodies.rectangle(x,y,height,width,option)
this.width=width;
this.height=height;
World.add(world,this.body)
}
display(){
var angle=this.body.angle;
push()
translate(this.body.postion.x,this.body.postion.y)
retote(angle);
rectmode(CENTRE)
rect(0,0,width,height);
pop()



}





}