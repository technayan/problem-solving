//*-------------------------------
//*     Problem 1: Staircase
//*-------------------------------

var staircase = function (n: number) {
  for (let i = 1; i <= n; i++) {
    let stair = "";
    for (let j = 1; j <= i; j++) {
      stair += "#";
    }
    console.log(stair);
  }
};

staircase(4);
