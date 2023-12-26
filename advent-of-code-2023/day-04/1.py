import sys

def part_1():
    ans = 0
    for line in sys.stdin:
        line = line.strip().split(":")[1].split("|")
        win = set(line[0].strip().split())
        you  = set(line[1].strip().split())
        point = 0

        for n in you:
            if n in win:
                point = 1 if point == 0 else point * 2

        ans += point

    print(ans)
    return ans

def part_2():
    ans = []
    games = []
    for line in sys.stdin:
        ans.append(1)
        line = line.strip().split(":")[1].split("|")
        win = set(line[0].strip().split())
        you  = set(line[1].strip().split())
        games.append([win, you])

    for i, game in enumerate(games):
        count = 1

        for n in game[1]:
            if n in game[0]:
                count += 1

        for j in range(1, count):
            if i + j < len(ans):
                ans[i + j] = ans[i + j] + ans[i]
    ans = sum(ans)
    print(ans)
    return ans

# part_1()
part_2()
