let arr=[1,2,3,4,5];
let rev=[];
while(arr.length > 0)
{
    rev.push(arr.pop());
}
console.log(rev);


var n,r;
function findFact(n)
{
    return n == 1 ? 1 : n * findFact(n - 1);
}


function findNpR(n,r)
{
    return findFact(n) / findFact(n - r);
}

function findNcR(n,r)
{
    return findFact(n) / (findFact(n - r) * findFact(r));
}
console.log(findFact(10));
console.log(findNpR(10,5));
console.log(findNcR(10,5));