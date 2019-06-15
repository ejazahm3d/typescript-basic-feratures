class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log("beep");
  }
}

const vehicle = new Vehicle("Orange");

class Cars extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log("VROOOM");
  }
  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const ferrari = new Cars(4, "red");
ferrari.startDrivingProcess();
