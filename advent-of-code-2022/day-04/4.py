import sys

def part_1():
    counter = 0

    for line in sys.stdin:
        line = line.strip()

        p1, p2 = line.split(",")
        p1, p2 = [int(n) for n in p1.split("-")], [int(n) for n in p2.split("-")]

        if (p1[0] <= p2[0] and p1[1] >= p2[1]) or (p2[0] <= p1[0] and p2[1] >=
                                                   p1[1]):
            counter += 1

    print(counter)

def part_2():
    counter = 0

    for line in sys.stdin:
        line = line.strip()

        p1, p2 = line.split(",")
        p1, p2 = [int(n) for n in p1.split("-")], [int(n) for n in p2.split("-")]

        if (p2[1] >= p1[0] and p2[0] <= p1[1]) or (p2[0] <= p1[1] and p1[0] <=
                                                   p2[1]):
            counter += 1

    print(counter)

# part_1()
part_2()
