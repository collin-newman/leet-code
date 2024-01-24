const charMap = {}

function groupAnagrams(strs: string[]): string[][] {
  const anagramMap = {}
  for (const str of strs) {
    const count = Array(26);
    count.fill(0, 0, 26)

    for (const char of str) {
      const letterPos = char.charCodeAt(0) - 97;
      count[letterPos]++
    }
    if (anagramMap[count.join()]) {
      anagramMap[count.join()].push(str)
    } else {
      anagramMap[count.join()] = [str];
    }
  }

  return Object.values(anagramMap);
};