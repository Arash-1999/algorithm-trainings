import sys
import re

digits =  "0123456789"

def part_1():
    matrix = []
    for line in sys.stdin:
        line = line.strip()
        matrix.append(line)
    n = len(matrix)
    m = len(matrix[0])

    ans = 0
    for i in range(n):
        j = 0

        while j < m:
            c = matrix[i][j]
            length = 1
            if c in digits:
                for k in range(1, m - j):
                    d = matrix[i][j + k]
                    if d not in digits:
                        length = k
                        break
                    c += d
                sx = j if j == 0 else j - 1
                ex = j + length if j + length == m else j + length + 1

                is_partnumber = False
                regex = r"([^\w.]|_)"
                if re.search(regex, matrix[i][sx:ex]):
                    is_partnumber = True
                if i > 0 and re.search(regex, matrix[i - 1][sx:ex]):
                    is_partnumber = True
                if i < n - 1 and re.search(regex, matrix[i + 1][sx:ex]):
                    is_partnumber = True

                if is_partnumber:
                    ans += int(c)

                j += length
            else:
                j += 1
                continue

    print(ans)
    return ans


def part_2():
    matrix = []
    for line in sys.stdin:
        matrix.append(line.strip())

    n, m = len(matrix), len(matrix[0])
    ans = 0

    for i in range(n):
        for j in range(m):
            if re.search(r"([^\w\.]|_)", matrix[i][j]):
                s = set()

                for d1 in [-1, 0, 1]:
                    for d2 in [-1, 0, 1]:
                        x, y = i + d1, j + d2
                        if x > -1 and x < n and y > -1 and x < m:
                            c = ""
                            d3 = 0
                            if matrix[x][y] in digits:
                                while y + d3 > -1 and matrix[x][y + d3]:
                                    if matrix[x][y + d3] in digits:
                                        c = matrix[x][y + d3] + c
                                        d3 -= 1
                                    else:
                                        break
                                d3 = 1
                                while y + d3 < m and matrix[x][y + d3]:
                                    if matrix[x][y + d3] in digits:
                                        c = c + matrix[x][y + d3]
                                        d3 += 1
                                    else:
                                        break
                            if c != "":
                                s.add(c)
                if len(s) == 2:
                    p = 1
                    for x in s:
                        p = p * int(x)
                    ans += p
    print(ans)
    return ans

# part_1()
part_2()
