for(var i=1; i<=100; i++){
  var li = document.createElement('li');
  if(var%3==0)
  {
    li.trxtContent = 'Fizz';
  }
  else
  {
li.textContent =i;
}
document.getElementById('list').appendChild(li);
}

