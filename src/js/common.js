document.addEventListener("DOMContentLoaded", function(){

/*
------------------------------
// Стилизация кнопки с файлом
------------------------------
*/
  var inputs = document.querySelectorAll('.btn-file-btn');
  Array.prototype.forEach.call(inputs, function(input){
    var label	 = input.nextElementSibling,
        labelVal = label.innerHTML;


        input.addEventListener('change', function(e){
          var fileName = '';
          if( this.files && this.files.length > 1 ) {
            fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
          }
          else {
            fileName = e.target.value.split( "\\" ).pop();
            if(fileName.length > 25){
              fileName = fileName.substring(0, 15) + "...";
            }
            
            
          }
          if( fileName ) {
            label.querySelector( 'span' ).innerHTML = fileName;
          }
          else {
            label.innerHTML = labelVal;
          }
        });
      });
// ---------------------------
 

/*
------------------------------
// Модальное окно
------------------------------
*/
  // Обрабатываем все кнопки с классом btn-call
  var btns = document.querySelectorAll(".btn-call"); 
      modal = document.getElementById('modal');
      cross = document.getElementById('cross');
      modalForm = document.getElementById('modalForm');
  
  if(btns && modal) {
    btns.forEach((btn) => btn.addEventListener(`click`, (event) => {
      openModal();
    }));
  }
  if(cross) {
    cross.addEventListener(`click`, (event) => {
      closeModal();
    });
  }
  if(modal) {
    modalForm.addEventListener(`submit`, (event) => {
      closeModal();
    });
  }

  function openModal(){
    modal.style.bottom = 0;
    modal.style.top = 0;
  }
  function closeModal(){
    modal.style.bottom = '10000px';
    modal.style.top = '-10000px';
  }
// ---------------------------

/*
------------------------------
// Маска на телефон
------------------------------
*/
// функция выравнивает курсор в маске
$.fn.setCursorPosition = function(pos) {
  if ($(this).get(0).setSelectionRange) {
    $(this).get(0).setSelectionRange(pos, pos);
  } else if ($(this).get(0).createTextRange) {
    var range = $(this).get(0).createTextRange();
    range.collapse(true);
    range.moveEnd('character', pos);
    range.moveStart('character', pos);
    range.select();
  }
};

$('input[name="phone"]').click(function(){
  $(this).setCursorPosition(3);
}).mask("+7(999) 999-9999");
$("#center_not_ok").mask("+7(999) 999-9999"); 

// ---------------------------


/*
------------------------------
// Аккордеон
------------------------------
*/
  var acc = document.getElementsByClassName("accordion");
  var i;

  // Плавное открытие/закрытие
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
          arrow = this.getElementsByTagName('span')[0];
 
      if (panel.style.maxHeight){
        panel.style.maxHeight = null;
        arrow.style.transform = 'rotate(180deg)';
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        arrow.style.transform = 'rotate(0deg)';
      } 
    });
  }
  
//----------------------------
 
/*
------------------------------
// Мобильное меню
------------------------------
*/ 
// Открытие закрытие
  var burger = document.getElementById('burger');
  burger.addEventListener('click', () => {
    burger.classList.toggle("active");
    var menu = document.getElementById('mob-menu'); 
    if (burger.classList.contains("active")){
      menu.style.left = 0;
    }else {
      menu.style.left = '-100%';
    }
  }); 
//----------------------------
$('.menu-dropdown-mob > a').on('click', (e) => { 
 
});

// Выпадающие списки
  $('.menu-dropdown-mob').on('click', (e) => { 
    $(e.target).find('.menu-ul-child-mob').toggle();
    $(e.target).siblings('.menu-ul-child-mob').toggle();

    $(e.target).siblings('.menu-arrow').toggleClass('active-arrow');
    $(e.target).find('.menu-arrow').toggleClass('active-arrow');


    e.stopPropagation();
  })
/*
------------------------------
// Плавная прокрутка
------------------------------
*/ 

  $("body").on('click', '[href*="#"]', function(e){
    var fixed_offset = 0;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
    e.preventDefault();
  });
//----------------------------

/*
------------------------------
// Увеличение картинки при нажатии
------------------------------
*/ 
	
	$(".zoom").on('click',(function(){	// Событие клика на маленькое изображение
    var img = $(this);	// Получаем изображение, на которое кликнули
        src = img.attr('data-big-img');
        scale = false;

    
    if (typeof src == typeof undefined || src == false || src == 'undefined') {
      src = img.attr('src');
      scale = true;
    }
    
		$("body").append("<div class='popup'>"+ //Добавляем в тело документа разметку всплывающего окна
						 "<div class='popup_bg'></div>"+ // Блок, который будет служить фоном затемненным
						 "<img src='"+src+"' class='popup_img' />"+ // Само увеличенное фото
						 "</div>"); 
    $(".popup").fadeIn(400).css("display", "flex"); // Медленно выводим изображение
    if(!scale){
      $(".popup_img").css('transform', 'scale(1)');
    }
		$(".popup_bg").on('click', (function(){	// Событие клика на затемненный фон	   
			$(".popup").fadeOut(400);	// Медленно убираем всплывающее окно
			setTimeout(function() {	// Выставляем таймер
			  $(".popup").remove(); // Удаляем разметку всплывающего окна
			}, 400);
		}));
	}));
	
//----------------------------
 
});