/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
var findLongestWord = function(s, dictionary) {
    
    let longestFirst = dictionary.sort((a, b) => {
        if (b.length === a.length) {
            return a.localeCompare(b);
        } else {
            return b.length - a.length;
        }
    });
    console.log(longestFirst);
    for (let j = 0; j < longestFirst.length; j++) {
        let ref = s.split('');
        let word = longestFirst[j].split('');
        if (word.length > s.length) {
            continue;
        }
        let longestWord = true;
        for (let i = 0; i < word.length; i++) {
            if (ref.indexOf(word[i]) === -1) {
                longestWord = false;
                //console.log('Did not find', word[i], ' in ', ref.join(''));
                break;
            } else {
                //console.log(i, word[i], ref.join(''), ' | ', word.join(''), ' | ', ref.slice(i + 1).join(''));
                ref = ref.slice(ref.indexOf(word[i]) + 1);
            }
        }
        if (longestWord) {
            return word.join('');
        }
    }

    return '';
};