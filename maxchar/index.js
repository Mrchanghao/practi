// 알고리즘
// 스트링 이 파라미터로 주어지고 그 중에서 가장 많이 사용된 글자 스트링을 리턴

const str = 'asdfss';
const chars = {};
for(let char of str) {
  // if(!chars[char]) {
  //   chars[char] = 1;
  // } else {
  //   chars[char]++;
  // }
  chars[char] = chars[char] + 1 || 1;
  return 
}

const maxChar = (str) => {
  let charMap = {};
  let max = 0;
  let maxChar = '';
  for(let char of str) {
    charMap[char] = charMap[char] + 1 || 1; // --> {a: 1, b: 2}
  }
  for(let char in charMap) {
    if(charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
  // let result = Object.keys(charMap).sort((a, b) => a > b);
  // return result[0];
}