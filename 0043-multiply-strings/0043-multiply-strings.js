/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

var multiply = function(s1, s2) {
    if (s1 === '0' || s2 === '0') return '0';
    let m = s1.length,
        n = s2.length;
    let mp = Array(m + n - 1).fill(0);
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            mp[i + j] += (+s1[m - 1 - i] * +s2[n - 1 - j]);
        }
    }
    for (let i = 0; i < mp.length - 1; i++) {
        mp[i + 1] += Math.floor(mp[i] / 10);
        mp[i] %= 10;
    }
    return mp.reverse().join('');

};