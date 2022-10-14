// CLASSES in TS
// Classes are blueprints to create objects with values and methods to represent something

class VehicleCla {
  make: string
  model: string
  year: number
  color: string = 'white'


  // The constructor is instantly executed when a new instance is created
  constructor(make: string, model: string, year: number, color: string) {
    this.make = make
    this.model = model
    this.year = year
    this.color = color
  }

  drive(): void {
    console.log('Driving...')
  }

  honk(): void {
    console.log('Beep!')
  }
}

// Inheritance
class Car extends VehicleCla {
  // Overriding an inherited property
  // color = 'blue'
  // Overring an inherited method
  honk(): void {
    console.log('Beep beep!')
  }
  
}

const audiS3Red = new Car('Audi', 'S3', 2012, 'red')

audiS3Red.drive()
audiS3Red.honk()
console.log(audiS3Red.make)
console.log(audiS3Red.model)
console.log(audiS3Red.year)
console.log(audiS3Red.color)

// ==== Modifiers (by default all have a public modifier) ====
// public - Can be called anywhere, anytime
// private - Can only be called by other methods in "this" class
// protected - Can be called by other methods in "this" class, or by other methods in child classes

class Animal {
  // Private - It only makes a method private to avoid other developers calling it when they shouldn't
  // because maybe its dangerous and can break something
  private makeSound(): void {
    console.log('sound')
  }

  protected motherClass(): void {
    console.log('Animal')
  }
}

class Dog extends Animal {
  // if makeSound was is private here but not in the original class, TS will complain
  // makeSound(): void {
  //   console.log('Bark!')
  // }

  private bark(): void {
    console.log('Bark!')
  }

  startBarking(): void {
    this.bark()
  }

  sayMotherClass(): void {
    this.motherClass()
  }
}

const milo = new Dog()
// Cannot be called since makeSound in Dog is private
// milo.makeSound()
milo.startBarking()

// Cannot call motherClass here because it is protected
// milo.motherClass()
milo.sayMotherClass()


class Person {
  // Using public here, it accepts anything as the head
  constructor (public firstName: string, public lastName: string) {}

  sayHi(): void {
    console.log(`Hi, my name is ${this.firstName} ${this.lastName}`)
  }
}

class Child extends Person {
  // constructor(public age: number) {
  //   // Needs super to work
  //   // Super will call the constructor of the parent
  //   super('Billie', 'Jonhson')
  // } 

  // Another way is to declare the constructor with the data needed in the parent
  constructor(public age: number, firstName: string, lastName: string) {
    // Then just pass the same to super
    super(firstName, lastName)
  }
}

const johnDoe = new Person('John', 'Doe')
johnDoe.sayHi()

const billie = new Child (9, 'Billie', 'Boy')
billie.sayHi()
console.log(billie.age)

