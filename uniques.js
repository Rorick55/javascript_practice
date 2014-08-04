function does_not_include(array, object){
  var doesnt_include = true
  for (var i = 0; i < array.length; i++){
    if(array[i] === object){
      doesnt_include = false;
    };
  };
  return doesnt_include;
};

function uniques(array){
  unique_array = [];
  for(var i = 0; i < array.length; i++){
    if(does_not_include(unique_array, array[i])){
      unique_array.push(array[i]);
    };
  };
  return unique_array;
};

console.log(uniques([1, 1, 1, 1, 2, 3, 4, 3, 2, 2, 6, 7]));
