/* Find number of digits required to represent a number as a string,
 * Richard James Howe <https://github.com/howerj/digits-nodejs */

module.exports = class digits {
	static Digits(d, base=10, sign=false) {
		let neg = false;
		function isNumeric(str) {
			if (typeof str != "string") return false
			return !isNaN(str) && !isNaN(parseFloat(str))
		}
		if (base < 2 || base > 36 || !Number.isInteger(base))
			throw "Invalid base " + base;
		if (typeof (d) == "string") {
			if (!isNumeric(d))
				throw "Not a number '" + d + "'";
			return this.Digits(parseFloat(d), base, sign);
		}
		if (typeof (d) == "number") {
			if (Number.isInteger(d)) {
				if (d === 0)
					return 1;
				function log_n(n, base) {
					return Math.log(n) / Math.log(base);
				}
				if (d < 0) {
					neg = true;
					d = Math.abs(d);
				}
				let r = Math.floor(log_n(d, base));
				if (neg && sign)
					r++;
				return r + 1;
			} else {
				if (base != 10)
					throw "Base must be 10 for non-integers values";
				let r = d.toString();
				if (d < 0)
					neg = true;
				return r.length - (neg && sign ? 1 : 0);
			}
		} 
		throw "Invalid type:" + typeof (d);
	}
}
