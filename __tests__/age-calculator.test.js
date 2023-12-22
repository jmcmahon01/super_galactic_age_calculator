import User from '../src/js/age-calculator.js';

describe('User', () => {
  test('should create a user object with name and age properties', () => {
    const user1 = new User("Ralph", 61);
    expect(user1.name).toBe("Ralph");
    expect(user1.age).toEqual(61);
  });
});