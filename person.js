// const person = {
// 	name: 'John Doe',
// 	age: 30
// };
// module.exports = person;
console.log(__dirname, __filename);
class person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	greeting() {
		console.log(`My name is ${this.name} adn i am ${this.age}`);
	}
}
//sujit
module.exports = person;
