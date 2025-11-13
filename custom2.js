//HTML요소 가져오기
let user = document.querySelector("#user"),
  add = document.querySelector("#add"),
  taskBoard = document.querySelector("#taskBoard");

//입력한 값이 여러개이므로 배열로 선언
let taskList = [];

//add 클릭 이벤트(addTask함수 실행)
add.addEventListener("click", addTask);

//addTask함수 작성
function addTask() {
  //입력받은 값을 변수에 담기

  let task = {
    id: randomId(), //순번
    taskContent: user.value,
    //isComplete값이 true면 task-done클래스 추가,false면 추가안함
    isComplete: false,
  };

  //   let taskContent = user.value;
  //입력받은 값을 taskList 배열에 넣기
  taskList.push(task);
  //   console.log(taskList);
  //화면에 보이게 할 함수 호출
  render();
  //render함수 호출 후 입력했던 값 지우기
  user.value = "";
}

//화면에 보이게 할 함수 정의
function render() {
  //화면에 보일 내용을 담을 변수인 result를 선언,초기값은 공백
  let result = "";
  //taskList배열에 하나씩 받을 변수 list
  taskList.forEach((task) => {
    if (task.isComplete == true) {
      result += `<div class="task">
           <div class="task-done">${task.taskContent}</div>
           <div>
    <button onclick="complete(${task.id})">check</button>
               <button onclick="deleteTask(${task.id})">delete</button>
             </div>
           </div>`;
    } else {
      result += `<div class="task">
           <div>${task.taskContent}</div>
           <div>
    <button onclick="complete(${task.id})">check</button>
               <button onclick="deleteTask(${task.id})">delete</button">
             </div>
           </div>`;
    }
    // 화면에 보일 내용을 변수에 담고, 누적시킴
    //button을 클릭하면 complete함수 호출
  });
  //화면에 보일 내용을 taskBoard에 innerHTML시킴
  taskBoard.innerHTML = result;
}
function complete(id) {
  console.log("complete");
  taskList.forEach((task) => {
    if (task.id == id) {
      //   task.isComplete = true;
      task.isComplete = !task.isComplete;
    }
  });
  render();
}
//체크버튼을 클릭하면 모두 true로 변경되는걸 방지, 날짜를 이용해서 index번호를 만들기 위함,배열에 있는 index번호는 delete를 하게되면 번호가 바뀌게 되므로 고유번호가 필요
function randomId() {
  //   console.log(Date.now());
  return Date.now();
}
function deleteTask(id) {
  //   console.log(id);
  taskList = taskList.filter((task) => task.id != id);
  render();
}
