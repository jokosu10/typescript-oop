type UserType = {
	name: string;
}

interface UserInterface {
	name: string;
}

type Phone = string;
type PC = number;

interface AAA {
	Phone: string;
	PC: number;
}

interface Dinosaurus {
	name: string;
}

interface Dinosaurus {
	weight: number;
}

class Dino implements Dinosaurus {
	name: string;
	weight: number;

	constructor(name: string, weight: number) {
		this.name = name;
		this.weight = weight;
	}
}