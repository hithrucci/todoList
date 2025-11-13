let user = document.querySelector("#user"),
  add = document.querySelector("#add"),
  taskBoard = document.querySelector("#taskBoard");
//입력한 내용을 담을 수 있는 배열 변수 선언
let taskList = [];
//이벤트 안에서 함수 호출할 땐 함수 옆에 괄호X, 괄호를 쓰면 이벤트가 일어나기 전에 자동으로 함수를 호출하게 됨
add.addEventListener("click", addTask);
//입력한 값을 배열에 담기
function addTask() {
  let taskContent = user.value;
  taskList.push(taskContent);
  //   console.log(taskList);
  user.value = "";
  render();
}

//화면에 보여주는 함수
function render() {
  //   console.log("redner");
  let total = taskList.length;
  console.log(total);
  //화면에 보일 내용 및 버튼이 담김
  let result = "";
  //i는 배열순번, 입력한 값이 total보다 작을 동안 반복, 배열에 담긴 내용 개수만큼 반복으로 돌려서 화면에 보이게 함

  // for (i = 0; i < total; i++) {
  //   result += `
  // <div class="task">
  //             <div>${taskList[i]}</div>
  //             <div>
  //                 <button>check</button> <button>delete</button>
  //             </div>
  //           </div>`;
  // }

  // for (list of taskList) {
  //   result += `<div class="task">
  //            <div>${list}</div>
  //            <div>
  //                <button>check</button>
  //                <button>delete</button>
  //              </div>
  //            </div>`;
  // }
  i = 0;
  taskList.forEach((list) => {
    i++;
    result += `<div class="task">
           <div>${i}.${list}</div>
           <div>
               <button>check</button>
               <button>delete</button>
             </div>
           </div>`;
  });

  taskBoard.innerHTML = result;
}
