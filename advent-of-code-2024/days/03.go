package days

import (
	"bufio"
	"fmt"
	"os"
	"regexp"
	"strconv"
)

func D3p1() {
	file, err := os.Open("./inputs/03.txt")

	if err != nil {
		fmt.Println(err)
	}

	defer file.Close()

	scanner := bufio.NewScanner(file)

	total := 0

	r, _ := regexp.Compile(`mul\((\d{1,3}),(\d{1,3})\)`)
	for scanner.Scan() {
		line := scanner.Text()

		match := r.FindAllStringSubmatch(line, -1)

		for _, v := range match {
			a, _ := strconv.Atoi(v[1])
			b, _ := strconv.Atoi(v[2])
			total += a * b
		}
	}

	fmt.Println(total)

	if err := scanner.Err(); err != nil {
		fmt.Println(err)
	}
}

func D3p2() {
	file, err := os.Open("./inputs/03.txt")
	// file, err := os.Open("./inputs/03-example.txt")

	if err != nil {
		fmt.Println(err)
	}

	defer file.Close()

	scanner := bufio.NewScanner(file)

	total := 0

	r, _ := regexp.Compile(`mul\((\d{1,3}),(\d{1,3})\)|don't\(\)|do\(\)`)
	enable := true
	for scanner.Scan() {
		line := scanner.Text()

		match := r.FindAllStringSubmatch(line, -1)

		for _, v := range match {
			if v[0] == "do()" {
				enable = true
			} else if v[0] == "don't()" {
				enable = false
			} else {
				if enable {
					a, _ := strconv.Atoi(v[1])
					b, _ := strconv.Atoi(v[2])
					total += a * b
				}
			}
		}
	}

	fmt.Println(total)

	if err := scanner.Err(); err != nil {
		fmt.Println(err)
	}
}
