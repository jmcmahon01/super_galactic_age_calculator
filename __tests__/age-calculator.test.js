import User from '../src/js/age-calculator.js';

describe('User', () => {
  let user;
  beforeEach(() =>{
    user = new User("Ralph", 61);
  });
  test('should create a user object with name and age properties', () => {
    expect(user.name).toBe("Ralph");
    expect(user.age).toEqual(61);
  });
  test('should calculate age on Mercury from age on earth', () => {
    expect(user.calculateMercuryAge()).toEqual(254);
  })
});