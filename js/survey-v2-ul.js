var userInputs = [];
$(document).ready(function(){
   $("#intro").submit(function(event){
      var questions =['food','color','num','date'];
      questions.forEach(function(question){
      var  userInput  = "Favorite "+ question + ": " + $('#'+ question).val();
      $('#'+ question).val('');
      userInputs.push(userInput);
    });
    var iceCream ="Favorite Icecream: "+ $("input:radio[name=ice]:checked").val();
    
    userInputs.push(iceCream);
    console.log(userInputs);

    //unorder list add  dynamically to html
    var list = $(".item-list ul");
    $.each(userInputs ,function(){
      $("<li></li>").html(this).appendTo(list);
      console.log("===="+this);
    })
    event.preventDefault();
   });

});
