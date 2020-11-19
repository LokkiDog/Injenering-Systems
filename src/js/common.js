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
var btn = documnent.getElementsByClassName("btn-call");
btn.addEventListener('click', function(e){
  alert(123);
});

});