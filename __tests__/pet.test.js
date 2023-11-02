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
        const pet = new Pet("Fido", 0)
        expect(pet.age).toEqual(0)
    })

    test("increments age by 1", ()=>{
        const pet = new Pet("Fido", 0)
        pet.growUp()
        expect(pet.age).toEqual(1)
    })

    test("increments age by 2", ()=>{
        const pet = new Pet("Fido", 0)
        pet.growUp()
        pet.growUp()
        expect(pet.age).toEqual(2)
    })

    test("growUp function increments hunger by 5", ()=>{
        const pet = new Pet("Fido", 0)
        pet.growUp()
        expect(pet.hunger).toEqual(5)
    })

    test("growUp function decrements fitness by 3", ()=>{
        const pet = new Pet("Fido", 0)
        pet.growUp()
        expect(pet.fitness).toEqual(7)
    })
})