import sys

rules = {
    "red": 12,
    "green": 13,
    "blue": 14,
}

def part_1():
    ans = 0
    for line in sys.stdin:
        line = line.strip()
        id, game = line.split(":")
        id = int(id.split(" ")[1].strip())
        game = game.split(";")

        possible = True
        for g in game:
            g = [s.strip().split(" ") for s in g.split(",")]
            for c in g:
                if rules[c[1]] < int(c[0]):
                    possible = False;
                    break
            if not possible:
                break;

        if possible:
            ans += id

    print(ans)
    return ans

def part_2():
    ans = 0
    for line in sys.stdin:
        count = { "red": 0, "blue": 0, "green": 0 }

        line = line.strip()
        id, game = line.split(":")
        id = int(id.split(" ")[1].strip())
        game = game.split(";")

        for g in game:
            g = [s.strip().split(" ") for s in g.split(",")]
            for c in g:
                if count[c[1]] < int(c[0]):
                    count[c[1]] = int(c[0])

        ans += count["red"] * count["blue"] * count["green"]

    print(ans)
    return ans

# part_1()
part_2()
