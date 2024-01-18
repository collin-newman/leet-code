function lengthOfLongestSubstring(s: string): number {
  // iterate over the string
  //   determine if the char is in the stack
  //    if its not in the stack
  //        add it to the stack
  //    if its in the stack
  //      mark the stack length
  //      clear the stack
  //      create new stack
  //
  // return stack length

  let set = [];
  let largestSubstring = 0;

  for (let char of s.split('')) {
    if (set.indexOf(char) !== -1) {
      set = set.splice(set.indexOf(char) + 1);
      set.push(char);
    } else {
      set.push(char);
    }
    if (set.length > largestSubstring) {
      largestSubstring = set.length;
    }
  }

  return largestSubstring;
};