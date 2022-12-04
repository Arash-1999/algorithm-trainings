import sys

letters = " abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

def part_1():
    total = 0

    for line in sys.stdin:
        line = line.strip()

        n = len(line)
        p1, p2 = line[0:n//2], line[n//2:]
        set1 = set()

        for c in p1:
            set1.add(letters.index(c))

        for c in p2:
            n = letters.index(c)
            if n in set1:
                total += n
                break

    print(total)


def part_2():
    total = 0

    with open("input-2.txt", "r") as f:
        lines = f.readlines()

        for i in range(0, len(lines), 3):
            set1, set2 = set(), set()

            for c in lines[i].strip():
                set1.add(letters.index(c))

            for c in lines[i + 1].strip():
                d = letters.index(c)
                if d in set1:
                    set2.add(d)

            for c in lines[i + 2].strip():
                d = letters.index(c)
                if d in set2:
                    total += d
                    break

        print(total)

# part_1()
part_2()
