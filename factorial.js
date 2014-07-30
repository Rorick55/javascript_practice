function factorial(num) {
  var total = 1;
  for (var i = 1; i <= num; i++){
    total = total * i;
  }
  console.log(total);
}

factorial(4)
