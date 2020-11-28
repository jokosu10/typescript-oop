class Animal {
	name: string;

	constructor(name: string) {
		this.name = name;
	}
}

interface IShark extends Animal {
	swim(): void;
}

class Shark implements IShark {
	name: string;

	constructor(name: string) {
		this.name = name;
	}

	swim(): void {
		console.log(`${this.name} Berenang`);
	}
}

let shark = new Shark("Hiu Putih");
shark.swim();
