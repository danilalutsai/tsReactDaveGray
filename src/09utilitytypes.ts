// Partial
interface Assignment {
  studentId: string;
  title: string;
  grade: number;
  verified?: boolean;
}

// With Partial we declare that we are not going to require all the properties from a type
// but only some
const updateAssignment = (assign: Assignment, propsToUpdate: Partial<Assignment>): Assignment => {
  return { ...assign, ...propsToUpdate };
}

const assign1: Assignment = {
  studentId: "compsci123",
  title: "Final Project",
  grade: 0,
}

console.log(updateAssignment(assign1, { grade: 95 }));
const assignGraded: Assignment = updateAssignment(assign1, { grade: 95 });
