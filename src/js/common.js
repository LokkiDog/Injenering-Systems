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

$('input[name="phone"]').on("focus", function(){
  $(this).setCursorPosition(3);
}).inputmask({"mask": "+7(999) 999-9999"});
$("#center_not_ok").inputmask({"mask": "(999) 999-9999"});  
// ---------------------------

function validate_form(form){
  var phone     = form.find('input[name="phone"]');
      fio       = form.find('input[name="name"]'); 
      email     = form.find('input[name="email"]'); 
      ckeckbock = form.find('input[type="checkbox"]'); 
      
  if (fio.val().length < 2){
    fio.css('border-color', 'red');
    return false;
  }else {
    fio.css('border-color', '#43ad48'); 
  }
  
  if (!phone.inputmask("isComplete")){
    phone.css('border-color', 'red');
    return  false;
  }else {
    phone.css('border-color', '#43ad48');
  }
  if (email.length > 0) { 
    if ( email.val().length < 5 || email.val().indexOf("@") == -1){
      email.css('border-color', 'red');
      return false;
    }else {
      email.css('border-color', '#43ad48');
    }
  }
  if (!ckeckbock.prop('checked')){
    ckeckbock.siblings('span').css('color', 'red');
    return false;
  }else {
    ckeckbock.siblings('span').css('color', '#43ad48');
  }
  
  fio.css('border-color', '#bebebe');
  phone.css('border-color', '#bebebe');
  email.css('border-color', '#bebebe');
  ckeckbock.siblings('span').css('color', '#bebebe');
  return true;
}

$('button[type=submit]').on("click", function(e){ 
  e.preventDefault(); 
  var form = $(this).parents('form');
      message_box = form.find('.form-message'); 

  if(validate_form(form)){
    form.submit();
    message_box.text("Форма успешно отправлена");
    message_box.css('color','#43ad48');

  }else{
    message_box.text("Одно или несколько полей заполнены неверно");
    message_box.css('color','red');
  }
})

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
	
	// $(".zoom").on('click',(function(){	// Событие клика на маленькое изображение
  //   var img = $(this);	// Получаем изображение, на которое кликнули
  //       src = img.attr('data-big-img');
  //       scale = false;

    
  //   if (typeof src == typeof undefined || src == false || src == 'undefined') {
  //     src = img.attr('src');
  //     scale = true;
  //   }
    
	// 	$("body").append("<div class='popup'>"+ //Добавляем в тело документа разметку всплывающего окна
	// 					 "<div class='popup_bg'></div>"+ // Блок, который будет служить фоном затемненным
	// 					 "<img src='"+src+"' class='popup_img' />"+ // Само увеличенное фото
	// 					 "</div>"); 
  //   $(".popup").fadeIn(400).css("display", "flex"); // Медленно выводим изображение
  //   if(!scale){
  //     $(".popup_img").css('transform', 'scale(1)');
  //   }
	// 	$(".popup_bg").on('click', (function(){	// Событие клика на затемненный фон	   
	// 		$(".popup").fadeOut(400);	// Медленно убираем всплывающее окно
	// 		setTimeout(function() {	// Выставляем таймер
	// 		  $(".popup").remove(); // Удаляем разметку всплывающего окна
	// 		}, 400);
	// 	}));
	// }));
	
//----------------------------


/*
------------------------------
// Слайдер
------------------------------
*/ 


const repeat = true;
const noArrows = false;
const noBullets = true;


const container = document.querySelector('.slider-container');
var slide = document.querySelectorAll('.slider-single');
var slideTotal = slide.length - 1;
var slideCurrent = -1;

function initBullets() {
    if (noBullets) {
        return;
    }
    const bulletContainer = document.createElement('div');
    bulletContainer.classList.add('bullet-container')
    slide.forEach((elem, i) => {
        const bullet = document.createElement('div');
        bullet.classList.add('bullet')
        bullet.id = `bullet-index-${i}`
        bullet.addEventListener('click', () => {
            goToIndexSlide(i);
        })
        bulletContainer.appendChild(bullet);
        elem.classList.add('proactivede');
    })
    container.appendChild(bulletContainer);
}

function initArrows() {
    if (noArrows) {
        return;
    }
    const leftArrow = document.getElementById('left-arrow');
    // const leftArrow = document.createElement('a')
    // const iLeft = document.createElement('i');
    // iLeft.classList.add('fa')
    // iLeft.classList.add('fa-arrow-left')
    // leftArrow.classList.add('slider-left')
    // leftArrow.appendChild(iLeft)
    leftArrow.addEventListener('click', () => { 
        slideLeft();
    })
    const rightArrow = document.getElementById('right-arrow');
    // const rightArrow = document.createElement('a')
    // const iRight = document.createElement('i');
    // iRight.classList.add('fa')
    // iRight.classList.add('fa-arrow-right')
    // rightArrow.classList.add('slider-right')
    // rightArrow.appendChild(iRight)
    rightArrow.addEventListener('click', () => { 

        slideRight();
    })
    container.appendChild(leftArrow);
    container.appendChild(rightArrow);
}

function slideInitial() {
    initArrows();
    setTimeout(function () {
        slideRight();
    }, 500);
}

