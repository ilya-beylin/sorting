function bubbleSort(inputArray){
  for(var i = 0; i<inputArray.length; i++){
    for(var j = 0; j < inputArray.length - i - 1; j++){
      if(reverse(inputArray[j], inputArray[j+1])){
        swap(inputArray, j, j+1);
      }
    }
  }
  return inputArray;
}

function reverse(elem1, elem2){
  if(elem1 > elem2){
    return true;
  }
  return false;
}

function swap(array, pos1, pos2){
    var temp = array[pos1];
    array[pos1] = array[pos2];
    array[pos2] = temp;
}
