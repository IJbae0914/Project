var button = document.getElementById('button');
var add = document.getElementById('add-todo');
var list = document.getElementById('dolist');
var addtime = document.getElementById('add-time');

button.addEventListener('click', addtext);

var del = 0;

function addtext() {
  var temp = document.createElement('a');
  temp.setAttribute("class", "list-group-item list-group-item-action");
  temp.setAttribute("id", "li"+del);
  temp.innerHTML = "할 일 : " + add.value + " 예정 시간 : " + addtime.value + '<br>';
  temp.innerHTML += "<button type='button' id='setting' onclick='setting()'>설정</button>"
  temp.innerHTML += "<button type='button' id='remove' onclick='remove("+del+")'>삭제</button>";
  temp.innerHTML += "<button type='button' id='rename' onclick='rename("+del+")'>수정</button>";
  list.appendChild(temp);
  del++;
}

function remove(del) {
  var li = document.getElementById('li'+del);
  list.removeChild(li);
}


