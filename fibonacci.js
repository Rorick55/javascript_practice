function fibonacci(num){
  var set = [0, 1];
  var finalNum;
  if (num === 1){
    finalNum = 1;
  } else {
    for (var i = 2; i <= num; i++) {
      finalNum = set[0] + set[1];
      set.push(finalNum)
      set.shift();
    };
  };
  console.log(finalNum);
}

fibonacci(13);
