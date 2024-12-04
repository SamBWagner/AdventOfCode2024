import { readFile, clean, sort, calculate, sum } from "../Common/functions.js";

let fileContent = await readFile();
let cleanedUp = clean(fileContent);
let sorted = sort(cleanedUp);
let calculated = calculate(sorted);
let summed = sum(calculated);

console.log(summed);
