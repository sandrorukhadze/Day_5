/* 1
let array1 =['hello1', 14,24, 'hello2'] 

let array1New = array1.map(function(x){
  if (typeof x == 'number') {
    return x
  } else if (typeof x == 'string'){
    return 'String'
  }
})

console.log(array1New);
*/


/* 3
let array4 = [1, 2, 3, 4, 5];
let sum = 0;

array4.forEach(num => {
  sum += num
})

console.log(sum);
console.log(array1New);
*/


/* 4
let languages = ['html', 'css', 'javascript', 'python', 'php'];

let languagesNew = languages.filter(function(x){
  if (x.length > 3)
  console.log(x); 
})
*/


/* 5
let words = ['madrid', 'rome', 'milan', 'berlin'];

var wordsNew = words.filter(function(x){
  return x.includes('m')
})

console.log(wordsNew);
*/


/* 6
let array6 = [-1, -2, -3, 4];

let array6New = array6.some(function(x){
  if (x > 0)
  console.log(x);
})
*/


/* 7

let string = '12345';
let usingSplit = string.split([]);
let arrOfNum = [];
for (const element of usingSplit) {
  arrOfNum.push(parseInt(element));
}
let sum = 0;
arrOfNum.forEach(num => {
  sum += num
  
})

console.log(sum);
*/
