const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  // ScooterApp code here
  constructor() {
    this.stations = {
      LondonBlackfriers: [],
      Sunderland: [],
      KingsCross: [],
      Watford: []
    }

  }
  registeredUsers = []
}

// static scooterSessions = []



module.exports = ScooterApp
