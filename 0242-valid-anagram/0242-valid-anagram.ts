function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) {
      return false
    }

    let tChar = t.split('');

    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      const tCharIndex = tChar.indexOf(char)
      if (tCharIndex !== -1) {
        tChar.splice(tCharIndex, 1)
      } else {
         return false
      }
    }

    return tChar.length === 0;
};