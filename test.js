const digits = require("./digits");

var tests = [
	0, 1, -1, 2, 10, "10", "-10", "123", 999, 999.9, 1.3, 1.0,
	null, undefined, {},
];

function res(x,base=10,sign=false) {
	try {
		console.log("d("+x+") = "+digits.Digits(x,base,sign));
	} catch(msg) {
		console.log("d("+x+") = "+msg);
	}
}

tests.forEach(function (x) { res(x); });
console.log("Base 2:");
tests.forEach(function (x) { res(x,2); });
console.log("Sign:");
tests.forEach(function (x) { res(x,10,true); });

