import { promises } from "node:fs";

export async function readFile() {
  try {
    return await promises.readFile("./input", "utf-8");
  } catch (error) {
    console.log(error);
  }
}

export function clean(data) {
  const splitData = data.split("\n");
  const superSplitData = splitData.map((dataLine) => {
    const indexOfFirstSpace = dataLine.indexOf(" ");
    let returnData = {};
    returnData.first = Number.parseInt(dataLine.slice(0, indexOfFirstSpace));
    returnData.second = Number.parseInt(
      dataLine.slice(indexOfFirstSpace + 2, dataLine.length)
    );

    return returnData;
  });

  return superSplitData;
}

export function sort(data) {
  let first = [];
  let second = [];

  data.forEach((dataPoint) => {
    first.push(dataPoint.first);
    second.push(dataPoint.second);
  });

  first.sort();
  second.sort();

  const merged = first.map((value, index) => {
    return { first: value, second: second[index] };
  });

  return merged;
}

export function calculate(data) {
  return data.map((dataPoint) => {
    return {
      first: dataPoint.first,
      second: dataPoint.second,
      distance: Math.abs(dataPoint.first - dataPoint.second),
    };
  });
}

export function sum(data) {
  let sum = 0;
  data.forEach((dataPoint) => {
    sum += dataPoint.distance;
  });

  return sum;
}
