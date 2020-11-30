function getData(value: any) {
	return value;
}

let data1 = getData('test');
console.log(data1);

function getData2<T>(value: T) {
	return value;
}

const data2 = getData2<string>("test");
console.log(data2.length);

const data3 = getData2<number>(123456);
console.log(data3.toFixed(2));