//var left,right;

var bubbleSort = function(arr){
var counter = 0;
var temp =0;	
	do{
		counter = 0;
		for(var i = 0; i< arr.length; i++){
			if(arr[i]>arr[i+1]){
				temp = arr[i];
				arr[i]= arr[i+1];
				arr[i+1]= temp;
				counter++;
			}
		}

	}while(counter != 0);
return arr;
}

var mergeSort = function(arr)
{
	var left = null;
	var right = null;
	var result = [];

	if(arr.length <= 1)
	{
		return arr;
	}
	
	left = mergeSort(arr.slice(0, (arr.length / 2)));
	right = mergeSort(arr.slice(arr.length / 2));

	// this.left = left;
	// this.right = right;
	//leftAndRight(left,right);

	return result.concat(merge(left,right));
}

// var leftAndRight = function(left,right)
// {
// 	var result = []
// 	result.push(left);
// 	result.push(right);
// 	return result;
// }

var merge = function(left, right)
{
	var merged = [];
	while(left[0] || right[0]){
		if(left[0]<right[0]){
			merged.push(left.shift());
		}
		else if(right[0]) {
			merged.push(right.shift());
		}
		else{
			merged.push(left.shift());	
		}
	}
	return merged;
}