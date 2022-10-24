const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

const scooterApp = new ScooterApp()
const isObject = new Scooter()
// ScooterApp tests here
describe('check is Scooter App is an object', () => {
  test('is object?', () => {
    expect(typeof(scooterApp)).toBe('object')
  })
  test('is object?', () => {
    expect(typeof(scooterApp.stations)).toBe('object')
  })
  test('is object?', () => {
    expect(scooterApp.registeredUsers).toStrictEqual([])
  })
})

// register user
describe('check registration and login', () => {
    test("Check if age is minimum 18", () => {
        const notAdult = new User ("Noah", "lovecherries", 18)
        expect(notAdult.age).toBeGreaterThanOrEqual(18)
        expect(notAdult.password).toBe("lovecherries")
        expect(notAdult.password).not.toBe("iamsohungry")
    

 })
})

// log in


// add scooter
describe('check is a scooter can be added or removed', () => {
    let user = new User('Alexandra', 'password', 23)
    describe('Add scooter', () => {
        const scooterApp = new ScooterApp()
        const scooter = new Scooter(null, user)
        scooterApp.addScooter(isObject.stations, scooter)
    })
})

describe ('login function', () => {
    let noah = new User('noah26', 'cherry')
    expect(ScooterApp.logIn(noah.username, noah.password)).toBe('Login successful')
    expect(ScooterApp.logIn(username, password)).toThrow('Username or password incorrect')
})
