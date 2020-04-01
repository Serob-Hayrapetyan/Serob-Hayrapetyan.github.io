//var fs = require('fs');

//create a file named mynewfile1.txt:
//fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
//  if (err) throw err;
//  console.log('Saved!');
//});

function Submit() {
  var name = document.getElementById("na").value;
  var email = document.getElementById("ema").value;
  var message = document.getElementById("mess").value;

  var user_text = {name:name,email:email,message,message};  
  console.log(user_text)

  const Http = new XMLHttpRequest();
  const url='http://192.168.1.6:3000/';
  console.log("Entered")
;
  Http.open("POST", url);
  Http.send(name + email);

  Http.onreadystatechange = (e) => {
    console.log(Http.responseText)
  }
}