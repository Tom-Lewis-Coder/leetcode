/*
Given a string s, find the length of the longest substring without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
*/

var lengthOfLongestSubstring = function(s) {
  let arrOfStrings = []
  for (let i = 0; i < s.length; i++)
    arrOfStrings.push(s.slice(i))
  let arrOfLength = arrOfStrings.map(s => {
    let arr = []
    let i = 0
    while (!arr.includes(s[i])) {
      arr.push(s[i])
      i++
    }
    return arr.filter(el => el != undefined).length
  })
  return arrOfLength.sort((a, b) => b - a)[0] || 0
};