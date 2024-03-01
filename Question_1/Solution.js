function isAnagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  str1 = Array.from(str1).sort().join("");
  str2 = Array.from(str2).sort().join("");
  if (str1 === str2) {
    return true;
  }
  return false;
}

// Example 1:
console.log(isAnagram("Army","Mary"));
// Output: true
// Expected: true

// Example 2:
console.log(isAnagram("anagram", "nagaram"));
// Output: true
// Expected: true

// Example 3:
console.log(isAnagram("rat", "car"));
// Output: false
// Expected: false
