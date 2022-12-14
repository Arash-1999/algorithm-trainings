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
    h = [0, 0]
    t = [0, 0]
    visited = set()
    visited.add(", ".join([str(a) for a in t]))

    for line in sys.stdin:
        line = line.strip().split(" ")
        s1, s2 = line[0], int(line[1])

        for _ in range(s2):
            if s1 == "R":
                h[0] += 1
            elif s1 == "L":
                h[0] -= 1
            elif s1 == "U":
                h[1] += 1
            elif s1 == "D":
                h[1] -= 1

            is_adj = False
            for d in dirs:
                if t[0] == h[0] + d[0] and t[1] == h[1] + d[1]:
                    is_adj = True
                    break

            if not is_adj:
                if h[0] == t[0]:
                    if s1 == "U":
                        t[1] += 1
                    elif s1 == "D":
                        t[1] += -1
                elif h[1] == t[1]:
                    if s1 == "R":
                        t[0] += 1
                    elif s1 == "L":
                        t[0] += -1
                else:
                    ht0, ht1 = h[0] - t[0], h[1] - t[1]

                    if ht0 > 0 and ht1 > 0:
                        t[0] += 1
                        t[1] += 1
                    elif ht0 < 0 and ht1 > 0:
                        t[0] -= 1
                        t[1] += 1
                    elif ht0 > 0 and ht1 < 0:
                        t[0] += 1
                        t[1] -= 1
                    elif ht0 < 0 and ht1 < 0:
                        t[0] -= 1
                        t[1] -= 1

                visited.add(", ".join([str(a) for a in t]))

    print(len(visited))

main()
