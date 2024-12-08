package main

import (
	"fmt"
	"os"
	"strconv"
	"strings"
)

func main() {
	file, err := os.ReadFile("../input")
	if err != nil {
		fmt.Println("Error reading file")
	}

	fileAString := string(file)
	lines := strings.Split(fileAString, "\n")

	var leftNumbers []int
	myMap := make(map[int]int)
	for _, line := range lines {
		lineParts := strings.Split(line, "   ")

		left, err := strconv.Atoi(lineParts[0])
		if err != nil {
			fmt.Println("Error parsing left number")
		}
		leftNumbers = append(leftNumbers, int(left))

		right, err := strconv.Atoi(lineParts[1])
		if err != nil {
			fmt.Println("Error parsing right number")
		}

		number, ok := myMap[right]
		if ok {
			myMap[right] = number + 1
		} else {
			myMap[right] = 1
		}
	}

	similarity := 0
	for _, number := range leftNumbers {
		val := myMap[number]
		similarity += number * val
	}

	fmt.Println(similarity)
}
