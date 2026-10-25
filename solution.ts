//*-------------------------------
//*   Problem 1: Staircase
//*-------------------------------

var staircase = function (n: number): string {
  const structure: string[] = [];

  for (let i = 1; i <= n; i++) {
    const space = " ".repeat(n - i);
    const hash = "#".repeat(i);

    structure.push(space + hash);
  }

  return structure.join("\n");
};

console.log(staircase(4));

//*-------------------------------
//*   Problem 2: Grading Students
//*-------------------------------

var gradingStudents = function (grades: number[]): number[] {
  const newGrades = grades.map((grade) => {
    if (grade >= 38) {
      const nextMultipleOfFive = 5 * (Math.floor(grade / 5) + 1);

      if (nextMultipleOfFive - grade < 3) return nextMultipleOfFive;
      else return grade;
    } else {
      return grade;
    }
  });

  return newGrades;
};

console.log(gradingStudents([73, 67, 38, 33]));

//*-------------------------------
//*   Problem 3: Time Conversion
//*-------------------------------

var timeConversion = function (s: string): string {
  const timeParts = s.split(":");

  if (timeParts[0] === "12") {
    if (timeParts[2].slice(2, 4) === "AM") {
      timeParts[0] = "00";
    }
  } else if (timeParts[2].slice(2, 4) === "PM") {
    timeParts[0] = (Number(timeParts[0]) + 12).toString();
  }

  timeParts[2] = timeParts[2].slice(0, -2);
  return timeParts.join(":");
};

console.log(timeConversion("07:05:45PM"));

//*-------------------------------
//*   Problem 4: String Repeat
//*-------------------------------

var repeatStr = function (n: number, s: string): string {
  return s.repeat(n);
};

console.log(repeatStr(3, "ha"));

//*-------------------------------
//*   Problem 5: Reversed Strings
//*-------------------------------

var solution = function (str: string): string {
  const strArray: string[] = [];

  for (let i = str.length - 1; i >= 0; i--) {
    strArray.push(str[i]);
  }

  return strArray.join("");
};

console.log(solution("hello"));

//*-------------------------------
//*   Problem 6: Sum of Positive
//*-------------------------------

var positiveSum = function (arr: number[]): number {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }

  return sum;
};

console.log(positiveSum([1, -4, 7, 12]));

//*-------------------------------
//*   Problem 7: Grasshopper — Summation
//*-------------------------------

var summation = function (num: number): number {
  const sum = (num * (num + 1)) / 2;

  return sum;
};

console.log(summation(5));

//*-------------------------------
//*   Problem 8: Convert a Boolean to a String
//*-------------------------------

var booleanToString = function (b: boolean): string {
  return b ? "true" : "false";
};

console.log(booleanToString(true));

//*-------------------------------
//*   Problem 9: Fizz Buzz
//*-------------------------------

var fizzBuzz = function (n: number): string[] {
  const strArray: string[] = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      strArray.push("FizzBuzz");
    } else if (i % 3 === 0) {
      strArray.push("Fizz");
    } else if (i % 5 === 0) {
      strArray.push("Buzz");
    } else {
      strArray.push(i.toString());
    }
  }
  return strArray;
};

console.log(fizzBuzz(5));

//*-------------------------------
//*   Problem 10: Running Sum of 1D Array
//*-------------------------------

var runningSum = function (nums: number[]): number[] {
  let tempSum = 0;
  const sumArray: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    tempSum += nums[i];
    sumArray.push(tempSum);
  }

  return sumArray;
};

console.log(runningSum([1, 2, 3, 4]));

//*-------------------------------
//*   Problem 11: Richest Customer Wealth
//*-------------------------------

var maximumWealth = function (accounts: number[][]) {
  let highest = 0;
  for (let i = 0; i < accounts.length; i++) {
    let temp = 0;
    for (let j = 0; j < accounts[i].length; j++) {
      temp += accounts[i][j];
    }

    if (temp > highest) {
      highest = temp;
    }
  }

  return highest;
};

console.log(
  maximumWealth([
    [1, 2, 3],
    [3, 2, 1],
  ]),
);
