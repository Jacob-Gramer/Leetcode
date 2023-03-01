/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length === 0) return 0;
    let max = 1;
    for (let j=0; j<s.length; j++) {
        let curr = s[j];
        for (let i=j+1; i<s.length; i++) {
            if (!curr.includes(s[i])) {
                curr += s[i];
                if (curr.length > max) max = curr.length;
            } else {
                break;
            }
        }
    }
    return max;
};