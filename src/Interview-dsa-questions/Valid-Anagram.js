const prompt = require("prompt-sync")();

// valid Anagram
// An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, using all the original letters exactly once

// Input: (s="anagram") (t="nagaram")--->Output: true
// Input: (s="rat") (t="car")----> Output: false

// const isAnagram = function(s,t){
//   if(s.length !== t.length) return false
//  s =s.split("").sort().join("")
//  t =t.split("").sort().join("")
//  return s === t

// }

// console.log(isAnagram("anagram", "nagaram"));

// 2nd Approach

// By using object
// rat \ tar
// {r: 1, a:1, t: 1}  {t:1, a:1, r:1}
// then loop over the obj

const isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let obj1 = {};
  let obj2 = {};
  for (i = 0; i < s.length; i++) {
    obj1[s[i]] = (obj1[s[i]] || 0) + 1;
    obj2[t[i]] = (obj2[t[i]] || 0) + 1;
  }
  for (const key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};
console.log(isAnagram("anagram", "nagaram"));
