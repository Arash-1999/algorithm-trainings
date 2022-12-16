import sys

targets = [40, 80, 120, 160, 200, 240]

def main():
    ans = [""] * 7
    cycle = 0
    x = 1

    for line in sys.stdin:
        line = line.strip()

        i, j = cycle // 40, cycle % 40

        if j in [x - 1, x, x + 1]:
            ans[i] += "#"
        else:
            ans[i] += "."
        if line == "noop":
            cycle += 1
        else:
            line = line.split()
            v = int(line[1])

            cycle += 1
            i, j = cycle // 40, cycle % 40

            if j in [x - 1, x, x + 1]:
                ans[i] += "#"
            else:
                ans[i] += "."

            cycle += 1
            x += v

    print("\n".join(ans))

main()
