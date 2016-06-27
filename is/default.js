var li = document.createElement('li');
li.textContent =’アイテム';
document.getElementById('list').appendChild(li);

document.getElementById('form').onsubmit = function(){
  window.alert(document.getElementById('form').word.value);
};

for(var i　=1; i<100; i++){
  ver li = document.createElement('li');
  li.textContent = i+'回目';
  document.getElementbyId('list').appendChild(li);
}
