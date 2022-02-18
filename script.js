"use strict";

// task 1
let arr1 = [5, 25, 89, 120, 36];

arr1.push('javascript', 'python')
arr1.unshift('html', 'css')
console.log(arr1.length)
arr1.shift();
arr1.pop();

// task2
let arr2 =['ფორთოხალი', 'ბანანი', 'მსხალი']

console.log(arr2.length);
arr2.push('ვაშლი', 'ანანასი');
arr2.unshift('საზამთრო');
console.log(arr2.length);
arr2.splice(2,0,'მანგო');
arr2.shift();
arr2.pop();
console.log(arr2.length);

// task3
let array3 = [12, 25, 3, 6, 8, 14, 7, 23];

let newAray3 = array3.map(item=> item/3)

// task4
let array4 = ["hello", 125, "javascript", "html", 43, "css", "scss", "bootstrap", 88, 59, "python"];

let newArray4 = array4.filter(item=> typeof(item)=='number')
console.log(newArray4)

// task5
let languages5 = ['html', 'css', 'javascript', 'python', 'php'];

let newLanguages5 = languages5.filter(item => item.length>3)
console.log(newLanguages5)

// task 6
let array6= ['academy', 'of', 'digital', 'industries'];

let newArray6 = array6.reduce((sentence, word)=>sentence+ word + ' ',"")
console.log(newArray6)

// task7
let item7 = [12, 'google', 32, null, 'yahoo', 25];
console.log(typeof(item7[0])=='number')

let newItem7 = item7.map(item=>
    (typeof(item)=="number")? item*item:
    (typeof(item)=="string")? item.toUpperCase():
    item
)
console.log(newItem7)

// task8
let words8 = ['Madrid', 'Rome', 'Milan', 'Berlin'];

let newWords8 = words8.filter(item=>item.includes('m')||item.includes('M'))
console.log(newWords8)

