type Person = {
  name: string;
  age: number;
  location: string;
};

// type PersonKeys = keyof Person;

const person = logAccess(
  {
    name: "subham",
    age: 23,
    location: "hetauda",
  },
  "age"
);

function logAccess(object: Person, key: keyof Person): Person {
  return object;
}
