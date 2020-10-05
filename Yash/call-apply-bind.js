function Fruits(name, quantity) {
  this.name = name
  this.quantity = quantity

  this.printName = function() {
    console.log(this.name)
  }
}


const apple = new Fruits("apple", 20)
apple.printName()

const getQuantity = function () {
  console.log(this.quantity)
}

getQuantity.call(apple)

const incrQtyByX = function(x) {
  console.log(`Increase Qty by ${x}:`, x * this.quantity)
}

const raiseQty = incrQtyByX.bind(apple)
raiseQty(4)

incrQtyByX.call(apple, 3)
incrQtyByX.apply(apple, [2])


let obj = {}
obj.name = "apple"

console.log(obj)

function printName() {
  console.log(this.name)
}

printName.call(obj)
