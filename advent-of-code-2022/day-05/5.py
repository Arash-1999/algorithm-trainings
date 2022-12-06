import sys
from pprint import pprint

def part_1():
    stack = [[] for _ in range(0, 10)]
    isState = True

    for line in sys.stdin:
        if isState:
            if line == "\n":
                isState = False
            else:
                for i in range(0, 9):
                    t = line[1 + i * 4]
                    if t not in "123456789 ":
                        stack[i + 1].insert(0, t)
        else:
            line = line.split(" ")

            n, f, t = int(line[1]), int(line[3]), int(line[5])

            for i in range(n):
                stack[t].append(stack[f].pop())

    pprint(stack)

    ans = ""
    for i in range(1, len(stack)):
        ans += stack[i].pop()

    print(ans)


def part_2():
    stack = [[] for _ in range(0, 10)]
    isState = True

    for line in sys.stdin:
        if isState:
            if line == "\n":
                isState = False
            else:
                for i in range(0, 9):
                    t = line[1 + i * 4]
                    if t not in "123456789 ":
                        stack[i + 1].insert(0, t)
        else:
            line = line.split(" ")

            n, f, t = int(line[1]), int(line[3]), int(line[5])

            buffer = []
            for i in range(n):
                buffer.insert(0, stack[f].pop())

            for c in buffer:
                stack[t].append(c)

    pprint(stack)

    ans = ""
    for i in range(1, len(stack)):
        ans += stack[i].pop()

    print(ans)

# part_1()
part_2()
