from collections import deque
import sys
from pprint import pprint

def main():
    i = 0
    monkeys = [[]]
    # 0 -> items
    # 1 -> op
    # 2 -> test
    # 3 -> test true
    # 4 -> test false

    for line in sys.stdin:
        line = line.strip()

        if line == "":
            i += 1
            monkeys.append([])

        elif "Starting" in line:
            s = line.split(": ")[1].split(", ")
            monkeys[i].append(deque([int(n) for n in s]))

        elif "Operation" in line:
            s = line.split("= ")[1]
            monkeys[i].append(s)

        elif "Test" in line:
            s = line.split(" ")[-1]
            monkeys[i].append(int(s))

        elif "true" in line:
            s = line.split(" ")[-1]
            monkeys[i].append(int(s))

        elif "false" in line:
            s = line.split(" ")[-1]
            monkeys[i].append(int(s))

    scores = [0 for _ in monkeys]
    for _ in range(20):
        for i, m in enumerate(monkeys):
            while m[0]:
                scores[i] += 1
                old = m[0].popleft()
                new = eval(m[1]) // 3

                if new % m[2] == 0:
                    monkeys[m[3]][0].append(new)
                else:
                    monkeys[m[4]][0].append(new)

    s1, s2 = -1, -1
    for n in scores:
        if n > s1:
            s2 = s1
            s1 = n
        elif n > s2:
            s2 = n
    print(s1 * s2)

main()
