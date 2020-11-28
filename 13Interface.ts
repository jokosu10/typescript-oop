interface AndroidPhone {
	name: string;
	menu(): void;
	home(): void;
	back(): void;
}

class Samsung implements AndroidPhone {
	name: string;

	constructor(name: string) {
		this.name = name;
	}

	menu(): void {
		console.log("Menu click");
	}

	home(): void {
		console.log("Home click");
	}

	back(): void {
		console.log("Back click");
	}
}

class Asus implements AndroidPhone {
	name: string;

	constructor(name: string) {
		this.name = name;
	}

	menu(): void {
		console.log("Menu click");
	}

	home(): void {
		console.log("Home click");
	}

	back(): void {
		console.log("Back click");
	}
}

class GameAndroid {
	private phone: AndroidPhone;

	constructor(phone: AndroidPhone) {
		this.phone = phone;
	}

	back() {
		console.log('back to main menu in game');
	}

	menu() {
		this.phone.menu();
	}

	home() {
		this.phone.home();
	}
}

const samsung = new Samsung("Tipe A");

const game = new GameAndroid(samsung);
game.home();
game.back();
game.menu();

interface ApplePhone {
	name: string;
	home(): void;
}

class IPhone implements ApplePhone {
	name: string;

	constructor(name: string) {
		this.name = name;
	}

	home(): void {
		console.log("muncul global menu");
	}
}

const iphone = new IPhone("Iphone 4");
iphone.home();