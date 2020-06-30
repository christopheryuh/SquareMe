button = document.getElementById('button');
oldin = "";
function clicked(){
  console.log('BUTTON HAS BEEN CLICKED');
  input = document.getElementById('input');
  num = document.getElementById('num');
  console.log(input.value);
  console.log(num.innerHTML);
  x = Number(input.value);
  if (oldin != input.value){
    console.log('new number');
    num.innerHTML = x*x;
  }
  if (oldin == input.value){
    console.log("it isn't the start");
    num.innerHTML = Number(num.innerHTML)*Number(num.innerHTML);
  }
  oldin = input.value;
  console.log(oldin);
  }
