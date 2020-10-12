function customCal() {
	let val = 1;
	function add(x) {
		val += x;
	}

	function get() {
		return val;
	}

	return { add, get };
}

const cal = customCal();
cal.add(2);
console.log(cal.get());
cal.add(4);
console.log(cal.get());
