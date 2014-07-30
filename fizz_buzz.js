for(var i=1; i<101; i++) {
  var output = ''
  if(i % 3 === 0) {
    output = output + 'Fizz';
  };
  if(i % 5 === 0){
    output = output + 'Buzz';
  };
  if(i % 3 !== 0 && i % 5 !== 0){
    output = i
  }
  console.log(output);
}
