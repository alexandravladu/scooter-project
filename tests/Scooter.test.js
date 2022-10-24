const Scooter = require('../src/Scooter')
const User = require('../src/User')

const isObject = new Scooter('Sunderland')
//typeof scooter === object
describe('scooter object', () => {
  test('check if scooter is an object', () => {
    // edit this to be a real test!
    expect(typeof(isObject)).toBe('object');
  }
)
})


//Method tests
describe('scooter methods', () => {
  // tests here!

  //rent method

  //dock method

  //requestRepair method

  //charge method
  test("charge", async () => {
    const scooter = new Scooter();
    await scooter.recharge(); // we need to wait for the charge!
    expect(Scooter.charge).toBe(100);
});
})
