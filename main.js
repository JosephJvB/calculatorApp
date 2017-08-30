var calcScreen = document.getElementById("display")
function logCalc (x) {
  calcScreen.value += x;
  if (x==='C') {
    calcScreen.value='';
  }
}

function calcCalc () {
  var x=calcScreen.value;
  x=eval(x);
  calcScreen.value=x;
}


//extra special super button :o
function backSpace () {
  var num = calcScreen.value;
  var lenF = num.length-1;
  var newNum = num.substring(0, lenF);
  calcScreen.value = newNum;
}
