function encryptIt(input) {
  var [arr, k] = input
    .split("\n")
    .map((line, i) => (i ? Number(line) : line.split("")));

  // console.log({ arr, k })

  var lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var num = "0123456789".split("");

  // console.log({lowercase, uppercase, num})

  var encryption = "";

  let i = 0;
  while (i < arr.length) {
    switch (true) {
      case lowercase.includes(arr[i]):
        encryption += lowercase[(lowercase.indexOf(arr[i]) + 4) % 26];
        break;
      case uppercase.includes(arr[i]):
        encryption += uppercase[(uppercase.indexOf(arr[i]) + 4) % 26];
        break;
      case num.includes(arr[i]):
        encryption += num[(num.indexOf(arr[i]) + 4) % 10];
        break;
      default:
        encryption += arr[i];
    }

    i++;
  }

  console.log(encryption);
}

encryptIt(`All-convoYs-9-be:Alert1.
4`);

// a b c d e f g h i j k l m n o p q r s t u v w x y z
// A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
// 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15

// All-convoYs-9-be:Alert1.
// Epp-gsrzsCw-3-fi:Epivx5.

// console.log((25 + 4) % 26)
// console.log((11 + 4) % 26)
// console.log((7 + 4) % 10)