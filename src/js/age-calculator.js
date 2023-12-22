export default class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  calculateMercuryAge() {
    const mercuryMultiplier = 0.24;
    return Math.round(this.age / mercuryMultiplier);
  }
  calculateVenusAge() {
    const venusMultiplier = 0.62;
    return Math.round(this.age / venusMultiplier);
  }
  calculateMarsAge() {
    const marsMultiplier = 1.88;
    return Math.round(this.age / marsMultiplier);
  }
  calculateJupiterAge() {
    const jupiterMultiplier = 11.86;
    return Math.round(this.age / jupiterMultiplier);
  }
};