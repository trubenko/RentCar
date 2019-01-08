$(document).ready(function(){
   $('.lang').on('click', function(){
       $.ajax({
           url: "lang/" + this.id
       }).done(function() {
           document.location.reload();
       });
   })
});