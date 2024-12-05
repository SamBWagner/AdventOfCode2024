import { readFile, clean, sort } from "../Common/functions.js";

const fileContent = await readFile();
const cleanedUp = clean(fileContent);
const sorted = sort(cleanedUp);

let similarity = [];

for (let i = 0; i < sorted.length; i++) {
  let timesFound = 0;
  for (let j = 0; j < sorted.length; j++) {
    if (sorted[i].first !== sorted[j].second) {
      continue;
    }

    timesFound++;
  }
  similarity.push(sorted[i].first * timesFound);
}

let totalSimilarityScore = 0;
similarity.forEach((row) => {
  totalSimilarityScore += row;
});

console.log(totalSimilarityScore);
