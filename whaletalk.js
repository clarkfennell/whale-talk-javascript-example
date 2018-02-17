const input = "This is a weird example";
const vowels = ['a', 'e', 'i', 'o', 'u'];
const resultArray = [];
for (inputIndex = 0; inputIndex < input.length; inputIndex++) {
  for (vowelsIndex = 0; vowelsIndex < vowels.length; vowelsIndex++) {
    if(input[inputIndex] === vowels[vowelsIndex]) {
      resultArray.push(input[inputIndex])
    }
  }
   if (input[inputIndex] === 'e') {
    resultArray.push(input[inputIndex])
  }
  if (input[inputIndex] === 'u') {
    resultArray.push(input[inputIndex])
  }
}

console.log(resultArray.join('').toUpperCase());
