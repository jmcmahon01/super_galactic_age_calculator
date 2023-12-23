import User from '../src/js/age-calculator.js';

describe('User', () => {
  let user;
  beforeEach(() => {
    user = new User("Ralph", 61);

  });
  test('should create a user object with name and age properties', () => {
    expect(user.name).toBe("Ralph");
    expect(user.age).toEqual(61);
  });
  test('should calculate age on Mercury from age on Earth', () => {
    expect(user.calculateMercuryAge()).toEqual(254);

  });
  test('should calculate age on Venus from age on Earth', () => {
    expect(user.calculateVenusAge()).toEqual(98);
  });
  test('should calculate age on Mars from age on Earth', () => {
    expect(user.calculateMarsAge()).toEqual(32);
  });
  test('should calculate age on Jupiter from age on Earth', () => {
    expect(user.calculateJupiterAge()).toEqual(5);
  });
  test('should calculate the amount of years that have passed on Mercury since 50th birthday', () => {
    expect(user.timePassedOnMercury()).toEqual(46);
  });
  test('should calculate the amount of years that have passed on Venus since 50th birthday', () => {
    expect(user.timePassedOnVenus()).toEqual(18);
  });
  test('should calculate the amount of years that have passed on Mars since 50th birthday', () => {
    expect(user.timePassedOnMars()).toEqual(6);
  });
  test('should calculate the amount of years that have passed on Jupiter since 50th birthday', () => {
    expect(user.timePassedOnJupiter()).toEqual(1);
  });
  test('should calculate the amount of years that have passed on Earth since 50th birthday', () => {
    expect(user.timePassedOnEarth()).toEqual(11);
  });
  test('should calculate the amount of years that will pass on Mercury at 70th birthday', () => {
    expect(user.futureBdayMerc()).toEqual(38);
  });
  test('should calculate the amount of years that will pass on Venus at 70th birthday', () => {
    expect(user.futureBdayVen()).toEqual(15);
  });

});