
oldin = "";
function clicked(){
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
    num.innerHTML = Number(num.innerHTML)*Number(num.innerHTML);
  }
  oldin = input.value;
}
