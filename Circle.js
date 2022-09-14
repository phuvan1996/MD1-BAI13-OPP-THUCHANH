class Circle {
 radius;
 area;

    constructor(radius, color, area) {
        this.Radius = radius;
        this.Area = area;
    }
    SetRadius(radius){
        this.radius=radius;
    }getRadius(){
        return this.radius;
    }
    SetArea(area){
        this.area=area;
    }
    getArea(){
        return Math.pow(this.radius,2)*Math.PI
    }
};
