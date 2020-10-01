// https://www.hackerrank.com/contests/cohort-6-module-2-3-3-2/challenges/use-side-lane
function processData(input) {
    //Enter your code here
    input = input.split("\n")
    for (var x = 1; x < input.length; x = x + 2 ) {
        if (input[x] == 0) {
            return 
        }
        var arr = input[x].trim().split(" ").map(Number)
        // console.log(arr)
        var stack = []
        var exp = 1
        var flag = true
        var len = arr.length
        while (len > 0) {
            var cur = arr[0]
            // console.log(arr, cur, exp)
            if (cur == exp) {
                arr.shift()
                exp++
            } else if (stack[stack.length - 1] == exp) {
                // console.log("stack", stack)
                stack.pop()
                exp++
            } else {
                if (stack.length == 0 || (stack[stack.length - 1] > cur) ) {
                    stack.push(cur)
                    // console.log("stack push", stack)
                    arr.shift()
                } else {
                    flag = false
                    break
                }
            }
            len = arr.length
        }
        if (flag) {
            console.log("yes")
        } else {
            console.log("no")
        }
    }
}