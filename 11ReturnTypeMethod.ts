class Burung {
	private _kaki: number = 2;

	get kaki(): number {
		return this._kaki;
	}

	terbang(): void {
		console.log("terbang melayang");
	}

	async makan(): Promise<string> {
		return 'makan';
	}
}