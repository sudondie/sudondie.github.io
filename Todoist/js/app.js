
// CODE EXPLAINED channel
//Переменные
let LIST,id;
//Выбор элементов 
const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");
const plusButton = document.getElementById("plus");

//Имена классов
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";
//Получать элементы из локального хранилища
let data = localStorage.getItem("TODO");
//Проверяем пуста ли локалка
if (data){
    LIST = JSON.parse(data);
    id = LIST.length; //получаем id последнего элемента
    loadList(LIST);  //загружаем данные из локалки в user interface
} else {
    LIST = [];
    id = 0;
}

//загружаем элементы
function loadList(array){
    array.forEach(function(item){
        addToDo(item.name,item.id,item.done,item.trash);
    });
}

//Очищаем локальное хранилище
clear.addEventListener("click",function(){
    localStorage.clear();
    location.reload();
})

//Показывать сегоднешнюю дату
const today = new Date();
const options = {weekday : "short", month: "short", day:"numeric"}
dateElement.innerHTML = today.toLocaleDateString("ru-RU",options);

//ToDo функция
function addToDo(toDo,id,done,trash){
    if(trash){return;}
    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : "";
    const item = `
                <li class="item">
                    <i class="fa ${DONE} co" job="complete" id="${id}"></i>
                    <p class="text ${LINE}">${toDo}</p>
                    <i class="fa fa-trash-o de" job="delete" id="${id}"></i> 
                </li>`;
    const position = "beforeend";
    list.insertAdjacentHTML(position,item);
}

//Добавить задачу по нажатию Enter
document.addEventListener("keyup",function(event){
    if(event.keyCode == 13) {
        const toDo = input.value;
        //Проверяем пуст ли input
        if(toDo) {
            addToDo(toDo, id, false, false);
            LIST.push({
                name: toDo,
                id: id,
                done: false,
                trash: false
            });
            //добавлять элементы в локальное хранилище
            localStorage.setItem("TODO",JSON.stringify(LIST));
            id++;
        }
        input.value = "";
    }
});
plusButton.addEventListener("click", function(){
    const toDo = input.value;
    //Проверяем пуст ли input
    if(toDo) {
        addToDo(toDo, id, false, false);
        LIST.push({
            name: toDo,
            id: id,
            done: false,
            trash: false
        });
        //добавлять элементы в локальное хранилище
        localStorage.setItem("TODO",JSON.stringify(LIST));
        id++;
    }
    input.value = "";
})

//Выполнение задачи

function completeToDo(element){
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);
    LIST[element.id].done = LIST[element.id].done ? false : true;
}

//Удалить задачу

function removeToDo(element){
    element.parentNode.parentNode.removeChild(element.parentNode);
    LIST[element.id].trash = true;
}

//Выбор элементов созданных динамически

list.addEventListener("click",function(event){
    const element = event.target;
    const elementJob = element.attributes.job.value;
    if (elementJob == "complete"){
        completeToDo(element);
    } else if (elementJob == "delete"){
        removeToDo(element);
    }
    //добавлять элементы в локальное хранилище
    localStorage.setItem("TODO",JSON.stringify(LIST));
})