for(var i=1; i<=100; i++){
  var li = document.createElement('li');
  if(i%3==0)
  {
    li.trxtContent = 'Fizz';
  }
  else if(i%5==0)
  {
    li.trxtContent = 'Bizz';
  }
  else
  {
li.textContent =i;
}
document.getElementById('list').appendChild(li);
}

