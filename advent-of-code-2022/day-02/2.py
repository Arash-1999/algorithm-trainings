import sys

def part_1():
    win_states = ["A Y", "B Z", "C X"]
    # lose_states = ["A Z", "B X", "C Y"]

    total = 0
    scores = {"X": 1, "Y": 2, "Z": 3}
    equals = {"X": "A", "Y": "B", "Z": "C"}

    for line in sys.stdin:
        game = line.strip()

        total += scores[game[-1]]

        if game[0] == equals[game[-1]]:
            total += 3
        else:
            if game in win_states:
                total += 6

    print(total)


def part_2():
    total = 0
    scores = {"A": 1, "B": 2, "C": 3}
    lose = {"A": "C", "B": "A", "C": "B"}
    win = {"A": "B", "B": "C", "C": "A"}
    # x = lose
    # y = draw
    # z = win

    for line in sys.stdin:
        game = line.strip()

        t = game[-1]

        if t == "X":
            total += scores[lose[game[0]]]
        elif t == "Y":
            total += scores[game[0]]
            total += 3
        elif t == "Z":
            total += scores[win[game[0]]]
            total += 6

    print(total)

# part_1()
part_2()
