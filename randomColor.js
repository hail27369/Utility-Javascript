function getRandomColor(){
  var color = 'rgb(' + getNum0Through255() + ',' + getNum0Through255() + ',' + getNum0Through255() + ')';

  return color;
}

function getNum0Through255(){
  return Math.floor(Math.random() * 256).toString();
}
