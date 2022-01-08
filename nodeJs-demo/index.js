const rect = require("./rectangle.js");

const solveRect = (l,b) =>{
    console.log("solving for rect with l = " + l + "and b =" + b);
    if(l <= 0 || b<= 0){
        console.log("dimenstion should be greater then zero: l = " + l +" b ="+ b);
    }else{
        console.log("area of rect is" + rect.area(l,b));
        
        console.log("perimeter of rect is" + rect.perimeter(l,b));

    }

}
solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(-3,5);