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

  btns.forEach((btn) => btn.addEventListener(`click`, (event) => {
    openModal();
  }));
  cross.addEventListener(`click`, (event) => {
    closeModal();
  });
  modalForm.addEventListener(`submit`, (event) => {
    closeModal();
  });

  function openModal(){
    modal.style.bottom = 0;
    modal.style.top = 0;
  }
  function closeModal(){
    modal.style.bottom = '1000px';
    modal.style.top = '-1000px';
  }

});