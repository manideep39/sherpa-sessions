function typeOneLayer(w) {
  var i = 0,
    layer = "";
  while (i <= w * 4) {

    if (i % 4 == 0) {
      layer += "|";
    } else {
      layer += "_";
    }
    i++;
  }

  return layer;
}
// | _ _ _ | _ _ _ | _ _  _  |
// 0 1 2 3 4 5 6 7 8 9 10 11 12

// _ _ | _ _ _ | _ _ _ | _ _ _ | _ _


// console.log(typeOneLayer(4))

function typeTwoLayer(w) {
  var layer = "";
  layer += "__";
  layer += typeOneLayer(w - 1);
  layer += "__";
  return layer;
}

// console.log(typeTwoLayer(4))

function printWall(h, w) {
  var i = 0,
    layer = "";
  while (i < h) {

    if (i % 2 == 0) {
      layer += typeTwoLayer(w);
    } else {
      layer += typeOneLayer(w);
    }
    if (i != h - 1) {
      layer += "\n";
    }
    i++;

  }
  return layer;
}

console.log(printWall(10, 10));
