class MyPoint {
    x;
    y;
    radius;
    color;
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }

    SetX(x){
        this.x=x;
    }
    GetX(){
        return this.x;
    }
    SetY(y){
        this.y=y;
    }
    GetY(){
        return this.y;
    }
    SetRadius(radius){
        this.radius=radius;
    }
    GetRadius(){
        return this.radius;
    }
    setColor(color){
        this.color=color
    }
   drawCircle(ctx){
ctx.beginPath()
       ctx.fillStyle=this.color;
ctx.arc(this.x,this.y,this.radius,0,2*Math.PI);
ctx.fill();
ctx.stroke()
       ctx.closePath()
   }
}