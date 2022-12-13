import sys

def main():
    matrix = []
    dp1 = []
    dp2 = []
    dp3 = []
    dp4 = []


    for line in sys.stdin:
        line = line.strip()

        n = len(line)
        matrix.append([int(x) for x in line])
        dp1.append([0] * n)
        dp2.append([0] * n)
        dp3.append([0] * n)
        dp4.append([0] * n)

    n = len(matrix)
    m = len(matrix[0])

    for i in range(n):
        for j in range(m):
            if i == 0:
                dp1[i][j] = matrix[i][j]
            else:
                dp1[i][j] = max(matrix[i][j], dp1[i - 1][j])

    for i in range(n):
        for j in range(m):
            if j == 0:
                dp2[i][j] = matrix[i][j]
            else:
                dp2[i][j] = max(matrix[i][j], dp2[i][j - 1])
                
    for i in range(n)[::-1]:
        for j in range(m)[::-1]:
            if i == n - 1:
                dp3[i][j] = matrix[i][j]
            else:
                dp3[i][j] = max(matrix[i][j], dp3[i + 1][j])
                
    for i in range(n)[::-1]:
        for j in range(m)[::-1]:
            if j == m - 1:
                dp4[i][j] = matrix[i][j]
            else:
                dp4[i][j] = max(matrix[i][j], dp4[i][j + 1])
                
    counter = 0
    for i in range(n):
        for j in range(m):
            if i == 0 or j == 0 or i == n - 1 or j == m - 1:
                counter += 1
            else:
                t = matrix[i][j]
                if t > dp1[i - 1][j] or t > dp2[i][j - 1] or t > dp3[i + 1][j] or t > dp4[i][j + 1]:
                    counter += 1
    print("Part 1: ", counter)

main()
