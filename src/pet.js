const MAXIMUM_FITNESS = 10;
const INITIAL_AGE = 0
const MIN_HUNGER = 0

function Pet (name) {
    this.name = name;
    this.age = INITIAL_AGE;
    this.hunger = MIN_HUNGER;
    this.fitness = MAXIMUM_FITNESS
}

Pet.prototype.growUp = function() {
        this.age++;
        this.hunger+=5;
        this.fitness-=3;
    }

Pet.prototype.walk = function() {
    if (this.fitness+4<=MAXIMUM_FITNESS) {
        this.fitness+=4
    }
    else {
        this.fitness = MAXIMUM_FITNESS
}
}

Pet.prototype.feed = function() {
    if (this.hunger-3>=MIN_HUNGER){
        this.hunger-=3
    }    
    else {
        this.hunger=MIN_HUNGER
    }
}



module.exports = Pet

