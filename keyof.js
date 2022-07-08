// type PersonKeys = keyof Person;
var person = logAccess({
    name: "subham",
    age: 23,
    location: "hetauda"
}, "age");
function logAccess(object, key) {
    return object;
}
