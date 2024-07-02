export default class Dice {
  constructor(private sides: number) {}
  roll(): number {
    let number = Math.floor(Math.random() * this.sides) + 1;

    return number;
  }
}
