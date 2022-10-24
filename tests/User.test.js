const User = require('../src/User')

const user = new User('Alexandra', 'tired', 23)
// User tests here
describe('user matches', () => {
    test('if user is correct', () => {
        expect(user.username).toBe('Alexandra')
      })
      test('if age is over 17', () => {
        expect(user.age).toBe(23)
      })
    
      test('if password is correct', () => {
        expect(user.password).toBe('tired')
      })
      test('if password is incorrect', () => {
        expect(user.password).not.toBe('awesome')
      })
    
})