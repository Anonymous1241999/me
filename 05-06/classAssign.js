var arr1=[4,8,6,4,9,7]
var arr2= arr1.reduce((product,el)=>{
  return product*el;
});

console.log(arr2);
