const MAXIMUM_FITNESS = 10;
const INITIAL_AGE = 0
const MIN_HUNGER = 0

function Pet (name) {
    this.name = name;
    this.age = INITIAL_AGE;
    this.hunger = MIN_HUNGER;
    this.fitness = MAXIMUM_FITNESS
    this.children = []
}

Pet.prototype = {
    get isAlive(){
        return this.age < 30 && this.hunger < 10 && this.fitness > 0;
    }
}

Pet.prototype.growUp = function() {

    if (!this.isAlive){
        throw new Error('Your pet is no longer alive :(')
    }
        this.age++;
        this.hunger+=5;
        this.fitness-=3;
    }

Pet.prototype.walk = function() {

    if (!this.isAlive){
        throw new Error('Your pet is no longer alive :(')
    }
    if (this.fitness+4<=MAXIMUM_FITNESS) {
        this.fitness+=4
    }
    else {
        this.fitness = MAXIMUM_FITNESS
}
}

Pet.prototype.feed = function() {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
    }
    if (this.hunger-3>=MIN_HUNGER){
        this.hunger-=3
    }    
    else {
        this.hunger=MIN_HUNGER
    }
}

Pet.prototype.checkUp = function() {

    if (this.fitness<=3 && this.hunger>=5){
        return "I am hungry AND I need a walk"
    }

    else if (this.hunger>=5){
        return "I am hungry"
    }

    else if (this.fitness<=3){
        return "I need a walk"
    }
    
    else {
        return "I feel great!"
    }

}

Pet.prototype.adoptChild = function(child) {
    this.children.push(child)
}

Pet.prototype.haveBaby = function(name) {
    this.children.push(new Pet(name))
}


module.exports = Pet

