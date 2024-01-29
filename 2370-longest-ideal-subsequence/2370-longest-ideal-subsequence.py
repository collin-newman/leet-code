class Solution:
    # Looked this one up to get familiar with the pattern
    def longestIdealString(self, s, k):
        dp = [0] * 128
        for c in s:
            i = ord(c)
            dp[i] = max(dp[i - k : i + k + 1]) + 1
        return max(dp)