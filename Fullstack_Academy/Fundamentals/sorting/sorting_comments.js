//var left,right;

var bubbleSort = function(arr){
var noSwap;
var temp = 0;
var len = arr.length - 1;	
	do{
		noSwap = true;;
		for(var i = 0; i<len; i++){
			if(arr[i]>arr[i+1]){
				temp = arr[i];
				arr[i]= arr[i+1];
				arr[i+1]= temp;
				//counter++;
				noSwap = false;
			}
		}
		len--;
		//len=0;
	}while(!noSwap);
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
	
	// left = mergeSort(arr.slice(0, (arr.length / 2)));
	// right = mergeSort(arr.slice(arr.length / 2));

	//left = arr;
	right = mergeSort(arr.splice(arr.length / 2));
	left = mergeSort(arr);
	//right = mergeSort(right);

	// this.left = left;
	// this.right = right;
	//leftAndRight(left,right);

	return merge(left,right);
	//return result.concat(merge(left,right));
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
	//debugger;
	//var merged = left.concat(right);
	var merged = [];
	var leftLen = left.length;
	var rightLen = right.length;
	var i = 0;
	var j = 0;
	
	// while(i+j<merged.length)
	// {
	// 	//debugger;
	// 	if(left[i] < right[j])
	// 	{
	// 		//merged.push(left[i]);
	// 		merged[i+j] = left[i];
	// 		i++;
	// 	}
	// 	else if(right[j])
	// 	{
	// 		//merged.push(right[j]);
	// 		merged[i+j] = right[j];
	// 		j++;
	// 	}
	// 	else
	// 	{
	// 		merged[i+j] = (left[i]);
	// 		i++;
	// 	}
	// }

	while(i<leftLen || j<rightLen)
	{
		if(left[i] < right[j])
		{
			merged.push(left[i]);
			i++;
		}
		else if(right[j])
		{
			merged.push(right[j]);
			j++;
		}
		else
		{
			merged.push(left[i]);
			i++;
			j++;
		}
	}	

	// while(i<leftLen || j<rightLen)
	// {
	// 	//if(left[i] < right[j] || right[j] === undefined)
	// 	if(left[i] < right[j])
	// 	{
	// 		merged.push(left[i]);
	// 		i++;
	// 	}
	// 	//else if(right[j] || left[i] === undefined)
	// 	else if(right[j])
	// 	{
	// 		merged.push(right[j]);
	// 		j++;
	// 	}
	// 	else
	// 	{
	// 		merged.push(left[i]);
	// 		//merged.push(right[j]);
	// 		//j++;
	// 		i++;
	// 		j++;
	// 	}
	// }

	// while(i<leftLen || j<rightLen)
	// {
	// 	if(left[i] < right[j])
	// 	{
	// 		merged.push(left[i]);
	// 		i++;
	// 	}
	// 	else if(right[j])
	// 	{
	// 		merged.push(right[j]);
	// 		j++;
	// 	}
	// 	else
	// 	{
	// 		merged.push(left[i]);
	// 		//merged.push(right[j]);
	// 		//j++;
	// 		i++;
	// 	}
	// }

	return merged;

	//merged = merged.concat(rightLen);


	// while(left[0] || right[0]){
	// 	if(left[0]<right[0]){
	// 		merged.push(left.shift());
	// 	}
	// 	else if(right[0]) {
	// 		merged.push(right.shift());
	// 	}
	// 	else{
	// 		merged.push(left.shift());	
	// 	}
	// }
}

for(var i=10; i < 20; i++) {
    var num_items = Math.pow(2,i);
    var native_test_array = [];
    //var b_test_array = [];
    var m_test_array = []
    for(var j=0; j < num_items; j++) {
        var rand = Math.floor(Math.random() * num_items);
        native_test_array.push(rand);
        //b_test_array.push(rand);
        m_test_array.push(rand);
    }
 
    console.time(num_items + "native");
    native_test_array.sort();
    console.timeEnd(num_items + "native");
 
    // console.time(num_items + "bubble");
    // bubbleSort(b_test_array);
    // console.timeEnd(num_items + "bubble");
 
    console.time(num_items + "merge");
    //debugger;
    mergeSort(m_test_array);
    console.timeEnd(num_items + "merge");  
}