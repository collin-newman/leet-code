function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) {
      return false
    }

    const charMap = {};

    for (let i = 0; i < s.length; i++) {
      if (!charMap[s[i]]) {
        charMap[s[i]] = 1;
      } else {
        charMap[s[i]]++;
      }
    }

    for (let i = 0; i < t.length; i++) {
      if (charMap[t[i]]) {
        charMap[t[i]]--;
        if (charMap[t[i]] === -1) {
          return false
        }
      } else {
        return false
      }
    }
    return true
};