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
  timePassedOnMercury() {
    const mercuryMultiplier = 0.24;
    const previousBirthday = 50;
    return Math.round((this.age - previousBirthday) / mercuryMultiplier);
  }
  timePassedOnVenus() {
    const venusMultiplier = 0.62;
    const previousBirthday = 50;
    return Math.round((this.age - previousBirthday) / venusMultiplier);
  }
  timePassedOnMars() {
    const marsMultiplier = 1.88;
    const previousBirthday = 50;
    return Math.round((this.age - previousBirthday) / marsMultiplier);
  }
  timePassedOnJupiter() {
    const jupiterMultiplier = 11.86;
    const previousBirthday = 50;
    return Math.round((this.age - previousBirthday) / jupiterMultiplier);
  }
  timePassedOnEarth() {
    const previousBirthday = 50;
    return Math.round(this.age - previousBirthday);
  }
  futureBdayMerc() {
    const mercuryMultiplier = 0.24;
    const birthday = 70;
    return Math.round((birthday - this.age) / mercuryMultiplier);
  }
  futureBdayVen() {
    const venusMultiplier = 0.62;
    const birthday = 70;
    return Math.round((birthday - this.age) / venusMultiplier);
  }
  futureBdayMars() {
    
  }
}
