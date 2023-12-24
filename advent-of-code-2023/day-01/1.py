import sys

def part_1():
    ans = 0
    for line in sys.stdin:
        s, l = "", ""

        for c in line.strip():
            if c in "0123456789":
                if s == "":
                    s = c
                l = c

        ans += int(s + l)

    print(ans)
    return ans

nums = {
    "one": "1",
    "two": "2",
    "three": "3",
    "four": "4",
    "five": "5",
    "six": "6",
    "seven": "7",
    "eight": "8",
    "nine": "9",
}
def part_2():
    ans = 0
    for line in sys.stdin:
        line = line.strip()
        s, l = "", ""
        n = len(line)

        for i in range(n):
            if line[i] in "0123456789":
                if s == "":
                    s = line[i]
                l = line[i]
            else:
                # 3, 6 are min and max of nums key length
                for j in range(3, 6):
                    if i + j <= n and line[i: i + j] in nums:
                        if s == "":
                            s = nums[line[i: i + j]]
                        l = nums[line[i: i + j]]

        ans += int(s + l)

    print(ans)
    return ans

# part_1()
part_2()
