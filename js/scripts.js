 $(document).ready(function(){
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var firstname = $("#firstName").val();
    var lastname = $("#lastName").val();

    $(".firstName").text(firstNameInput);
    $(".lastName").text(lastNameInput)
  });


  $("#age").submit(function(event) {
    event.preventDefault();
    var age = $("#age").val();
    $(".age").text(age); 
  });
 


  $("#output").show();

  event.preventDefault();
});