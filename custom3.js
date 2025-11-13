//HTML요소 가져오기
let user = document.querySelector("#user"),
  add = document.querySelector("#add"),
  taskBoard = document.querySelector("#taskBoard"),
  tabs = document.querySelectorAll(".tabs li");

//변수선언
let taskList = [];
let mode = "all"; //전체보이기,"모두"탭, all, going,done이 들어갈 수 있음
let filterList = []; //진행중,끝남으로 갈지 정하는 변수
let list = [];

add.addEventListener("click", addTask);
function addTask() {
  //   console.log(user.value);
  //   console.log("addTask");
  let task = {
    id: randomId(),
    taskContent: user.value,
    isComplete: false,
  };

  taskList.push(task);
  console.log(taskList);
  user.value = "";
  render();
}
function randomId() {
  return Date.now();
}
function render() {
  let result = "";

  if (mode == "all") {
    list = taskList;
  } else {
    list = filterList;
  }

  list.forEach((task) => {
    //if문
    //   if (task.isComplete == true) {
    //     result += `
    // <div class="task">
    //   <div class="task-done">${task.taskContent}</div>
    //   <div>
    //     <button onclick = "complete(${task.id})">check</button>
    //     <button onclick = "deleteTask(${task.id})">delete</button>
    //   </div>
    // </div>`;
    //   } else {
    //     result += `
    // <div class="task">
    //   <div >${task.taskContent}</div>
    //   <div>
    //     <button onclick = "complete(${task.id})">check</button>
    //     <button onclick = "deleteTask(${task.id})">delete</button>
    //   </div>
    // </div>`;
    //   }

    //삼항연산자
    result += `<div class="task">
        <input type ="checkbox" id ="complete" onclick = "complete(${
          task.id
        })"></input><div class= "list ${task.isComplete ? "task-done" : ""}"
        >${task.taskContent}</div>
        
         
          <button id="delete" onclick = "deleteTask(${task.id})">delete</button>
      
         </div>
`;
  });
  taskBoard.innerHTML = result;
}
function complete(id) {
  //   console.log(id);
  taskList.forEach((task) => {
    if (task.id == id) {
      task.isComplete = !task.isComplete;
    }
  });
  //   render();
  filter();
}
function deleteTask(id) {
  //   console.log("delete");
  taskList = taskList.filter((task) => {
    return task.id != id;
  });
  //render();
  filter();
}
tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    filter(e);
    tabs.forEach((tab) => {
      tab.classList.remove("on");
    });
    tab.classList.add("on");
  });
});
function filter(e) {
  //   console.log(e);
  //   console.log(e.target.id);
  if (e) {
    mode = e.target.id;
  }

  filterList = [];
  if (mode == "all") {
    render();
  } else if (mode == "going") {
    // console.log("진행중");

    taskList.forEach((task) => {
      if (task.isComplete == false) {
        filterList.push(task);
      }
      console.log("진행중", filterList);
    });
    render();
  } else {
    // console.log("끝남");
    taskList.forEach((task) => {
      if (task.isComplete == true) {
        filterList.push(task);
      }
    });
    render();
  }
}

const addList = document.querySelector("#container #addList svg");
const modal = document.querySelector("#modal");

addList.addEventListener("click", () => {
  modal.classList.toggle("on");

  if (modal.classList.contains("on")) {
    gsap.to(addList, {
      rotation: "+=90",
      duration: 0.5,
    });
  } else {
    gsap.to(addList, {
      rotation: "-=90",
      duration: 0.5,
    });
  }
});

const close = document.querySelector("#modal button#close");
close.addEventListener("click", () => {
  modal.classList.remove("on");
});
