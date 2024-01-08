function isAnagram(str1, str2) {
  // Remove whitespace and convert strings to lowercase
  str1 = str1.replace(/\s/g, '').toLowerCase();
  str2 = str2.replace(/\s/g, '').toLowerCase();

  // Check if the lengths of the strings are equal
  if (str1.length !== str2.length) {
    return false;
  }

  // Sort the characters in both strings
  const sortedStr1 = str1.split('').sort().join('');
  const sortedStr2 = str2.split('').sort().join('');

  // Compare the sorted strings
  return sortedStr1 === sortedStr2;
}

const inputStr1 = prompt('Enter the first string:');
const inputStr2 = prompt('Enter the second string:');

const check = isAnagram(inputStr1, inputStr2);
alert(check);
