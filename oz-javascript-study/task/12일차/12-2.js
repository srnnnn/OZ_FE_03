/* -----------------------------------------------------------------------------*/
// <요구사항>
// 1. 주어진 ‘users’ 배열에서 나이가 25 이상 35 미만인 사용자를 필터링하여 새로운 배열을 생성해야합니다.
// 2. 필터링된 사용자 중에서 이메일 주소가 ‘gmail.com’ 도메인을 사용하는 사용자만을 추출하여 새로운 배열을 생성해야합니다.
// 3. ‘renderUserData’함수 내부에서는 각 사용자의 정보를 HTML 요소로 구성하여 화면에 표시합니다.
/* -----------------------------------------------------------------------------*/

const users = [
    { name: 'John', age: 30, email: 'john@example.com' },
    { name: 'Alice', age: 25, email: 'alice@gmail.com' },
    { name: 'Bob', age: 35, email: 'bob@gmail.com' },
    { name: 'Emma', age: 28, email: 'emma@example.com' },
    { name: 'Steve', age: 32, email: 'steve@gmail.com' },
  ];
  
  // 25세 이상 35세 미만인 사용자만을 필터링하여 새로운 배열 생성하세요
  // 여기에 코드를 작성하세요
  let result = users.filter(function (item) {
    return item.age >= 25 && item.age < 35;
  });
  console.log(result);
  
  // 필터링된 사용자 중에서 이메일 주소가 gmail.com 도메인을 사용하는 사용자만을 추출하여 새로운 배열 생성하세요
  // 여기에 코드를 작성하세요
  
  const gmailUsers = result.filter(function (item) {
    return item.email.includes('gmail.com');
  });
  
  // 결과를 화면에 그리는 함수
  function renderUserData(userData) {
    const userDataDiv = document.getElementById('userData');
  
    // innerHTML을 사용해 결과를 화면에 그려보세요
    // 여기에 코드를 작성하세요
    console.log(userData);
    userData.map(function (item) {
      const div = document.createElement('div');
      div.classList.add('user');
      const p = document.createElement('p');
      p.innerHTML = `<strong>이름 :</strong> ${item.name}<br> <strong>나이 : </strong>${item.age} <br> <strong>이메일 : </strong>${item.email}`;
      userDataDiv.append(div);
      div.append(p);
    });
  }
  
  renderUserData(gmailUsers); // 사용자 데이터를 그리는 함수 실행
  