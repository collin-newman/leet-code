/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        const binarySearch = (start, end) => {
            if (start === end) {
                return start;
            }

            let mid = Math.floor(((end - start) / 2) + start);
            if (!isBadVersion(mid)) {
                return binarySearch(mid + 1, end);
            } else {
                return binarySearch(start, mid);
            }
            
        }
        
        let version = binarySearch(1, n);
        return version;
    };
};