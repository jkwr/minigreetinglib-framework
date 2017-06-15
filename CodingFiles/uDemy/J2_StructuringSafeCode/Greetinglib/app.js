// gets a new object ( the architecture allows us to not have to use the 'new keyword here )


var g = G$ ('Jevell', 'Rollins');

// use our chainable methods 
g.greet().setLang('es').greet(true).log();

// lets use our object on the click of the login button 
$('#login').click(function () {
// creates a new 'Greeter' object (let's pretend we know the name from the login)
	var loginGrtr = G$('Jevell', 'Rollins');
// hide the login on the screen 
	$('logindiv').hide();
	// fire of an HTML greeting, passing the '#greeting' as the selector an the chosed language, and log into welcome a well
	loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();

});