const Scooter = require('../src/Scooter')
const User = require('../src/User')
// const Stations = require('../src/Scooter')

const isObject = new Scooter('Sunderland')

//typeof scooter === object
// check station, check user with username, password, age
describe('scooter object', () => {
  test('check if scooter is an object', () => {
    expect(typeof(isObject)).toBe('object');
  })
  test('check if the station is correct', () =>{
    expect(isObject.station).toBe('Sunderland')
  })

})

  //rent method
describe('check if the rent method works', () =>{
  test('check if it is charged', () => {
    isObject.rent()
    isObject.charge = 100
    isObject.isBroken = false
    expect(isObject.isBroken).toBe(false)
    expect(isObject.charge).toBe(100)
  })
  test('check if it is charged less than 100', () =>{
    isObject.rent()
    isObject.charge = 20
    isObject.isBroken = true
    expect(() => isObject.rent()).toThrow('Scooter low on battery, please charge!')
  })

})


  //dock method
  describe('check if the scooter can dock', () => {
    test('check if the station is correct', () => {
      isObject.dock('Sunderland')
      expect(isObject.station).toBe('Sunderland')
      expect(isObject.station).not.toBe(undefined)
      expect(isObject.docked).toBe(true)
      expect(isObject.user).not.toBeUndefined()
      expect(isObject.user).not.toBe('Noah')
      expect(isObject.user).toBe('')
    })
  })

  //requestRepair method
  describe('Test request repair', () => {
    test('Changes values', async() =>{
      await isObject.requestRepair()
      expect(isObject.isBroken).toBe(false)
    })
  })

  //recharge method
describe('Test scooter recharge', () => {
  test('Changes values', async() => {
    await isObject.recharge()
    expect(isObject.charge).toBe(100)
  })
})
