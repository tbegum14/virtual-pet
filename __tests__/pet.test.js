const Pet = require('../src/pet');


describe("constructor", ()=>{
    test("returns an object", ()=>{
        expect(new Pet('Fido')).toBeInstanceOf(Object)
    })

    test("returns the name", ()=>{
        const pet = new Pet("Fido")
        expect(pet.name).toEqual("Fido")
    })

    test("returns initial age as 0", ()=>{
        const pet = new Pet("Fido")
        expect(pet.age).toEqual(0)
    })
})

describe("growUp", ()=>{

    test("increments age by 1", ()=>{
        const pet = new Pet("Fido")
        pet.growUp()
        expect(pet.age).toEqual(1)
    })

    test("increments age by 2", ()=>{
        const pet = new Pet("Fido")
        pet.growUp()
        pet.growUp()
        expect(pet.age).toEqual(2)
    })

    test("growUp function increments hunger by 5", ()=>{
        const pet = new Pet("Fido")
        pet.growUp()
        expect(pet.hunger).toEqual(5)
    })

    test("growUp function decrements fitness by 3", ()=>{
        const pet = new Pet("Fido")
        pet.growUp()
        expect(pet.fitness).toEqual(7)
    })

})

describe("walk", ()=> {

    test("walk", ()=>{
        const pet = new Pet("Fido")
        pet.fitness = 4
        pet.walk()
        expect(pet.fitness).toEqual(8)
    })

    test("walk", ()=>{
        const pet = new Pet("Fido")
        pet.fitness = 7
        pet.walk()
        expect(pet.fitness).toEqual(10)
    })
})

describe("feed", ()=>{

    test("feed", ()=>{
        const pet = new Pet('Fido')
        pet.growUp()
        pet.feed()
        expect(pet.hunger).toEqual(2)
    })

    test("feed", ()=>{
        const pet = new Pet('Fido')
        pet.growUp()
        pet.feed()
        pet.feed()
        expect(pet.hunger).toEqual(0)
    })
    
})

describe("checkUp", ()=>{
    
    test("checkUp", ()=>{
        const pet = new Pet('Fido')
        pet.fitness = 3
        expect(pet.checkUp()).toEqual("I need a walk")
    })

    test("checkUp", ()=>{
        const pet = new Pet('Fido')
        pet.hunger = 6
        expect(pet.checkUp()).toEqual("I am hungry")
    })

    test("checkUp", ()=>{
        const pet = new Pet('Fido')
        pet.fitness = 3
        pet.hunger = 6
        expect(pet.checkUp()).toEqual("I am hungry AND I need a walk")
    })

    test("checkUp", ()=>{
        const pet = new Pet('Fido')
        pet.fitness = 6
        pet.hunger = 3
        expect(pet.checkUp()).toEqual("I feel great!")
    })
})


