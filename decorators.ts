class Boat {
  color: string = "red";
  get formattedColor(): string {
    return this.color;
  }
  @testDecorator
  pilot(): void {
    console.log("swish");
  }
}

function testDecorator(target: any, key: string): void {
  console.log("Target: ", target);
  console.log("Key: ", key);
}
