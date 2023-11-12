const Pet = require("../src/pet");

describe("constructor", () => {
  test("instantiation of Pet returns an object", () => {
    expect(new Pet("Fido")).toBeInstanceOf(Object);
  });

  test("pet has name property", () => {
    const pet = new Pet("Fido");
    expect(pet.name).toEqual("Fido");
  });

  test("pet property of age has initial value of 0", () => {
    const pet = new Pet("Fido");
    expect(pet.age).toEqual(0);
  });
});

describe("growUp function", () => {
  test("function increments age by 1", () => {
    const pet = new Pet("Fido");
    pet.growUp();
    expect(pet.age).toEqual(1);
  });

  test("function increments age by 2 when called twice", () => {
    const pet = new Pet("Fido");
    pet.growUp();
    pet.growUp();
    expect(pet.age).toEqual(2);
  });

  test("function increments hunger by 5", () => {
    const pet = new Pet("Fido");
    pet.growUp();
    expect(pet.hunger).toEqual(5);
  });

  test("function decrements fitness by 3", () => {
    const pet = new Pet("Fido");
    pet.growUp();
    expect(pet.fitness).toEqual(7);
  });

  test("growUp does not work if pet is not alive", () => {
    const pet = new Pet("Fido");
    pet.age = 30;
    expect(() => pet.growUp()).toThrow("Your pet is no longer alive :(");
  });
});

describe("walk function", () => {
  test("increases fitness by 4", () => {
    const pet = new Pet("Fido");
    pet.fitness = 4;
    pet.walk();
    expect(pet.fitness).toEqual(8);
  });

  test("fitness does not go above 10", () => {
    const pet = new Pet("Fido");
    pet.fitness = 7;
    pet.walk();
    expect(pet.fitness).toEqual(10);
  });

  test("throws an error if the pet is not alive", () => {
    const pet = new Pet("Fido");
    pet.fitness = -1;
    expect(() => pet.walk()).toThrow("Your pet is no longer alive :(");
  });
});

describe("feed function", () => {
  test("feed reduces hunger by 3", () => {
    const pet = new Pet("Fido");
    pet.growUp();
    pet.feed();
    expect(pet.hunger).toEqual(2);
  });

  test("feed does not reduce hunger below 0", () => {
    const pet = new Pet("Fido");
    pet.growUp();
    pet.feed();
    pet.feed();
    expect(pet.hunger).toEqual(0);
  });

  test("throws an error if the pet is not alive", () => {
    const pet = new Pet("Fido");
    pet.age = 30;
    expect(() => pet.feed()).toThrow("Your pet is no longer alive :(");
  });
});

describe("checkUp function", () => {
  test("checkUp notifies if fitness is 3 or under", () => {
    const pet = new Pet("Fido");
    pet.fitness = 3;
    expect(pet.checkUp()).toEqual("I need a walk");
  });

  test("checkUp notifies in hunger is above 5", () => {
    const pet = new Pet("Fido");
    pet.hunger = 6;
    expect(pet.checkUp()).toEqual("I am hungry");
  });

  test("checkUp notifies if fitness is 3 or under and hunger is above 5", () => {
    const pet = new Pet("Fido");
    pet.fitness = 3;
    pet.hunger = 6;
    expect(pet.checkUp()).toEqual("I am hungry AND I need a walk");
  });

  test("checkUp notifies that fitness is above 3 and hunger is below 5", () => {
    const pet = new Pet("Fido");
    pet.fitness = 6;
    pet.hunger = 3;
    expect(pet.checkUp()).toEqual("I feel great!");
  });
});

describe("isAlive property", () => {
  test("isAlive returns true when fitness is above 0 and hunger is below 10", () => {
    const pet = new Pet("Fido");
    pet.fitness = 2;
    pet.hunger = 8;
    expect(pet.isAlive).toBeTruthy();
  });

  test("isAlive returns false if fitness is below 0 and hunger is above 10", () => {
    const pet = new Pet("Fido");
    pet.fitness = -1;
    pet.hunger = 11;
    expect(pet.isAlive).toBeFalsy();
  });
});

describe("parent can adopt child", () => {
  test("instance of Pet has children array", () => {
    const parent = new Pet("Jak");
    expect(parent.children).toEqual([]);
  });

  test("adoptChild moves child into children array", () => {
    const parent = new Pet("Jak");
    const child = new Pet("Zak");
    parent.adoptChild(child);
    expect(parent.children).toEqual([child]);
  });
});

describe("parent can have baby", () => {
  test("haveBaby creates an instance of a pet as a child of the parent", () => {
    const parent = new Pet("Jak");
    parent.haveBaby("Zak");
    expect(parent.children[0].name).toEqual("Zak");
  });
});
