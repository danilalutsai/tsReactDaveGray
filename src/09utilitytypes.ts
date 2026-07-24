// Partial
interface Assignment {
  studentId: string;
  title: string;
  grade: number;
  verified?: boolean;
};

// With Partial we declare that we are not going to require all the properties from a type
// but only some
function updateAssignment(assign: Assignment, propsToUpdate: Partial<Assignment>): Assignment {
  return { ...assign, ...propsToUpdate };
}

const assign1: Assignment = {
  studentId: "compsci123",
  title: "Final Project",
  grade: 0,
}

console.log(updateAssignment(assign1, { grade: 95 }));
const assignGraded: Assignment = updateAssignment(assign1, { grade: 95 });

// Required and Readonly
// Required - requires all the properties at the difference from Partial
function recordAssignment(assign: Required<Assignment>): Assignment {
  // send to database
  return assign;
}

const assignVerified: Readonly<Assignment> = { ...assignGraded, verified: true };

recordAssignment({ ...assignGraded, verified: true });

// Record type - the most popular one. Keys - strings, values - string (in our example)
const hexColorMap: Record<string, string> = {
  red: "FF0000",
  green: "00FF00",
  blue: "0000FF",
};

type Students = "Sara" | "Kelly";
type LetterGrades = "A" | "B" | "C" | "D" | "U";

const finalGrades: Record<Students, LetterGrades> = {
  Sara: "B",
  Kelly: "U",
};

interface Grades {
  assign1: number,
  assign2: number,
};

const gradeData: Record<Students, Grades> = {
  Sara: { assign1: 85, assign2: 93 },
  Kelly: { assign1: 76, assign2: 15 },
};

// Pick or Omit
type AssignResult = Pick<Assignment, "studentId" | "grade">;

const score: AssignResult = {
  studentId: "k123",
  grade: 85,
};

type AssignPreview = Omit<Assignment, "grade" | "verified">;

const preview: AssignPreview = {
  studentId: "k123",
  title: "Final project",
};

// Exclude and Extract
type adjustedGrade = Exclude<LetterGrades, "U">;
type highGrade = Extract<LetterGrades, "A" | "B">;

// Nonullable
type allPossibleGrade = "Dave" | "John" | null | undefined;
type NamesOnly = NonNullable<allPossibleGrade>;

// ReturnType
type newAssign = { title: string, points: number };

function createNewAssign(title: string, points: number): newAssign {
  return { title, points }
}

type newAssign1 = ReturnType<typeof createNewAssign>;

const tsAssign: newAssign = createNewAssign("Utility types", 100);
console.log(tsAssign);

// Parameters
type AssignParams = Parameters<typeof createNewAssign>;
const assignArgs: AssignParams = ["Generics", 100];
const assign2: newAssign = createNewAssign(...assignArgs);
console.log(assign2);

// Awaited - helps us with the Return type of a Promise

type User = {
  id: number;
  name: string;
  email: string;
  // ...whatever fields you use
};

async function fetchUsers(): Promise<User[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  return res.json();
}

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>

fetchUsers().then(users => console.log(users));
