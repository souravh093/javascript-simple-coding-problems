
// first way
// function whoIsTallest(parameter) {
//     return Math.max(...parameter);
// }

// const showTallest = whoIsTallest([92, 88, 77, 21, 83, 2]);
// console.log(showTallest);


//second way

function whoIsTallest2(parameter) {
    let largest = parameter[0];

    for (let i = 0; i < parameter.length; i++) {
        const element = parameter[i];
        if (element > largest) {
            largest = element;
        }
    }
    return largest;
}

const input = [130, 292, 92, 303, 282, 202, 109];
const showInput = whoIsTallest2(input);
console.log(showInput);

