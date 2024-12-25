// Create a menu app as seen in this week’s video. 
//  What you create is up to you as long as it meets the following requirements:

//     Use at least one array.
//     Use at least two classes.
//     Your menu should have the options to create, view, and delete elements.


// Menu Cars

// cars array[]

// class "Car" - Define class "Car", and use constructor for 2 parameters `make` and `model`
class Car {
    constructor(make, model){
        this.make = make;
        this.model = model;
    }   
}
 
// class Menu - Declare a new class `Menu` and use an empty array to hold car data.
class Menu {
    constructor(){
        this.cars=[];
    }

    // The addCar method lets us add a car to the 'cars' array.
    // We are prompted for a make, then a model
    // Any new car make/model is pushed to array
    addCar(){
        let carMake = prompt("Enter the car make:");
        let carModel = prompt("Enter the car model:");
        this.cars.push(new Car(carMake, carModel));
    }

    //the deleteCars Method allows us to do just that, delete a car based off an index.
    //the splice method modifies the the array by removing/replacing items.
    deleteCar(){
        let carIndex = prompt("Enter car index to delete: ")
        this.cars.splice(carIndex, 1);
    }
 
    //view cars - This displays the list of cars stored in 'cars' array. 
    //the variable 'displayCars' initialized as empty string. 
    // 'for' loop will iterate over each car in the array.
    // 'displayCars' string adds new line to returning the index, make and model of each car.
    viewCars(){
       let displayCars = '';
       for(let i=0; i < this.cars.length; i++){

        displayCars += `
        ${i}); ${this.cars[i].make}, ${this.cars[i].model}`
       }

       // 'alert' function displays an alert box with our message as template literal from above.
    alert(`
    Car Inventory:
    --------------
    ${displayCars}   
    `);

    }    
    // This menu displays varios options to the user. 'prompt()' displays a dialog box that prompts
    // the user for input.
    showMainMenu(){
        return prompt(`
        Main Menu:
        ---------------------
        0) Exit Menu
        1) Add Car
        2) Delete Car
        3) View All Cars    
        `);
    
    }
    //This `start` method initializes and displays the menu continuously until user chooses to exit.
    start(){
        let selection = this.showMainMenu();
        while(selection != 0){
            switch(selection){
                case "1": this.addCar();
                break;

                case "2": this.deleteCar();
                break;

                case "3": this.viewCars(); 
                break;

                default: selection = 0; 
            }
        selection = this.showMainMenu();
        }
        alert("Exiting Menu: Sayóunara!")
    }
}


// let car1 = new Car("Mazda", "RX7")
// let car2 = new Car("Delorean", "DMC-12")

// console.log(car1); 
// console.log(car2);

// Instantiate the menu class and invoke the `start()` method
let menu = new Menu();

// menu.addCar();
// menu.addCar();
// menu.viewCars();
// menu.deleteCar();
// menu.viewCars();

// starts the menu loop
menu.start();