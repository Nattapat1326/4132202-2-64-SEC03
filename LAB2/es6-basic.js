var string1 = "st1";//global
string2 = "st2";//

string1 = "hello";
console.log(string1);

{
    let string1 = "my name";
    console.log(string1);
}
console.log(string1);

{
    const string1 = "win";
    // string1 = "vong";
}

//tradition fn
function add(a, b) {
    let c = a + b ;
    return c;
}

const res = add(5, 3);
console.log(res);

//arrow function
const add = (a, b) => a + b;
res = add(8, 5);
console(res);

//array
const cars = ["toyota", "mazda", "honda"];
const fruits = [];
fruits[0] = "apple";
fruits[3] = "mango";
const people = new Array("win", "jemes", "john");
console.log(people);
console.log(fruits);

let Popcars = cars.pop();
console.log(Popcars);
console.log(cars);

cars.push("kubta");
cars.shift(); //remove "toyota"
cars.unshift("froza");
console.log(cars);

const carSlide = cars.slice(1, 3);
console.log(carSlide);

carSlide.slice(1, 0, "Honda");
console.log(carSlide);

console.log(carSlide.toString());
console.log(carSlide.concat(people));
console.log([...cars, ...people])

