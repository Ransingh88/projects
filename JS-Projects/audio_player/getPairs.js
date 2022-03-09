let arr = [1, 7, 9, 4, 23, 56, 12, 23, 45, -5, -7, -8, -9, 99, 14, -11, 44];

function getPairs(arr, target) {
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == target) {
        res.push([arr[i], arr[j]]);
      }
    }
  }
  return res;
}

let a = getPairs(arr, 0);

if (a.length == 0) {
  console.log("No pairs found");
} else {
  a.forEach((e) => console.log(e));
}
