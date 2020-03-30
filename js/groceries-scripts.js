var itemList =[];
$(document).ready(function(){
   $("#list").submit(function(event){
    event.preventDefault();
    var items =["fruit","vegetable","juice"];
      items.forEach(function(item){
        var userInput = $("#"+item).val();
        itemList.push(userInput);
        itemList.sort();
        var newitemList = itemList.map(function(item){

        });
      });
       console.log(itemList);
    //item add to the list
        var list =$("#output ul");
        itemList.forEach(function(item){
          $("<li></li>").html(item).appendTo(list);
        });
      
   });
});