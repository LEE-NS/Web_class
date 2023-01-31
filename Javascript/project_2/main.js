/* 
로직

1. 사용자가 값을 input에 입력함
2. '+' 버튼을 누르면 아이템을 추가한다. 할일이 추가된다.
3. 사용자가 삭제 버튼을 누르면 할일이 삭제된다.
4. 사용자가 완료 버튼을 누르면 할일이 끝난다. 취소선이 생김
5. 진행중 끝남 탭을 누르면 언더바 인디케이터가 이동함
6. 끝남 탭은 끝난 아이템만, 진행중은 진행중인 아이템만 보여주게 된다. 전체탭을 누르면 전체 아이템을 보여준다.
*/

let taskInput = document.getElementById('task_input');
let addButton = document.getElementById('add_button');
let tabs =  document.querySelectorAll('.task_tabs div');
let mode = "all";

let taskList = [];
let filterList = [];





addButton.addEventListener('click', addTask);





for (let i = 1; i < tabs.length; i++) {
    tabs[i].addEventListener('click', function(event){filter(event)})
}




function addTask() {
    let task = {
        id: randomIDGenerate(),
        taskContent: taskInput.value,
        isComplete: false
    }

    taskList.push(task)
    render();
}

function toggleComplete(id) {
    for (let i = 0; i < taskList.length; i++) {
        if(taskList[i].id == id) {
            taskList[i].isComplete = !taskList[i].isComplete
            break
        }
    }
    filter(); /* UI에서도 보이게 해 줘야 한다 */
}

function deleteTask(id) {
    for(let i = 0; i < taskList.length; i++) {
        if(taskList[i].id == id) {
            taskList.splice(i, 1)
            break
        }
    }
    filter();
}

function filter(event) {
    if(event) {
        mode = event.target.id
        document.getElementById('underline').style.width = event.target.offsetWidth + 'px'
        document.getElementById('underline').style.top = '52px'
        document.getElementById('underline').style.left = event.target.offsetLeft + 'px'
    }
    
    filterList = []

    if (mode == "all") {
        render();
    } else if (mode == "in_progress") {
        for(let i = 0; i < taskList.length; i++) {
            if(taskList[i].isComplete == false) {
                filterList.push(taskList[i])
            }
        }
        render();
    } else if(mode == "done") {
        for(let i = 0; i < taskList.length; i++) {
            if(taskList[i].isComplete == true) {
                filterList.push(taskList[i])
            }
        }
        render();
    }  
}

function render() {
    let resultHTML = '';
    let list = []
    if(mode == "all") {
        list = taskList
    } else if (mode == "in_progress" || mode == "done") {
        list = filterList
    } 
    for(let i = 0; i < list.length; i++) {
        if(list[i].isComplete == true) {
            resultHTML += `<div class="task">
                                <div class="task_done">${list[i].taskContent}</div>
                                <div>
                                    <button onclick="toggleComplete('${list[i].id}')">완료</button>
                                    <button onclick="deleteTask('${list[i].id}')">삭제</button>
                                </div>
                            </div>`
        }
        else {
            resultHTML += `<div class="task">
                            <div>${list[i].taskContent}</div>
                            <div>
                                <button onclick="toggleComplete('${list[i].id}')">완료</button>
                                <button onclick="deleteTask('${list[i].id}')">삭제</button>
                            </div>
                        </div>`
        }    
    }
    document.getElementById('task_board').innerHTML = resultHTML
}

/* innerHTML - HTML의 태그 양식을 그대로 들고옴, textContent - 해당 노드가 가지고 있는 텍스트 값만 들고옴(글자만 들고온다) */

function randomIDGenerate() {
    return Math.random().toString(36).substr(2, 16)
}