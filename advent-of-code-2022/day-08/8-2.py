import sys
from pprint import pprint

def main():
    matrix = []

    dp = []

    for line in sys.stdin:
        line = line.strip()
        n = len(line)
        matrix.append([int(x) for x in line])
        dp.append([0] * n)

    n = len(matrix)
    m = len(matrix[0])

    ans = 0

    for i in range(1, n - 1):
        for j in range(1, m - 1):
            cur = matrix[i][j]
            counter = [0] * 4

            for r in range(1, i + 1):
                counter[0] += 1
                if cur <= matrix[i - r][j]:
                    break

            for r in range(1, j + 1):
                counter[1] += 1
                if cur <= matrix[i][j - r]:
                    break

            for r in range(1, n - i):
                counter[2] += 1
                if cur <= matrix[i + r][j]:
                    break

            for r in range(1, m - j):
                counter[3] += 1
                if cur <= matrix[i][j + r]:
                    break

            t = counter[0] * counter[1] * counter[2] * counter[3]
            if t > ans:
                ans = t
            dp[i][j] = t

    print(ans)

main()
