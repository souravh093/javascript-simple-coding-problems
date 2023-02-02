function reverseWorded(str) {
  const word = str.split(" ");
//   console.log(word);
  let reverse = [];
  for (let i = word.length - 1; i >= 0; i--) {
    const element = word[i];
    reverse.push(element);
    // console.log(element, reverse);
  }
  const reversed = reverse.join(' ');
  return reversed;
}

const myString = "I am a good boy";
const reverseWords = reverseWorded(myString);
console.log(reverseWords);