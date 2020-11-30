class TypeA {
	name: string = 'Class A';
}

class ClassBaru<T> {
	classProp: T;

	constructor(classProp: T) {
		this.classProp = classProp;
	}
}

const classA = new TypeA();
const classBaru = new ClassBaru(classA);