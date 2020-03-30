var deck = []
$(document).ready(function(){
   
   var cards = [2,3,4,5,6,7,8,9,10,"jack","queen","king"];
   var suits =[" of clubs"," of diamonds"]
   suits.forEach(function(suit){
     deck.push("ace "+ suit);
     cards.forEach(function(card){
      deck.push(card + suit );
    });
   });
   console.log(deck);

   var list = $(".item-list ul");
    deck.forEach(function(item){
      $("<li></li>").html(item ).appendTo(list);
    });
   
   
});