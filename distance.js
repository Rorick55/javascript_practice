function distance(pointOne, pointTwo){
  var x1 = pointOne[0];
  var x2 = pointTwo[0];
  var y1 = pointOne[1];
  var y2 = pointTwo[1];

  var xLine = x2 - x1;
  var yLine = y2 - y1;
  dist = Math.sqrt(Math.pow(xLine, 2) + Math.pow(yLine, 2));
  console.log(dist.toFixed(2));
};

distance([4, 5], [6, 7]);