function updateBullet() {
    if (!noBullets) {
        document.querySelector('.bullet-container').querySelectorAll('.bullet').forEach((elem, i) => {
            elem.classList.remove('active');
            if (i === slideCurrent) {
                elem.classList.add('active');
            }
        })
    }
    checkRepeat();
}

function checkRepeat() {
    if (!repeat) {
        if (slideCurrent === slide.length - 1) {
            slide[0].classList.add('not-visible');
            slide[slide.length - 1].classList.remove('not-visible');
            if (!noArrows) {
                document.querySelector('.slider-right').classList.add('not-visible')
                document.querySelector('.slider-left').classList.remove('not-visible')
            }
        }
        else if (slideCurrent === 0) {
            slide[slide.length - 1].classList.add('not-visible');
            slide[0].classList.remove('not-visible');
            if (!noArrows) {
                document.querySelector('.slider-left').classList.add('not-visible')
                document.querySelector('.slider-right').classList.remove('not-visible')
            }
        } else {
            slide[slide.length - 1].classList.remove('not-visible');
            slide[0].classList.remove('not-visible');
            if (!noArrows) {
                document.querySelector('.slider-left').classList.remove('not-visible')
                document.querySelector('.slider-right').classList.remove('not-visible')
            }
        }
    }
}

function slideRight() {
    if (slideCurrent < slideTotal) {
        slideCurrent++;
    } else {
        slideCurrent = 0;
    }

    if (slideCurrent > 0) {
        var preactiveSlide = slide[slideCurrent - 1];
    } else {
        var preactiveSlide = slide[slideTotal];
    }
    var activeSlide = slide[slideCurrent];
    if (slideCurrent < slideTotal) {
        var proactiveSlide = slide[slideCurrent + 1];
    } else {
        var proactiveSlide = slide[0];

    }

    slide.forEach((elem) => {
        var thisSlide = elem;
        if (thisSlide.classList.contains('preactivede')) {
            thisSlide.classList.remove('preactivede');
            thisSlide.classList.remove('preactive');
            thisSlide.classList.remove('active');
            thisSlide.classList.remove('proactive');
            thisSlide.classList.add('proactivede');
        }
        if (thisSlide.classList.contains('preactive')) {
            thisSlide.classList.remove('preactive');
            thisSlide.classList.remove('active');
            thisSlide.classList.remove('proactive');
            thisSlide.classList.remove('proactivede');
            thisSlide.classList.add('preactivede');
        }
    });
    preactiveSlide.classList.remove('preactivede');
    preactiveSlide.classList.remove('active');
    preactiveSlide.classList.remove('proactive');
    preactiveSlide.classList.remove('proactivede');
    preactiveSlide.classList.add('preactive');

    activeSlide.classList.remove('preactivede');
    activeSlide.classList.remove('preactive');
    activeSlide.classList.remove('proactive');
    activeSlide.classList.remove('proactivede');
    activeSlide.classList.add('active');

    proactiveSlide.classList.remove('preactivede');
    proactiveSlide.classList.remove('preactive');
    proactiveSlide.classList.remove('active');
    proactiveSlide.classList.remove('proactivede');
    proactiveSlide.classList.add('proactive');

    updateBullet();
}

function slideLeft() {
    if (slideCurrent > 0) {
        slideCurrent--;
    } else {
        slideCurrent = slideTotal;
    }

    if (slideCurrent < slideTotal) {
        var proactiveSlide = slide[slideCurrent + 1];
    } else {
        var proactiveSlide = slide[0];
    }
    var activeSlide = slide[slideCurrent];
    if (slideCurrent > 0) {
        var preactiveSlide = slide[slideCurrent - 1];
    } else {
        var preactiveSlide = slide[slideTotal];
    }
    slide.forEach((elem) => {
        var thisSlide = elem;
        if (thisSlide.classList.contains('proactive')) {
            thisSlide.classList.remove('preactivede');
            thisSlide.classList.remove('preactive');
            thisSlide.classList.remove('active');
            thisSlide.classList.remove('proactive');
            thisSlide.classList.add('proactivede');
        }
        if (thisSlide.classList.contains('proactivede')) {
            thisSlide.classList.remove('preactive');
            thisSlide.classList.remove('active');
            thisSlide.classList.remove('proactive');
            thisSlide.classList.remove('proactivede');
            thisSlide.classList.add('preactivede');
        }
    });

    preactiveSlide.classList.remove('preactivede');
    preactiveSlide.classList.remove('active');
    preactiveSlide.classList.remove('proactive');
    preactiveSlide.classList.remove('proactivede');
    preactiveSlide.classList.add('preactive');

    activeSlide.classList.remove('preactivede');
    activeSlide.classList.remove('preactive');
    activeSlide.classList.remove('proactive');
    activeSlide.classList.remove('proactivede');
    activeSlide.classList.add('active');

    proactiveSlide.classList.remove('preactivede');
    proactiveSlide.classList.remove('preactive');
    proactiveSlide.classList.remove('active');
    proactiveSlide.classList.remove('proactivede');
    proactiveSlide.classList.add('proactive');

    updateBullet();
}

function goToIndexSlide(index) {
    const sliding = (slideCurrent > index) ? () => slideRight() : () => slideLeft();
    while (slideCurrent !== index) {
        sliding();
    }
}

slideInitial();
 
});