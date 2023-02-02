function whoIsSmallest(parameter) {
    let smallest = parameter[0];

    for (let i = 0; i < parameter.length; i++) {
        const element = parameter[i];
        if (element < smallest) {
            smallest = element;
        }
    }
    return smallest;
}

const input = [130, 292, 92, 303, 282, 202, 109];
const showInput = whoIsSmallest(input);
console.log(showInput);