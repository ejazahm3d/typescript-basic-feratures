const add = (a: number, b: number): number => a + b;
// Donr use inference in function returns
const subtract = (a: number, b: number): number => a - b;
// This can work for named functions as well
function divide(a: number, b: number): number {
  return a / b;
}
// Annonymous functions assigned to a variable
const multiply = function(a: number, b: number): number {
  return a * b;
};

// Void can return null or undefined
const logger = (message: string): void => {
  console.log(message);
};

// never returns nothing. Useful for throwing errors but not recommended
const throwError = (message: string): never => {
  throw new Error(message);
};

const forecast = {
  date: new Date(),
  weather: "sunny"
};

const logWeather = ({
  date,
  weather
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};
