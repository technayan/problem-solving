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
