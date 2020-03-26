 
 var count = 1;
 $(document).ready(function(){
  $("#formOne").submit(function(event) {
    
    console.log("value");
    var firstname = $("#firstName").val();
    $("#firstName").val('');
    var lastname = $("#lastName").val();
    $("#lastName").val('');
    var age = $("#age").val();
    $("#age").val('');
    var flavor = $("input:radio[name=flavor]:checked").val();
    $("input:radio[name=flavor]:checked").val('');
    var dateInput = $("#faveDate").val();
    $("#faveDate").val('');
    
    
  // table
    

  var row ='<tr>' +
   '<th>'+ (count++) +'</th>' +
    '<td>'+ firstname + '</td>' +
    '<td>'+ lastname +'</td>'+
    '<td>'+ age +'</td>' +
    '<td>'+ flavor +'</td>' +
    '<td>'+ dateInput +'</td>'+ 
    '</tr>'


   // $(".table").append(markup);
    $(".table tbody").append(row);

    event.preventDefault();
//table
  });

});