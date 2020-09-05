function runProgram(input) {
  // console.log(input)
  input = input.split("\n")
  var n = Number(input[0])
  var arr = input[1].split(" ").map(Number)

  let count = 0
  for (var i = 0; i < arr.length; i++) {
    var temp = 0;
    for (var j = i; j < arr.length; j++) {
      temp += arr[j];
      if (temp % 2 == 0) {
        count++
      }
    }
  } 
  console.log(count)

}

runProgram(`5
2 5 4 4 4`)