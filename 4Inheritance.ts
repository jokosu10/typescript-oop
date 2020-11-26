class Hewan5 {
	nama: string = '';
	kaki: number = 0;

	bernafas() {
		console.log("nafas");
	}
}

class Burung4 extends Hewan5 {
	warna: string = "merah";
}

let burung4 = new Burung4();
burung4.nama = "kenari";
burung4.kaki = 2;
burung4.warna = "kuning";
console.log(burung4);
burung4.bernafas();

