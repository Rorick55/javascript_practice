function multiplicationTable(row) {
  for (var i = 0; i <= row; i++){
    var completeRow = [];
    for (var j = 0; j <= row; j++){
     completeRow.push(i * j);
    };
    console.log(completeRow)
  };
};
multiplicationTable(12)
