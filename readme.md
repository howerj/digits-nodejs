# Digits

* Author: Richard James Howe
* Email: howe.r.j.89@gmail.com
* Repo: https://github.com/howerj/digits-nodejs
* License: ISC

Determine how many digits it requires to represent an integer in a given base,
working from base 2 to 36.

# API

There is only one function, "Digits". It accepts three arguments,
two of which are optional.

## Example

```js
	const digits = require("@howerj/digits");
	console.log(digits.Digits(123)); // prints "3"
```

## Digits(number, base=10, sign=false)

Digits calculates the number of digits needed to represent a
number as a string.

* "number" can be either a floating point number, an
integer (well, also a float), or a string. If a string
argument is used then the string *must* contain only the
number (eg. No white-space).
* "base" can range from 2 to 36. Default is 10. If the
number is not an integer then the base *must* be 10.
* "sign" is either true (the sign of the number is included in the
calculation) or false (the sign is excluded).

This function throws on failure (invalid type argument
or base out of range).

