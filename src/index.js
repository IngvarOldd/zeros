module.exports = function getZerosCount(number) {
  // your implementation
  let answer = 0;
  while(number = Math.floor(number/5)) {
    answer += number;
  }
  return answer;
}
