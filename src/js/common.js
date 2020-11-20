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
    modal.style.bottom = '1000px';
    modal.style.top = '-1000px';
  }
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
});




