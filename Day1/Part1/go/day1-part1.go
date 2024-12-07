package main

import (
	"fmt"
	"math"
	"os"
	"sort"
	"strconv"
	"strings"
)

func main() {
	data, err := os.ReadFile("../input")
	if err != nil {
		fmt.Print("Read failed")
	}

	var leftList []int
	var rightList []int
	dataLines := strings.Split(string(data), "\n")
	for _, line := range dataLines {
		lineSplit := strings.Split(line, "   ")

		leftNumber, err := strconv.ParseInt(lineSplit[0], 10, 64)
		if err != nil {
			fmt.Print("value1 coudn't be parsed")
		}
		rightNumber, err := strconv.ParseInt(lineSplit[1], 10, 64)
		if err != nil {
			fmt.Print("value2 coudn't be parsed")
		}

		leftList = append(leftList, int(leftNumber))
		rightList = append(rightList, int(rightNumber))
	}

	sort.Ints(leftList)
	sort.Ints(rightList)

	var sum int = 0
	for i, item := range leftList {
		sum += int(math.Abs(float64(item - rightList[i])))
	}

	fmt.Println(sum)
}
