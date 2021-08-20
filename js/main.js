$(document).ready(function () {
    var currentFloor= 2;// переменная, где храниться каждый этаж
    var counterUp=$(".counter-up"); //кнопка увеличения этажа
    var counterDown=$(".counter-down");//кнопка уменьшения этажа
    var floorPath= $(".home-image path");// каждый отдельный этаж в  SVG
    var modal = $(".modal");
    var modalCloseButton = $(".modal-close-button");
    var viewFlatsButton = $(".view-flats");

    //функция при наведении мышью на этаж
    floorPath.on("mouseover", function() {
        floorPath.removeClass("current-floor"); //удаляем активный класс у этажей
        currentFloor=$(this).attr("data-floor"); // получаем значение текущего этажа
        $(".counter").text(currentFloor); //записываем значение этажа в счетчик
    });
    floorPath.on("click", toggleModal);//при клике на этаж вызвать этаж
    modalCloseButton.on("click", toggleModal);// клик на кнопку закрыть, убрает окно
    viewFlatsButton.on("click", toggleModal);

    counterUp.on("click", function(){//отслеживаем клик по кнопке вверх
       if(currentFloor<18) { //проверяем значение этажа, оно не должно быть больше 18
        currentFloor++; //прибавляем 1
        usCurrentFloor = currentFloor.toLocaleString("en-Us",{ minimumIntegerDigits: 2, useGrouping: false });// форматируем переменную с этажом, чтобы было 02
        $(".counter").text(usCurrentFloor);//записываем значение этажа в счетчик
        floorPath.removeClass("current-floor");//удаляем активный класс у этажей
        $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");//подсвечиваем текущий этаж
       }
    });
    counterDown.on("click", function(){
        if(currentFloor > 2) {
         currentFloor--;
         usCurrentFloor = currentFloor.toLocaleString("en-Us",{ minimumIntegerDigits: 2, useGrouping: false });
         $(".counter").text(usCurrentFloor);
         floorPath.removeClass("current-floor");
         $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
        }
     });
     function toggleModal(){ // функция открыть закрыть окно
        modal.toggleClass("is-open");
    }
});