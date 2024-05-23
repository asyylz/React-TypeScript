let age: number;
age = 12;

let userName: string;
userName = 'Asiye';

let isEngineer: boolean;
isEngineer = true;

let hobbies: string[];
hobbies = ['Sports', 'Cooking', 12]; // this gives error since 12 is number

// let person: {
//   name: string;
//   age: number;
// };

// person = {
//   name: 'Asiye',
//   age: 38,
// };

// person = {
//   isEmployee: true,
// };

//let people: {
// name: string;
//age: number;
//}[]; // array of such objects

// Type inference
//let course = 'React - The Complete Guide';

//course = 1234;

// Union types
let course: string | number = 'React - The Complete Guide';

course = 1234;

type Person = {
  name: string;
  age: number;
};

let person: Person;
let people: Person[];

// Function adn types
function add(a: number, b: number) {
  return a + b;
}

function printCustom(value: any) {
  console.log(value);
}

// Generics
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1,1,2,3]
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd'); 

//updatedArray[0].split('');
