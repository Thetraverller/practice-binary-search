function linearSearch (arr, target) {

  // Can you solve this in one line?
    return arr.indexOf(target)
};



function binarySearch(arr, target) {

  // Set integers pointing to the high and low range of possible indices
  let low = 0;
  let high = arr.length -1;

  // While high and low indices do not overlap...
  while(high >= low){

    // Find the midpoint between high and low indices
      let mp = Math.floor((high + low) / 2);

    // Compare the target value to the midpoint value
       if(target === arr[mp]) {
        return mp
       } else if (target > arr[mp]) {
        low = mp + 1
       } else if (target < arr[mp]) {
        high = mp - 1
      }
    }

    return -1
    // If the target equals the midpoint...
      // Return the midpoint index
    // If the target is higher than the midpoint...
      // Move the low pointer to midpoint + 1
    // If the target is less than the midpoint...
      // Move the high pointer to midpoint - 1

  // Return -1 if the loop exits with overlapping pointers

}

console.log(binarySearch([2,4,6,8], 6));  // 2
console.log(binarySearch([2,4,6,8], 10));  // -1


module.exports = [linearSearch, binarySearch]
