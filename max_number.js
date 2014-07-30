function maxNumber(array) {
  var max = array[0];
  for (var i = 0; i < array.length; i++) {
    var num = array[i];
    if (array[i] > max) {
      max = num;
    }
  }
  console.log(max);
}

maxNumber([5, 3, -9, 10, -3])
