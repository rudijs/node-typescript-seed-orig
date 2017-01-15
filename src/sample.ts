export class Animal {
  private name: string;
  constructor(theName: string) { this.name = theName; }
  getName() {
    return this.name
  }
  getLocation() {
    return 'Great Barrier Reef'
  }
}