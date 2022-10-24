class Scooter{
  // scooter code here

  constructor(station, user){
    this.station = station
    this.user = user
    this.serial = Math.floor(Math.random() * 1000) // we want a random number from 1 to 1000
    this.charge = Math.floor(Math.random() * 100) // we want a random number from 1 to 100
    this.isBroken = false
    this.docked = true
}
rent(){
  if(this.isBroken === false && this.charge > 20) {
    this.docked = false;
    console.log('Enjoy the ride!')
  } else if (this.charge <= 20){
    throw new Error ('Scooter low on battery, please charge!')
  } else {
    throw new Error ('Scooter is broken, please send a repair request!')
  }
}
dock(station) {
  if(!this.station) {
    throw new Error ('Docking station required!')
  }
  this.station = station
  this.docked = true
  this.user = ''
}
async recharge() {
  console.log('Starting charge');
  
  await new Promise(resolve => setTimeout(resolve, 2000)); // wait 2 seconds
  this.charge = 100

  console.log('Charge complete');   
}
async requestRepair() {
  await new Promise(resolve => setTimeout(resolve, 2000)); // wait 2 seconds
  this.isBroken = false

  console.log('Repair complete');   
}
}







module.exports = Scooter
