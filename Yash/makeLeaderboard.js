function runProgram(input) {
    input = input.split("\n");
    const n = Number(input[0]);
    input.shift();

    const customSort = (a, b) => {
        a[1] = Number(a[1]);
        b[1] = Number(b[1]);

        if (a[1] < b[1]) {
            return 1;
        } else if (a[1] > b[1]) {
            return -1;
        } else if (a[1] == b[1]) {
            if (a[0] < b[0]) {
                return -1;
            } else {
                return 1;
            }
        }
    };

    input = input.map((a) => a.split(" ")).sort(customSort)
    console.log(input);

    let rank = 1;

    input.forEach((a, i) => {
        if (i === 0) {
            console.log(`${rank} ${a[0]}`);
            return;
        }

        if (a[1] === input[i - 1][1]) {
            console.log(`${rank} ${a[0]}`);
        } else {
            rank = i + 1;
            console.log(`${rank} ${a[0]}`);
        }
    });
}

runProgram(`6
rancho 45
chatur 32
raju 30
farhan 28
virus 32
joy 45`);
