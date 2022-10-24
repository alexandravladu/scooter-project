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
    this.registeredUsers = []
  }
 
// first method: checking if a user is registered or not, and if the age is minimum 17
register(user) {
  // we want to check if the user is already registered and if the age is 17 or above
  if(this.registeredUsers.some(item => item.username === user.username) === false) {
    if(user.age >= 17){
      // only if both checks pass, we want to push into the registeredUsers array
      this.registeredUsers.push({
        password: user.password,
        age: user.age,
        loggedIn: false,
        accountChange: 0
      }
      )
      console.log('user has been registered!')
    } else {
      console.log('You are too young to register!')
    }
  }
}

// second method, which checks if a user can log in by checking if the username and password match
logIn(username, password) {
  // if(this.registeredUsers.some(item => item.username === User.username) === true){
    // we want to check 
    for(let i = 0; i < this.registeredUsers.length; i++){
      if((this.registeredUsers[i.username] === username) && (this.registeredUsers[i.password] === password)){
        this.registeredUsers[i.loggedIn] = true
        console.log('Welcome back!')
      } else {
        console.log('We are sorry but your login failed!')
      }

    }

  }


// We can use Object.keys to see if location is included in stations
// addScooter(location, scooter){
//   if(Object.keys(this.stations).includes(location)){
//     this.stations[location].push(scooter)
//     console.log('Scooter added')
//   }
//   else {
//     console.log('Error')
//   }
// }

addScooter(station, scooter) {
  scooter.station = station
  this.stations[station].push(scooter)
}


RemoveScooter(scooter) {
  let removedScooter = false
  for (let station of Object.keys(this.stations)) {
    let scooters = this.stations[station]
    for (secondScooter of scooters){
      if(secondScooter.serial !== scooter.serial) continue;
      let index = scooters.indexOf(otherScooter)
      scooters.splice(index, 1)
      removedScooter = true
    }
  }
  if(!removedScooter){
    throw new Error('Scooter serial number not located!')
  }
  return "Scooter has been successfully removed!"

}
}






module.exports = ScooterApp
