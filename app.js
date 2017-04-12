$.ajax({

url : 'http://api.openweathermap.org/data/2.5/weather?id=6448311&APPID=6710107f875ce48689449d2f02f2e715&mode=html',
  
  success : function(data){

    console.log(data);
    console.log('success');
    $("#koko").append(data);
  },

  error : function(error){
    console.log('error');

  },

});



