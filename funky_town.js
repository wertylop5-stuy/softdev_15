//temp
const STUDENTS = [
	"James",
	"Stanley",
	"Bobby",
	"Joey",
	"Annie",
	"Troy",
	"Zaphod"
];

let fibonacci = function(n) {
	if (n < 3) return 1;
	return fibonacci(n-1) + fibonacci(n-2);
}

let randomStudent = function() {
	return STUDENTS[ parseInt(Math.random() * STUDENTS.length) ]
}

/*
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));
console.log(fibonacci(7));
*/

console.log(randomStudent());
console.log(randomStudent());
console.log(randomStudent());
console.log(randomStudent());

