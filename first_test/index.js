let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

/*
function average(inputBox) {
    inputBox.split(",") // convert text into array of costs
    inputBox.map((i) => Number(i)) // elements of array are still strings, must convert to numbers
    var total = 0;
    for (var i = 0; i < inputBox.length; i++) {
        total += inputBox[i];
    }
    var avg = total / inputBox.length;
    alert(avg)
    input.value = avg; //change  to value as it is a text area
}
*/

let string = "";
let arr = Array.from(buttons);

function average(inputBox) {
    let splitArray = inputBox.split(",");
    let average = 0;
    for (let i = 0; i < splitArray.length; i++) {
      console.log(splitArray[i]);
      average += Number(splitArray[i]);
    }
    average = average / splitArray.length;
    return average;
}

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            input.value = string;
        } else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        } else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else if (e.target.innerHTML == 'avg.') {
            string = average(string);
            console.log(string);
            input.value = string;
        } else {
            string += e.target.innerHTML;
            input.value = string;
        }

    })
})