function firstWord(s) {
  // your code here
	s=s.trim();
	let strArr=s.split(" ");
	return strArr[0];
}

// Do not change the code below

// const s = prompt("Enter String:");
alert(firstWord(s));
