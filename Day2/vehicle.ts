/*
 Build Engine
 color
 NoOfDoors
 NoOfTyres
*/
enum Colors {Red, Blue,Orange,Grey}
enum VehilceType {Sports,Scooter,SUV}

class Vehicle{
     constructor(engine:string){
        this.Engine=engine;
     }
     
    Engine:string
    Color:Colors
    NoofDoors:Number
    NoofTyres:Number
}

 class Bike extends Vehicle{
      constructor(engineType:string){
          super(engineType);
      }
     Type:VehilceType
     Handle:string
     Price:Number
 }

var bike = new Bike("400CC");
