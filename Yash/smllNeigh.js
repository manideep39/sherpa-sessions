function runProgram(input) {
  const [n, arr] = input.split('\n').map((line, i) => i ? line.split(" ").map(Number) : Number(line))

  let stack = []
  let res = []

  let i = 0; 
  while (i < arr.length) {

    if (i == 0) {
      res.push(-1)
      stack.push(arr[i])
    } else {

      if (arr[i] > arr[i - 1]) {
        res.push(stack[stack.length - 1])
        stack.push(arr[i])
      } else {

        while (stack[stack.length - 1] >= arr[i]) {
          stack.pop()
        }

        if (stack.length == 0) {
          res.push(-1)
        } else {
          res.push(stack[stack.length - 1])
        }

        stack.push(arr[i])
      }

    }

    i++
  }
  console.log(res.join(' '))
}

runProgram(`8
39 27 11 4 24 32 32 1`)