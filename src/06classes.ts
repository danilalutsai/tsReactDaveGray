interface Musician {
  name: string,
  instrument: string,
  play(action: string): string,
}

// The Guitarist class must contain all properties and methods required by the Musician interface.
class Guitarist implements Musician {
  name: string;
  instrument: string;

  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }

  play(action: string): string {
      return `${this.name} ${action} the ${this.instrument}`
  }
}

const Page = new Guitarist("Jimmy", "guitar");

console.log(Page.play("strums"));

class Peeps {
  // Static means that this property applies not to a instance of a class but to class directly itself
  static count: number = 0;

  static getCount(): number {
    // We refer to class itself to Peep instead of keyword this as count is static property
    return Peeps.count
  }

  public id: number 

  constructor(public name: string) {
    this.name = name;
    // ++ on the left means increments first
    // ++ on the right means increment after
    // We will have id 1 when we first instanciate the class instead of id 0
    // If we keep ++ after the first instance of a class will have id 0
    this.id = ++Peeps.count;
  }
}

const Amy = new Peeps("Amy");
const John = new Peeps("John");
const Steve = new Peeps("Steve");

// This will tell us how many times the class was instanciated or in other word 
// how many instances of a class do we have
console.log(Peeps.count); // 3
console.log(Peeps.getCount()); // 3

console.log(Amy.id) // 1
console.log(John.id) // 2
console.log(Steve.id) // 3

class Bands {
  private dataState: string[];

  constructor() {
    this.dataState = [];
  }

  // Get is a special keyword that we use to get our data
  public get data(): string[] {
    return [`This is the getter ${this.dataState.join(", ")}`]
  }

  // (setter)
  public set data(value: string[]) {
    // Every is a method (higher order function) that applies to every element of an array
    // Is a boolean and returns true if every element of an array matches the condition
    // Setters can not return a value
    if (Array.isArray(value) && value.every(el => typeof el === "string")) {
      this.dataState = value;
    } else throw new Error("Param is not an array of strings")
  }
}

const MyBands = new Bands();

MyBands.data = ["Neil Young", "Led Zep"];

// That is how to use getter
console.log(MyBands.data);
MyBands.data = [...MyBands.data, "ZZ Top"];
console.log(MyBands.data);

MyBands.data = ["Van Halen"];
console.log(MyBands.data);
