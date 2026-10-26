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

var maximumWealth = function (accounts: number[][]): number {
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

//*-------------------------------
//*   Problem 12: Remove Duplicates from Sorted Array
//*-------------------------------

var removeDuplicates = function (nums: number[]): number {
  if (nums.length === 0) return 0;
  let k = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[k - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

//*-------------------------------
//*   Problem 13: Contains Duplicate
//*-------------------------------

var containsDuplicate = function (nums: number[]): boolean {
  const set = new Set(nums);
  return set.size !== nums.length;
};

console.log(containsDuplicate([1, 2, 3, 1]));

//*-------------------------------
//*   Problem 14: Move Zeroes
//*-------------------------------

var moveZeroes = function (nums: number[]): void {
  let k = 0;
  let temp = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      temp = nums[k];
      nums[k] = nums[i];
      nums[i] = temp;
      k++;
    }
  }

  console.log(nums);
};

moveZeroes([0, 1, 0, 3, 12]);

//*-------------------------------
//*   Problem 15: Merge Sorted Array
//*-------------------------------

var merge = function (
  nums1: number[],
  m: number,
  nums2: number[],
  n: number,
): void {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }

  console.log(nums1);
};

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);

//*-------------------------------
//*   Problem 16: 3Sum
//*-------------------------------

var threeSum = function (nums: number[]): number[][] {
  nums.sort((a, b) => a - b);

  const result: number[][] = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      if (nums[i] + nums[j] + nums[k] < 0) {
        j++;
      } else if (nums[i] + nums[j] + nums[k] > 0) {
        k--;
      } else {
        result.push([nums[i], nums[j], nums[k]]);
        j++;
        k--;

        while (j < k && nums[j] === nums[j - 1]) {
          j++;
        }

        while (j < k && nums[k] === nums[k + 1]) {
          k--;
        }
      }
    }
  }

  return result;
};

console.log(threeSum([0, 0, 0]));

//*-------------------------------
//*   Problem 17: Plus One
//*-------------------------------

var plusOne = function (digits: number[]): number[] {
  let carry = 1;

  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i] += carry;

      return digits;
    } else {
      digits[i] = 0;
    }
  }

  digits.unshift(1);
  return digits;
};

console.log(plusOne([1, 2, 9]));
