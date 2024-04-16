//요소 선택 및 배열 선언
const todoList = document.getElementById('todo-list');
const todoForm = document.getElementById('todo-form');
let todoArr = [];

//로컬 저장소에 저장하기
function saveTodos(){
    const todoString = JSON.stringify(todoArr);
    localStorage.setItem('myTodos',todoString);
}

//로컬 저장소에서 가져오기
function loadTodos(){
    const myTodos = localStorage.getItem('myTodos')
    if(myTodos !== null){
        todoArr = JSON.parse(myTodos);
        displayTodos();
    }
}
loadTodos();

//할일삭제하기
function handleTodoDelBtnClick(clickedId){
    todoArr = todoArr.filter(function(aTodo){
        return aTodo.todoId !== clickedId
    })
    displayTodos();
    saveTodos();
}

//할일수정하기
function handleTodoItemClick(clickedId){
    todoArr = todoArr.map(function(aTodo){
        if(aTodo.todoId === clickedId){
            return {
                ...aTodo, todoDone: !aTodo.todoDone //기존의 투두 내용에다가 todoDone을 반전시켜서 넣겠다
            } 
        }else{
            return aTodo
        }
    })
    // console.log(todoArr)
    displayTodos();
    saveTodos();
}

//할일보여주기
function displayTodos(){
    todoList.innerHTML = '';
    todoArr.forEach(function(aTodo){
        const todoItem = document.createElement('li');
        const todoDelBtn = document.createElement('span');
        todoDelBtn.textContent = 'x';
        todoItem.textContent = aTodo.todoText;
        todoItem.title = '클릭하면 완료됨';
        todoDelBtn.title = '클릭하면 삭제됨';

        if(aTodo.todoDone){
            todoItem.classList.add('done');
        }else{
            todoItem.classList.add('yet');
        }

        todoItem.addEventListener('click',function(){
            handleTodoItemClick(aTodo.todoId);
        })

        todoDelBtn.addEventListener('click',function(){
            handleTodoDelBtnClick(aTodo.todoId);
        })

        todoItem.appendChild(todoDelBtn);
        todoList.appendChild(todoItem);
    })
}

//할일추가
todoForm.addEventListener('submit',function(e){
    e.preventDefault(); //submit하면 새로고침되니까 방지
    const toBeAdded = {
        todoText : todoForm.todo.value,
        todoId : new Date().getTime(), //시간을정수형태로
        todoDone : false
    }
    todoForm.todo.value = '';
    todoArr.push(toBeAdded);
    displayTodos();
    saveTodos();
})