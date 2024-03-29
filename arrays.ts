// Type Inference for arrays
const carMakers = ["ford", "toyota", "chevvy"];

const dates = [new Date(), new Date()];

const carsByMake = [["f150"], ["corolla"], ["camaro"]];

// Help with inference when extracting values

const cartoon = carMakers[0];
const myCar = carMakers.pop;

// Prevent incompatible values
// carMakers.push(100);

// Help with map
carMakers.map(
  (car: string): string => {
    return car.toUpperCase();
  }
);

// Flexible types
const importantDates: (Date | string)[] = [new Date(), "2030-10-10"];
