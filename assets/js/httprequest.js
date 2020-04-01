function Request(){
    var name1 = document.getElementById("na").value;
    var email1 = document.getElementById("ema").value;
    var message1 = document.getElementById("mess").value;
  
    var uri = "http://192.168.1.6:3000/";

    var request = new XMLHttpRequest(); 
    request.open("POST",uri,true);
    
    let data = {
      name: name1,
      email: email1,
      message:message1
    }
    console.log(data)

    try{ 
      request.send(data);
      console.log(request.status)
      console.log('OK');
    }
    catch(exception){
      console.log("Did not send..")
    }
   
  }