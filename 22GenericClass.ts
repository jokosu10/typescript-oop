interface Generics3<T> {
	propA: T;
	methodA(): T
}

class GenericsClass<T> implements Generics3<T> {
	propA: T;

	constructor(prop: T) {
		this.propA = prop;
	}

	methodA(): T {
		return this.propA;
	}
}

const genericClassA = new GenericsClass<number>(1234);
console.log(genericClassA.methodA());