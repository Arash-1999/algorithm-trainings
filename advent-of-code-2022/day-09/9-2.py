import sys

dirs = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 0],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
]

def main():
    t = [[0, 0] for _ in range(10)]
    visited = set()
    visited.add(", ".join([str(a) for a in t[-1]]))

    for line in sys.stdin:
        line = line.strip().split(" ")
        s1, s2 = line[0], int(line[1])

        for _ in range(s2):
            if s1 == "R":
                t[0][0] += 1
            elif s1 == "L":
                t[0][0] -= 1
            elif s1 == "U":
                t[0][1] += 1
            elif s1 == "D":
                t[0][1] -= 1

            for i in range(1, len(t)):
                for d in dirs:
                    if t[i - 1][0] == t[i][0] + d[0] and t[i - 1][1] == t[i][1] + d[1]:
                        break
                else:
                    ht0, ht1 = t[i - 1][0] - t[i][0], t[i - 1][1] - t[i][1]

                    if ht0 == 0 and ht1 > 0:
                        t[i][1] += 1
                    elif ht0 == 0 and ht1 < 0:
                        t[i][1] -= 1
                    elif ht0 > 0 and ht1 == 0:
                        t[i][0] += 1
                    elif ht0 < 0 and ht1 == 0:
                        t[i][0] -= 1
                    elif ht0 > 0 and ht1 > 0:
                        t[i][0] += 1
                        t[i][1] += 1
                    elif ht0 < 0 and ht1 > 0:
                        t[i][0] -= 1
                        t[i][1] += 1
                    elif ht0 > 0 and ht1 < 0:
                        t[i][0] += 1
                        t[i][1] -= 1
                    elif ht0 < 0 and ht1 < 0:
                        t[i][0] -= 1
                        t[i][1] -= 1

            visited.add(", ".join([str(a) for a in t[-1]]))

    print(len(visited))

main()
