$(document).ready(function(){
document.getElementById('SearchBox').value="";
  $('#searchBtn').click(function(){

    var searchValue=$('#SearchBox').val();
    var url="https://en.wikipedia.org/w/api.php?action=opensearch&search="+searchValue+"&format=json&callback=?";
    $.ajax({
      type:"GET",
      url:url,
      async:false,
      dataType:"json",
      success:function(data){
        $('#output').html("");
        console.log(data);
        for(var i=0;i<data[0].length;i++){
          $('#output').prepend("<div class=\"card-panel teal ho\"><a href=\""+data[3][i]+"\" target=\'_blank\' class=\"white-text \" ><h2 class=\"link \">"+data[1][i]+"</h2></a><p>"+data[2][i]+"</p></div>");
        }
      },
      error:function(errorMessage){
        alert(errorMessage);
      }
    });
  });

});
