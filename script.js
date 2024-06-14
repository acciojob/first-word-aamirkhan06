function firstWord(s) {
  // your code here
	
	s=s.trim();
	let strArr=s.split(" ");
	return strArr[0];
}

// Do not change the code below

const s = prompt("Enter String:");
if (s) { // Check if 's' is not null or empty
  alert(firstWord(s));
} else {
  alert("No input provided");
}


