// 0. 버튼을 클릭했을 때 실행되는 이벤트 함수입니다.
document.getElementById('add-btn').addEventListener('click', function () {
    // 1. index.html에 있는 input 요소에 입력된 값(value)과 button 요소를 변수에 할당합니다.
    const inputValue=document.getElementById("todo-input").value;
    const buttonValue=document.getElementById("add-btn").innerText;

    // 5. 만약 입력창에 아무것도 입력하지 않은 경우 alert로 유저에게 입력을 요청해야 합니다.
    if(inputValue === ''){
        alert("입력창에 할 일을 적어주세요");
    }else{
        // 2. 새로운 li요소를 만들고 input 요소에 입력된 값을 textContent로 갖도록 합니다.
        const li=document.createElement("li");
        li.textContent=inputValue;

        const checkbox = document.createElement("input");
        checkbox.type="checkbox"
        checkbox.classList.add("checkbox");
        li.append(checkbox);

        const deleteBtn=document.createElement("button");
        deleteBtn.classList.add("delete-btn");
        deleteBtn.textContent="삭제";
        li.append(deleteBtn);
        document.getElementById("todo-list").append(li);

        // 3. li 요소는 클릭하면 해당 li 요소가 지워지는 delete 버튼을 가지고 있어야 합니다.
        // function remove() {
        //     deleteBtn.parentNode.removeChild(li);
        //     deleteBtn.parentNode.removeChild(deleteBtn);
        // }
        // deleteBtn.addEventListener('click', remove);
        deleteBtn.onclick = function () {
            this.parentElement.remove();
          };

        // 4. 입력창은 초기화되어야 합니다.
        document.getElementById("todo-input").value="";
    }
  });
  
  // 심화1) 입력한 TO-DO가 Local Storage에 저장되어 새로 고침 후에도 유지되도록 해보세요.
  // 심화2) 할 일 항목에 완료 표시를 할 수 있는 체크박스를 추가해 보세요.
  // 심화3) TO-DO 리스트를 드래그 앤 드롭으로 정렬할 수 있는 방법을 검색하고 적용해 보세요.
  