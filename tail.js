
const tail = function(arr) {
  let tailArr=[];
  for(let item of arr){
    tailArr.push(item);
  }
  tailArr.shift();
  return  tailArr;
  
};

 module.exports =tail;