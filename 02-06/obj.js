var obj = {
    name: "Sanu",
    address: "Bihar",
    age:"18",
    city:"Patna"
  };
  
  for (let key in obj) {
    console.log(key, obj[key]);
    if (obj.age ==="18" ){
        console.log("underAge")
      break;
    }
  }

  var myObj= {
    age:[20,15,100]
}

for(let key in myObj){
  for (let i = 0; i < myObj[key].length; i++) {
    if (myObj[key][i] < 18) {
      console.log("less than 18");
      break;
    } else {
      console.log(myObj[key][i]);
    }
  }
}
