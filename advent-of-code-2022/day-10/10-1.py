import sys

targets = [20, 60, 100, 140, 180, 220]

def main():
    cycle = 0
    x = 1
    ans = 0

    for line in sys.stdin:
        line = line.strip()

        if line == "noop":
            cycle += 1
            if cycle in targets:
                ans += x * cycle
        else:
            line = line.split()
            v = int(line[1])
            cycle += 1
            if cycle in targets:
                ans += x * cycle
            cycle += 1
            if cycle in targets:
                ans += x * cycle
            x += v

    print(ans)

main()
