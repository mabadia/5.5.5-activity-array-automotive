//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
console.log(v.make)


//After you write the derived Car class, you should test it out.
class Car extends VehicleModule {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage)
        this.maxPassengers = 5;
        this.passenger = 0;
        this.speed = 0;
        this.maxSpeed = 160;
        this.started = false;
        this.numberOfWheels = 4;
        this.fuel = 10;
        this.scheduleService = false;
    }
    //method goes here 
    loadPassengers(num) {
        if (this.passenger < this.maxPassengers) {
            if ((num + this.passengers) <= this.maxPassengers) {
                this.passenger = num;
                return this.passenger;
            } else {
                console.log(this.model + " " + this.make + "not have enough space to take all passengers!");
            }
        } else {
            console.log(this.module + " " + this.make + "is full");
        }
    }
    start() {
        if (this.fuel > 0) {
            return this.started = true;
            console.log("engine started...!!!");
        } else {
            return this.started = false;
            console.log("engine cannot start...");
        }
    }
    scheduleService(mileage) {
        if (this.mileage > 30000) {
            console.log("Time for maintenance!")
            this.scheduleService = true
        }
    }
}
// add all things that go into the code from chart instructions
// Properties
// Name                        Initial Value
// maximumPassengers                   5
// passengers                          0
// numberOfWheels                      4
// maximumSpeed                        160
// fuel                                10
// scheduleService                     false
//Note: You can code your derived Car class here or make a file named index.js and do it there.
//methods:
// name                 parameters                  logic
// loadPasssenger       num                         n/a
//start                 no parameters               if fuel is greater than 0, then start equals true
// scheduleService      mileage                     if mileage is greater than 30000, time for maintenance equals true
//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...

//git add .
	// git commit -m "comment"
	// git push










//TO DO: Creating Instances and Testing Them

//You can use the same instance "v" of the Vehicle class above for the base class.





//Create at least two new instances of the Car class and test them here:
