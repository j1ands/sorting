describe("Bubble Sort", function() {
    it("handles an empty array", function() {
        expect(bubbleSort([])).toEqual([]);
    });

    it("handles one value", function(){
    	expect(bubbleSort([1])).toEqual([1]);
    });

    it("handles multiple values", function(){
    	expect(bubbleSort([2,1,4,3,5])).toEqual([1,2,3,4,5]);
    });
});


describe("Merge Sort", function() {
    
    it("is able to merge two arrays", function() {
        // test the merging algorithm
        expect(merge([1,2],[3,4,5])).toEqual([1,2,3,4,5])
    });

    it("able to sort an array", function(){
		expect(mergeSort([2,4,3,5,1])).toEqual([1,2,3,4,5]);
	});

    it("able to split an array into two halvess", function() {
    	// var msort = new mergeSort([1,3,5,4,2]);
    	// console.log(msort.left);
    	// expect(msort.left).toEqual([1,3]);
    	// expect(msort.right).toEqual([5,4,2]);
    });

});