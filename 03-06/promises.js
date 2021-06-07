let myPromise =new Promise((myResolve,myReject) =>{
    let a=5;
    let b =3;
    if(a*a<a*b){
        myReject("Promise failed");
    }
    else{
myResolve(a*a);
    }
});

myPromise
    .then((value)=>{
        console.log(value);
    })
    .catch((value)=>{
        console.log(value);
    })