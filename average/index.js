function average(inputBox) {
    inputBox = inputBox.value //item cost is still an HTML element so you must first get the value of the element
        .split(",") // convert text into array of costs
        .map((i) => Number(i)) // elements of array are still strings, must convert to numbers
    var total = 0;
    for (var i = 0; i < inputBox.length; i++) {
        total += inputBox[i];
    }
    var avg = total / inputBox.length;
    alert(avg)
    document.getElementById("averageBox").value = avg; //change  to value as it is a text area
}