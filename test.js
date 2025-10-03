console.log("1. 일반 함수 --------------------------------");

function foo(a) {
  var b = 2;
  console.log(a, b, this);
}

foo(1); // 1 2 window (non-strict)

console.log("2. 메서드 --------------------------------");
const obj = {
  value: 42,
  show() {
    console.log(this.value);
  },
};

obj.show(); // 42

console.log("3. 생성자 함수 --------------------------------");
function Person(name) {
  this.name = name;
}

const p = new Person("Aiden");
console.log(p.name); // "Aiden"

console.log("4. call, apply, bind --------------------------------");
function greet(greeting) {
  console.log(`${greeting}, ${this.name}`);
}

const person = { name: "Aiden" };

greet.call(person, "Hi"); // "Hi, Aiden"
greet.apply(person, ["Hello"]); // "Hello, Aiden"

const bound = greet.bind(person, "Hey");
bound(); // "Hey, Aiden"

console.log("5. 화살표 함수 --------------------------------");
const obj2 = {
  value: 100,
  arrow: () => {
    console.log(this.value);
  },
};

obj2.arrow(); // undefined

console.log("6. 클래스 메서드 --------------------------------");
class Car {
  constructor(model) {
    this.model = model;
  }
  showModel() {
    console.log(this.model);
  }
}

const car = new Car("Tesla");
car.showModel(); // "Tesla"

console.log("7. IIFE --------------------------------");
(function (a) {
  console.log("IIFE", a);
})(10); // "IIFE 10"

console.log("8. 콜백 함수 (예제: 비동기) --------------------------------");
setTimeout(function () {
  console.log("콜백 실행", this);
}, 0); // "콜백 실행 window" (브라우저) / "콜백 실행 global" (Node.js)

console.log("9. 클로저 --------------------------------");
function outer(x) {
  return function inner(y) {
    console.log("x:", x, "y:", y);
  };
}

const fn = outer(5);
fn(10); // "x: 5 y: 10"
