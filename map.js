 const map = function(array , callback) {
  const results = [];
  array.forEach(item => results.push(callback(item)));
  return results;
};
// const mapfunction = word => word[0];
// const words = ["ground", "control", "to", "major", "tom"];
// //const results1 = map(words, mapfunction);
// const word = ["light","house","are","great"];
// //const words = ["ground", "control", "to", "major", "tom"];
// assertArrayEqual(map(words,mapfunction),['g','c','t','m','t']);
// assertArrayEqual(map(word,mapfunction),['l','h','a','g']);
// assertArrayEqual(map(words,mapfunction),['g','c','t','m','c']);
module.exports = map;