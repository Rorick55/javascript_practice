function bubbleSort(a){
  var reverse;
    do {
        reverse = false;
        for (var i=0; i < a.length-1; i++) {
            if (a[i] > a[i+1]) {
                var current = a[i];
                a[i] = a[i+1];
                a[i+1] = current;
                reverse = true;
            }
        }
    } while (reverse);
    console.log(a)
}

bubbleSort([54, 8, 9, 12, 49, 100, 403, 76, 44]);

