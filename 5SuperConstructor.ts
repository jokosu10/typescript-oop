class Hewan6 {
	nama: string = '';
	kaki: number = 0;

	constructor(nama: string, kaki: number) {
		this.nama = nama;
		this.kaki = kaki;
	}
}

class Katak6 extends Hewan6 {
	beracun: boolean;

	constructor(nama: string, kaki: number, beracun: boolean) {
		super(nama, kaki);
		this.beracun = beracun;
	}
}

let katak6 = new Katak6("katak", 4, false);
console.log(katak6);