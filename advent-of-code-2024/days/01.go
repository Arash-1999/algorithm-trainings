package days

import (
	"bufio"
	"fmt"
	"math"
	"os"
	"sort"
	"strconv"
	"strings"
)

func D1p1() {
	file, err := os.Open("./inputs/01.txt")

	if err != nil {
		fmt.Println(err)
	}

	defer file.Close()

	scanner := bufio.NewScanner(file)

	left := []int{}
	right := []int{}

	for scanner.Scan() {
		txt := scanner.Text()
		nums := strings.Split(txt, "   ")
		n1, err := strconv.Atoi(nums[0])
		if err != nil {
			fmt.Println(err)
		}
		left = append(left, n1)

		n2, err := strconv.Atoi(nums[1])
		if err != nil {
			fmt.Println(err)
		}
		right = append(right, n2)
	}

	sort.Slice(left, func(i, j int) bool {
		return left[i] < left[j]
	})
	sort.Slice(right, func(i, j int) bool {
		return right[i] < right[j]
	})

	total := 0

	for i := 0; i < len(left); i++ {
		total += int(math.Abs(float64(left[i] - right[i])))
	}

	fmt.Println(total)

	if err := scanner.Err(); err != nil {
		fmt.Println(err)
	}
}

func D1p2() {
	file, err := os.Open("./inputs/01.txt")

	if err != nil {
		fmt.Println(err)
	}

	defer file.Close()

	scanner := bufio.NewScanner(file)

	left := []int{}
	right := make(map[int]int)

	for scanner.Scan() {
		txt := scanner.Text()
		nums := strings.Split(txt, "   ")
		n1, err := strconv.Atoi(nums[0])
		if err != nil {
			fmt.Println(err)
		}
		left = append(left, n1)

		n2, err := strconv.Atoi(nums[1])
		if err != nil {
			fmt.Println(err)
		}

		count, ok := right[n2]

		if ok {
			right[n2] = count + 1
		} else {
			right[n2] = 1
		}
	}

	total := 0

	for i := 0; i < len(left); i++ {
		score, ok := right[left[i]]
		if ok {
			total += left[i] * score
		}
	}

	fmt.Println(total)

	if err := scanner.Err(); err != nil {
		fmt.Println(err)
	}
}
