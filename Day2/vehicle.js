/*
 Build Engine
 color
 NoOfDoors
 NoOfTyres
*/
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 0] = "Red";
    Colors[Colors["Blue"] = 1] = "Blue";
    Colors[Colors["Orange"] = 2] = "Orange";
    Colors[Colors["Grey"] = 3] = "Grey";
})(Colors || (Colors = {}));
var VehilceType;
(function (VehilceType) {
    VehilceType[VehilceType["Sports"] = 0] = "Sports";
    VehilceType[VehilceType["Scooter"] = 1] = "Scooter";
    VehilceType[VehilceType["SUV"] = 2] = "SUV";
})(VehilceType || (VehilceType = {}));
var Vehicle = (function () {
    function Vehicle() {
    }
    return Vehicle;
}());
// class Bike extends Vehicle{
//     Type:VehilceType
//     Handle:string
//     Price:Number
// }
var bike = new Vehicle();
