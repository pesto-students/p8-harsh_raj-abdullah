function isVowel(char) {
  return 'aeiou'.includes(char);
}

function vowelCount(str) {
  const vowelMap = new Map();
  const lowerStr = str.toLowerCase();
  for (let char of lowerStr) {
    if (isVowel(char)) {
      vowelMap.set(char, (vowelMap.get(char) + 1) || 1);
    }
  }
  return vowelMap;
}

console.log(vowelCount('AEIerTYOae'));