import sys

def main():
    result = dict()
    result["/"] = 0
    path = []

    visited_paths = set()

    for line in sys.stdin:
        line = line.strip().split()

        if line[0] == "$":
            if line[1] == "cd":
                if line[2] == "/":
                    path = ["/"]
                elif line[2] == "..":
                    if len(path) > 1:
                        path.pop()
                else:
                    cur = "/".join(path) + "/" + line[2]
                    if cur not in result:
                        result[cur] = 0
                    path.append(line[2])

        else:
            for i in range(1, len(path)+1):
                if line[0] != "dir":
                    result["/".join(path[0:i])] += int(line[0])

    ans = 0
    for k in result:
        if result[k] <= 100000:
            ans += result[k]

    print("part 1: ", ans)

    ans_2 = 70000000
    target = 30000000 - (ans_2 - result["/"])

    for k in result:
        cur = result[k]
        if cur >= target and cur < ans_2:
            ans_2 = cur

    print("part 2: ", ans_2)

main()
