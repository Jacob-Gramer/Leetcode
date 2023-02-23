/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        if (prefix.length === 0) return '';
        for (let j=0; j<prefix.length; j++) {
            if (strs[i][j] !== prefix[j] && j === 0) return '';
            if (strs[i][j] !== prefix[j]) prefix = prefix.slice(0,j);
        }
    }
    return prefix;
};