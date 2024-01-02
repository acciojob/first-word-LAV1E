function firstWord(str) {
  // your code here
	 if (str.length === 0) {
        return "";
    }

    // Find the index of the first space
    var spaceIndex = str.indexOf(' ');

    // If there is no space, return the entire string
    if (spaceIndex === -1) {
        return str;
    }

    // Otherwise, return the substring from the start to the first space
    return str.substring(0, spaceIndex);
}

// Do not change the code below

// const s = prompt("Enter String:");
// alert(firstWord(s));
