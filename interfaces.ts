// Without Interfaces

/*const printVehicle = (vehicle: {
  name: string;
  year: number;
  broken: boolean;
}): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.broken}`);
}; */

// With Interface

/*
interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
};

const printVehicle = (vehicle: Vehicle): void => {
  console.log(vehicle.summary());
};

printVehicle(oldCivic);
*/

// More generic interface

interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
};

const drinks = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My Drink has ${this.sugar} grams of sugar`;
  }
};
const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drinks);
