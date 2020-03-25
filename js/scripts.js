 $(document).ready(function(){
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var firstname = parseInt($("#firstName").val());
    var lastname = parseInt($("#lastName").val());
   
  });
});
