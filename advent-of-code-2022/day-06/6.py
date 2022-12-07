import sys
import string

def is_valid(text):
    temp = set()
    for c in text:
        temp.add(c)

    return len(temp) == 4

def part_1():
    s = sys.stdin
    s = s.read().strip()

    for i in range(0, len(s) - 3):
        if is_valid(s[i: i + 4]):
            print(i + 4)
            print(s[i: i + 4])
            break

def part_2():
    s = sys.stdin
    s = s.read().strip()

    counter = dict()
    t = s[0: 14]

    for (k, v) in zip(string.ascii_letters, [0] * len(string.ascii_letters)):
        counter[k] = v

    for c in t:
        counter[c] += 1

    valid = True

    for c in t:
        if counter[c] != 1:
            valid = False

    if valid:
        print(15)
        return

    for i in range(14, len(s)):
        counter[s[i]] += 1
        counter[t[0]] -= 1
        t = t[1:] + s[i]

        valid = True

        for c in t:
            if counter[c] != 1:
                valid = False

        if valid:
            print(i + 1)
            return

# part_1()
part_2()
