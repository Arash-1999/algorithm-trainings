package days

import (
	"bufio"
	"fmt"
	"math"
	"os"
	"strconv"
	"strings"
)

func D2p1() {
	file, err := os.Open("./inputs/02.txt")

	if err != nil {
		fmt.Println(err)
	}

	defer file.Close()

	scanner := bufio.NewScanner(file)

	safe_count := 0

	for scanner.Scan() {
		txt := scanner.Text()
		nums := strings.Split(txt, " ")

		is_safe := check_1(nums)

		if is_safe {
			safe_count += 1
		}
	}

	fmt.Println(safe_count)
	if err := scanner.Err(); err != nil {
		fmt.Println(err)
	}
}

func D2p2() {
	file, err := os.Open("./inputs/02.txt")

	if err != nil {
		fmt.Println(err)
	}

	defer file.Close()

	scanner := bufio.NewScanner(file)

	safe_count := 0

	for scanner.Scan() {
		txt := scanner.Text()
		nums := strings.Split(txt, " ")

		if check_rep(nums) {
			safe_count += 1
		}
	}

	fmt.Println(safe_count)

	if err := scanner.Err(); err != nil {
		fmt.Println(err)
	}
}

func check_1(nums []string) bool {
	is_safe := true
	a, _ := strconv.Atoi(nums[0])
	b, _ := strconv.Atoi(nums[1])

	asc := a-b < 0

	for i := 0; i < len(nums)-1; i++ {
		n1, _ := strconv.Atoi(nums[i])
		n2, _ := strconv.Atoi(nums[i+1])

		diff := n1 - n2

		if diff < 0 != asc || math.Abs(float64(diff)) < 1 || math.Abs(float64(diff)) > 3 {
			is_safe = false
			break
		}
	}
	return is_safe
}

// PERF: don't use brute force method
func check_rep(nums []string) bool {
	for i := range nums {
		arr := append([]string{}, nums[0:i]...)
		arr = append(arr, nums[i+1:]...)

		if check_1(arr) {
			return true
		}
	}

	return false
}
