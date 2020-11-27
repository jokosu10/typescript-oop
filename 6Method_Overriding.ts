class Hewan7 {
	name: string = "";

	bernafas() {
		console.log('sedang bernafas');
	}
}

class Katak7 extends Hewan7 {
	bernafas() {
		console.log('malas bernafas');
	}
}

let katak7 = new Katak7();
katak7.bernafas();