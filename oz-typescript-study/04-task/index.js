// 상수 정의: TODO_FORM_ID, TODO_INPUT_ID, TODO_LIST_ID는 각각 Todo 폼, Todo 입력 필드, Todo 목록의 HTML 요소의 ID입니다.
const TODO_FORM_ID = "todo-form";
const TODO_INPUT_ID = "todo-input";
const TODO_LIST_ID = "todo-list";
// Todo 상태 배열: todos는 Todo 항목을 저장하는 배열입니다.
let todos = [];
// DOM 요소를 가져오는 함수 정의: getElementById 함수는 주어진 ID에 해당하는 HTML 요소를 가져오는 역할을 합니다.
function getElementById(id) {
    return document.getElementById(id);
}
// Todo 추가 함수: addTodo 함수는 새로운 Todo 항목을 생성하고 todos 배열에 추가한 후 Todo를 렌더링합니다.
function addTodo(task) {
    const newTodo = { id: Date.now(), task: task, completed: false };
    todos.push(newTodo);
    renderTodos();
}
// Todo 삭제 함수: deleteTodo 함수는 주어진 ID에 해당하는 Todo 항목을 todos 배열에서 제거한 후 Todo를 렌더링합니다.
function deleteTodo(id) {
    const newTodos = todos.filter((todo) => todo.id !== id);
    todos = newTodos;
    //console.log(todos);
    renderTodos();
}
// Todo 상태 업데이트 함수: updateTodo 함수는 주어진 ID에 해당하는 Todo 항목의 상태를 업데이트한 후 Todo를 렌더링합니다.
function updateTodo(id, completed) {
    const newTodos = todos.map((todo) => {
        if (todo.id === id) {
            todo.completed = completed;
        }
    });
    renderTodos();
}
// Todo 렌더링 함수: renderTodos 함수는 todos 배열에 있는 각 Todo 항목을 HTML 요소로 만들어 Todo 목록에 표시합니다. 각 Todo 항목에는 할 일 내용과 완료/미완료 상태를 표시하며, 삭제 버튼과 완료/미완료 전환 버튼이 있습니다.
function renderTodos() {
    console.log(todos);
    const lists = getElementById(TODO_LIST_ID);
    if (lists) {
        lists.innerHTML = "";
        todos.forEach((todo) => {
            const li = document.createElement("li");
            li.textContent = todo.task;
            li.style.color = todo.completed ? "green" : "red";
            const completedBtn = document.createElement("button");
            completedBtn.textContent = todo.completed ? "완료" : "미완료";
            completedBtn.addEventListener("click", () => updateTodo(todo.id, !todo.completed));
            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "삭제";
            deleteBtn.addEventListener("click", () => {
                deleteTodo(todo.id);
            });
            li.appendChild(completedBtn);
            li.appendChild(deleteBtn);
            lists.appendChild(li);
        });
    }
}
// 폼 제출 이벤트 핸들러: handleFormSubmit 함수는 Todo 폼을 제출할 때 호출되는 이벤트 핸들러입니다. 입력 필드에 입력된 내용을 새로운 Todo로 추가합니다.
function handleFormSubmit(e) {
    e.preventDefault();
    console.log("폼핸들러함수");
    const input = getElementById(TODO_INPUT_ID);
    if (input) {
        if (input.value !== "") {
            addTodo(input.value);
        }
        else {
            alert("할일을 입력해주세요");
        }
        input.value = "";
    }
}
// DOM 로드 후 초기화: DOMContentLoaded 이벤트가 발생하면 Todo 폼의 제출 이벤트를 처리하고 Todo 목록을 렌더링합니다.
document.addEventListener("DOMContentLoaded", () => {
    const form = getElementById(TODO_FORM_ID);
    if (form) {
        form.addEventListener("submit", handleFormSubmit);
    }
    renderTodos();
});
