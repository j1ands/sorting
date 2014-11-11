var bubbleSort = function(arr)
{
var noSwap;
var temp = 0;
var len = arr.length - 1;	
	do
	{
		noSwap = true;;
		for(var i = 0; i<len; i++)
		{
			if(arr[i]>arr[i+1])
			{
				temp = arr[i];
				arr[i]= arr[i+1];
				arr[i+1]= temp;
				noSwap = false;
			}
		}
		len--;
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

	right = mergeSort(arr.splice(arr.length / 2));
	left = mergeSort(arr);

	return merge(left,right);
}

var merge = function(left, right)
{
	var merged = [];
	var leftLen = left.length;
	var rightLen = right.length;
	var i = 0;
	var j = 0;
	
	while(i<leftLen || j<rightLen)
	{
		if(left[i] < right[j])
		{
			merged.push(left[i]);
			i++;
		}
		//else if(right[j] != undefined)
		//else if(right[j] + 1)
		else if(!isNaN(right[j]))
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

	return merged;
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