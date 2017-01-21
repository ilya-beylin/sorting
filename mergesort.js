function mergeSort(arr){
  // split into singleton arrays
  var collection = [];

  for(var i = 0; i<arr.length; i++){
    collection.push([arr[i]]);
  }

  // recursively combine from singleton arrays to full array
  while(collection.length > 1){
    var arr1 = collection.shift();
    var arr2 = collection.shift();
    collection.push(merge(arr1, arr2));
  }
  return collection;
}


function mergeSortRec(array){

  if(array.length < 2){
      return array;
  }
  var collection = split(array);
  return merge(mergeSortRec(collection[0]), mergeSortRec(collection[1]));
}

function split(input_array){

  var input_array_mid = Math.floor(input_array.length / 2);
  var first_half = [];
  var second_half = [];
  var first_half = input_array.slice(0,input_array_mid);
  var second_half = input_array.slice(input_array_mid);
  var return_arr = [];
  return_arr.push(first_half);
  return_arr.push(second_half);
  return return_arr;
}


function merge(arr1, arr2){
  var merged_array = [];
  var counter = arr1.length + arr2.length;

  for(var i = 0; i< counter; i++){
    if(arr1.length == 0){
      merged_array = merged_array.concat(arr2);
      return merged_array;
    }
    else if(arr2.length == 0){
      merged_array = merged_array.concat(arr1);
      return merged_array;
    }
    else if(arr1[0] < arr2[0]){
      merged_array.push(arr1.shift());
    }
    else{
      merged_array.push(arr2.shift());
    }
  }
  return merged_array;
}
