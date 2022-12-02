import sys

def part_1():
    nums = [0]
    ans = -1

    for line in sys.stdin:
        if line == "\n":
            if nums[-1] > ans:
                ans = nums[-1]
            nums.append(0)
        else:
            nums[-1] += int(line)

    print(ans)

def part_2():
    nums = [0]
    ans = [-1, -2, -3]

    for line in sys.stdin:
        if line == "\n":
            t = nums[-1]
            if t > ans[0]:
                ans.pop()
                ans.insert(0, t)
            else:
                if t > ans[1]:
                    ans.pop()
                    ans.insert(1, t)
                else:
                    if t > ans[2]:
                        ans.pop()
                        ans.append(t)
            nums.append(0)
        else:
            nums[-1] += int(line)

    t = nums[-1]
    if t > ans[0]:
        ans.pop()
        ans.insert(0, t)
    else:
        if t > ans[1]:
            ans.pop()
            ans.insert(1, t)
        else:
            if t > ans[2]:
                ans.pop()
                ans.append(t)

    print(sum(ans))

part_1()
part_2()
