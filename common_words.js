function does_not_include(array, object){
  var doesnt_include = true
  for (var i = 0; i < array.length; i++){
    if(array[i] === object){
      doesnt_include = false;
    };
  };
  return doesnt_include;
};

function maxValue(object, words){
  var max_words = [];
  var max = 0;
  for(var i = 0; i < words.length; i++){
    if(object[words[i]] > max){
      max = object[words[i]];
    };
  };
  for(var i = 0; i < words.length; i++){
    if(object[words[i]] === max && does_not_include(max_words, words[i])){
      max_words.push(words[i]);
    };
  };
  return max_words;
};

function commonWords(words){
  words = words.split(' ')
  word_count = new Object();
  for(var i = 0; i < words.length; i++){
    if (word_count[words[i]] === undefined){
      word_count[words[i]] = 1;
    } else {
      word_count[words[i]] = word_count[words[i]] + 1;
    };
  };
  finals =  maxValue(word_count, words);
  return finals

};


console.log(commonWords("hello world how are you today today world"))

