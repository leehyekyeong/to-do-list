// 사용자 이름 받기
var userName = prompt('이름을 입력해주세요', '');
var header = document.getElementById('header');
header.innerHTML = userName + '의 To-Do List';

// input에서 입력한 task가 들어갈 배열
var taskList = [];
// input, button, ul 가져오기
var input = document.getElementById('task-input');
var button = document.getElementById('task-submit');
var list = document.getElementById('task-list');

// 버튼 onclick --> input 초기화
function resetInput() {
  input.value = null;
}

// 버튼 onclick
// --> input에 입력된 값을 taskList 배열에 추가
// <li> 요소 새로 만들기 : listItem(=li)
// listItem을 list(=ul)의 자식으로 붙이기
// listItem 안에 taskList 배열의 마지막 요소 넣기(버튼을 눌러 새로 추가된 값)
function addTask() {
  const task = input.value;
  taskList.push(task);
  // console.log(taskList[taskList.length - 1]);
  var listItem = document.createElement('li');
  list.appendChild(listItem);

  listItem.innerHTML =
    '<span class="item">' +
    taskList[taskList.length - 1] +
    '</span>' +
    '<span class="removeItem">×</span>';

  // for (var i = 0; i < taskList.length; i++) {
  //   // list.innerHTML += '<li>' + taskList[i] + '</li>';
  //   list.innerHTML +=
  //     '<li id=task-' + (i + 1) + '>' + (i + 1) + '. ' + taskList[i] + '</li>';
  // }
}
