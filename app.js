// 1.1
const hello = () => {
	return 'Hello world!'
}

// 1.2
const x = 5
const square = num => {
	return num*num
}
console.log(square(x));

// 1.3
const numbers = [3, 62, 234, 7, 23, 74, 23, 76, 92]
const above70 = numbers.filter(number => number > 70)
console.log(above70)

// 1.4
const inventory = [
{type:   "machine", value: 5000},
{type:   "machine", value:  650},
{type:      "duck", value:   10},
{type: "furniture", value: 1200},
{type:   "machine", value:   77}
]

const totalMachineValue = inventory.filter((inv) =>{
	return inv.type == 'machine'
}).reduce(function(prevVal, elem) {
	return prevVal + elem.value;
}, 0)
console.log(totalMachineValue)

// 1.5
function Car() {
	this.speed = 0;
	setTimeout(function() {
		this.speed += 10;
	}, 100);
}

var c = new Car()
setTimeout(function(){
	console.log(c.speed);
}, 200)

// 2. CLASS
class Animal {
	// 2.1
	constructor(name, thirst = 100, belly = []) {
		this.name = name
	}

	// 2.2
	drink() {
		this.thirst = 10
	}

	// 2.3
	eat(food) {
		belly.push(food)
	}
}

// 2.4
class Dog {
	constructor(name, breed) {
		this.name = name
		this.breed = breed
	}
	bark() {
	}
}

// 3. Enhanced Object Literals
function getPrice(service) {
	var price = 50.0;

	return {
		service,
		price,
		discount(rate) {
			if (rate <= 0 || rate > 1) {
				throw new Error('Invalid discount rate');
			}
			this.price *= 1 - rate;
		},
		get() {
			return this.price
		}
	};
}
var priceDetail = getPrice('EXPRESS');
priceDetail.discount(0.2);

console.log(priceDetail.get());

// 5. Destructuring 
var person = {
  name: 'Joe',
  age: 21,
  married: true,
  hobbies: ['football', 'tennis', 'cooking'],
  contact: {
    phone: '0123456789',
    email: 'name@example.com',
  },
};

// 5.1 5.2
const getInfo = () => {
	let {name: myName, age: myAge} = person
	return {name: myName, age: myAge}
}

// 5.3
const getHobs = () => {
	let [h1, h2] = person.hobbies
	return [h1 , h2]
}

// 5.4
const getMarr = () => {
	let {married: m} = person
	return {married: m}
}

// 5.5
const getCont = () => {
	let {phone, email = 'you@gmail.com'} = person.contact
	return {phone, email}
}

// export functions
module.exports = {
	hello,
	square,
	above70,
	totalMachineValue,
	price: priceDetail.get(),
	getInfo,
	getHobs,
	getMarr,
	getCont
}