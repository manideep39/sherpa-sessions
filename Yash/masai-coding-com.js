function processData(input) {
    //Enter your code here
    input = input.split("\n")
    var n = Number(input[0])
    var input = input.slice(1)
    var e1 = []
    var e2 = []
    var e3 = []
    var e4 = []
    var stack = []

    for (var i = 0; i < n; i++) {
        var arr = input[i].trim().split(" ")
        
        if (arr[0] == "E") {
            
            switch (arr[1]) {
                case "1":
                    e1.push(Number(arr[2]));
                    stack.includes(arr[1]) ? stack : stack.push(arr[1]);
                    break;
                case "2":
                    e2.push(Number(arr[2]));
                    stack.includes(arr[1]) ? stack : stack.push(arr[1]);
                    break;
                case "3":
                    e3.push(Number(arr[2]));
                    stack.includes(arr[1]) ? stack : stack.push(arr[1]);
                    break;
                case "4":
                    e4.push(Number(arr[2]));
                    stack.includes(arr[1]) ? stack : stack.push(arr[1]);
                    break;  
            }
            
        } else if (arr[0] == "D") {
            
            
            switch (stack[0]) {
                case "1":
                    var temp = e1.shift();
                    console.log(stack[0], temp)
                    e1.length == 0 ? stack.shift() : stack
                    break;
                case "2":
                    var temp = e2.shift();
                    console.log(stack[0], temp)
                    e2.length == 0 ? stack.shift() : stack
                    break;
                case "3":
                    var temp = e3.shift();
                    console.log(stack[0], temp)
                    e3.length == 0 ? stack.shift() : stack
                    break;
                case "4":
                    var temp = e4.shift();
                    console.log(stack[0], temp)
                    e4.length == 0 ? stack.shift() : stack
                    break;  
            }
        }
        
        // console.log(e1, e2, e3, e4, stack)
    }
    
} 