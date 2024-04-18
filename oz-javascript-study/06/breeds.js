const apiRandomDogs = "https://dog.ceo/api/breeds/image/random/18"; //랜덤이미지
const apiAllBreeds = "https://dog.ceo/api/breeds/list/all"; //모든견종
const request1 = new XMLHttpRequest();
const request2 = new XMLHttpRequest();

const header = document.getElementById("header");
const main = document.getElementById("main");
const input = document.getElementById("filter-text");
const button = document.getElementById("filter-button");
const select = document.getElementById("filter-select");
const more = document.getElementById("more");
const tothetop = document.getElementById("tothetop");
const resetBtn = document.getElementById("resetBtn");

const currentDogs = []; // 현재사진

//화면에 사진 
function displayDogs(item){
    const dogImgDiv = document.createElement("div");
    dogImgDiv.classList.add("flex-item");
    dogImgDiv.innerHTML = `<img src=${item}>`
    main.appendChild(dogImgDiv);   
}

//requset1
function req1AddEvent(){
    const resp = JSON.parse(request1.response);
    resp.message.forEach(item => {
        currentDogs.push(item);
        displayDogs(item);
    })    
}

//강아지 사진 뿌리기
window.addEventListener("load",function(){ //웹브라우저가 최초로딩되었을 때
    
    request1.removeEventListener("load",req1AddEvent) // 이전에 등록된 load 이벤트 리스너 제거

    request1.open("GET",apiRandomDogs)
    request1.addEventListener("load",req1AddEvent) //응답이 로드됐을 때
    request1.send(); 

    //select에 견종 정보 뿌리기
    request2.open("GET",apiAllBreeds)
    request2.addEventListener("load",function(){
        const resp = JSON.parse(request2.response);
        Object.keys(resp.message).forEach(item => {  //keys메소드는 객체의 키값만 모아서 배열로 반환
            const option = document.createElement("option");
            option.textContent = item;
            option.value = item;
            select.appendChild(option);
        });        
    })
    request2.send();
});

//견종정보 필터링(input)
button.addEventListener("click",function(){
    main.innerHTML='';  
    let filterdDogs = currentDogs.filter(function(item){
        return item.indexOf(input.value) !== -1 //견종정보 안에 input의 value(사용자가쓴견종)가 있으면 그것만 모아서 배열반환
    })
    input.value = '';

    filterdDogs.forEach(function(item){
        displayDogs(item);
    })
})

//견종정보 필터링(select)
select.addEventListener("change",function(){
    main.innerHTML='';  
    let filterdDogs = currentDogs.filter(function(item){
        return item.indexOf(select.value) !== -1 //견종정보 안에 select의 value(사용자가선택한견종)가 있으면 그것만 모아서 배열반환
    })

    filterdDogs.forEach(function(item){
        displayDogs(item);
    })   
})

more.addEventListener("click",function(){  
    request1.removeEventListener("load",req1AddEvent) // 이전에 등록된 load 이벤트 리스너 제거

    request1.open("GET",apiRandomDogs)
    request1.addEventListener("load",req1AddEvent)
    request1.send(); 
})

tothetop.addEventListener("click",function(){
    //scrollTo : 주어진 위치로 스크롤 이동
    window.scrollTo({top:0}) //위치에대한값을 객체리터럴형태로 전달
})

resetBtn.addEventListener("click",function(){
    main.innerHTML = ''; 
    select.value = '';
    currentDogs.splice(0, currentDogs.length);

    request1.removeEventListener("load", req1AddEvent); // 이전에 등록된 load 이벤트 리스너 제거
    
    request1.open("GET", apiRandomDogs);
    request1.addEventListener("load", req1AddEvent);
    request1.send();
})

