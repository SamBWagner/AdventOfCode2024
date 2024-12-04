import { readFile, clean, sort } from "../Common/functions.js";

const fileContent = await readFile();
const cleanedUp = clean(fileContent);

// Might not need this
const sorted = sort(cleanedUp);

let similarity = [];

for (let i = 0; i < sorted.length; i++) {
  for (let j = 0; j < sorted.length; j++) {
    let timesFound = 0;
    if (sorted[i].first < sorted[j].second) {
      continue;
    } else if (sorted[i].first === sorted[j].second) {
      timesFound++;
    } else {
      similarity.push(sorted[i].first * timesFound);
    }
  }
}

console.log(similarity);
