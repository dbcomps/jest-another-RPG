const Potion = require('./Potion.js');
const Character = require('./Character.js');

class Enemy extends Character {
	constructor(name, weapon) {
		super(name);
		
		this.weapon = weapon;
		this.potion = new Potion();
	}
	
	addPotion(potion) {
		this.inventory.push(potion);
	}
	
	getDescription() {
  	return `A ${this.name} holding a ${this.weapon} has appeared!`;
	}
}


module.exports = Enemy;