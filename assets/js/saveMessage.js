function sendMessage()
{
	var name = document.getElementById("na").value;
	var email = document.getElementById("ema").value;
    var message = document.getElementById("mess").value;
    
    document.getElementById("mess").value = email;
    
	Email.send({
	Host : "smtp.elasticemail.com",
	Username : "serob.hayrapetyan51@gmail.com",
	Password : "495AB6006FBA187C2CBFE7974F50C57EF6F6",
	To : "serob.hayrapetyan51@gmail.com",
	From : email,
	Subject : "From web page from " + name,
	Body : message
	}).then(	
    message => alert(message)	
	);	
}	