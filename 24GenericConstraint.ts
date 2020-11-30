

interface Length {
	length: number;
}

function generics24<T extends Length>(args: T): T {
	console.log(args.length);
	return args;
}

const generics24a = generics24('tested');
console.log(generics24a);

const generics24b = generics24({ length: 10, value: 500 });