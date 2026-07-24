// Index signatures

interface TransactionObj {
  pizza: number,
  books: number,
  job: number,
}

// This is the index signature and its declaring that we know all of the keys will 
// be strings and all of the values will be numbers
interface TransactionObject {
  // We can make it readonly so we can't reasign the values of the properties
  readonly [key: string]: number,
  pizza: number,
  books: number,
  job: number,
}

const todaysTransactions: TransactionObject = {
  pizza: -10,
  books: -5,
  job: 50,
}

console.log(todaysTransactions.pizza);
// Identical
console.log(todaysTransactions["pizza"]);

let prop: string = "pizza";
console.log(todaysTransactions[prop]);

const todaysNet = (transactions: TransactionObject): number => {
  let total = 0;

  for (const transaction in transactions) {
    total += transactions[transaction]!
  }

  return total
}

console.log(todaysNet(todaysTransactions)); // 35
console.log(todaysTransactions["Dave"]); // undefined


interface Student {
  // [key: string]: string | number | number[] | undefined
  name: string;
  GPA: number;
  classes?: number[];
}

const student: Student = {
  name: "Doug",
  GPA: 3.5,
  classes: [100, 200],
}

// console.log(student.test)

for (const key in student) {
  // Keyof does create a union type and a union type is the specific string literal
  console.log(`${key}: ${student[key as keyof Student]}`);
}

Object.keys(student).map(key => {
  // If we don't know the type of object we pass keyof typeof and an object name
  console.log(student[key as keyof typeof student]);
})

const logStudentKey = (student: Student, key: keyof Student): void => {
  console.log(`Student ${key}: ${student[key]}`);
}

logStudentKey(student, "GPA");

// interface Incomes {
//   [key: string]: number;
// }

type Streams = "salary" | "bonus" | "sidehustle"
type Incomes = Record<Streams, number | string>

const monthlyIncomes: Incomes = {
  salary: 500,
  bonus: 100,
  sidehustle: 250,
}

for (const revenue in monthlyIncomes) {
  console.log(monthlyIncomes[revenue as keyof Incomes]);
}
