/**
 * Given an integer x, return true if x is a palindrome, and false otherwise.

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
 */

function palindrome(n) {
  let newValue = '';
  const value = x.toString();

  for (let i = value.length - 1; i >= 0; i--) {
    newValue += value[i];
  }

  if (value === newValue) {
    return true;
  }

  return false;
}

// ALTERNATIVE APPROACH USING MATHS

var isPalindrome = function (x) {
  if (x < 0) {
    return false; // Negative numbers are not palindromes.
  }

  let original = x;
  let reversed = 0;

  while (x > 0) {
    const digit = x % 10;
    reversed = reversed * 10 + digit;
    x = Math.floor(x / 10);
  }

  return original === reversed;
};
