(function(global, $) {

// 'new' and object
var Greetr = function(firstName, lastName, language ) {
	return new Greetr.init(firstName, lastName, language );
};
	// hidden in the scope of th eIIFe and never directly accessible
	var supportedLangs = ['en', 'es', 'fr'];
	// informal greetings 
	var greetings = {
		en: 'Hello',
		es: 'Hola',
		fr: 'Bonjour'

	};
	// formal greetings 
	var formalGreetings = {
		en: 'Greetings',
		es: 'Saludos',
		fr: 'Chao'

	}; 
	// logger message 
	var logMessages = {
		en: 'Logged in',
		es: 'Conectado',
		fr: 'Connecté'
	};
	//
	Greetr.prototype = {
		// 'this' refers to the calling object at execution time 
		fullName: function () {
			// check that is a valid language
			// references the ecternaly inaccessible 'supportedLangs' within 


			return this.firstName + ' ' + this.lastName;
		},

		validate: function () {
			if (supportedLangs.indexOf(this.language) === -1) {
				throw 'Invalid language';
			}			 
		}, 
		// retrieve messages from object by reffering to properties using []
		greetings : function () {
			return greetings[this.language] + ' ' + this.firstName + '!';
		}, 

		formalGreetings: function () {
			return formalGreetings [ this.language] + ',' + this.firstName;
		}, 

		greet: function(formal) {
			var msg;

		/// if the msg is undefine or null it wil be coerced to retun 'false'
		if (formal) {
			msg = this.formalGreetings();
		} else {
			msg = this.greetings();
		}
		if (console) {
			console.log(msg);
		}

		// 'this' will refer to the calling object at execution time 
		// will also make the method chainable.
	return this; 
		}, 
		log: function () {
			if(console) {
				console.log(logMessages[this.language] + ':' + this.fullName);
			}
			return this;
		}, 
		setLang: function (lang) {
			this.language = lang;

			this.validate();

			return this;
		}, 

		HTMLGreeting: function (selector, formal) {
			if (!$) {
				throw 'JQuery Error! no load was found';

			}

			if (!selector) {
				throw 'Missing jQuery selector';
			}
			
			var msg;
			if (formal) {
				msg = this.formalGreetings ();
			} else {
				msg = this.greeting();
			}

			$(selector).html(msg);

			return this;
		}

	};
		// the actual object is created here, allowing us to 'new' an object without calling 'new'
	Greetr.init = function (firstName, lastName, language ) {

		var self = this;
		self.firstName = firstName || '';
		self.lastName  = lastName  || '';
		self.language  = language  || 'en';

		self.validate();

	};
	// 
	Greetr.init.prototype = Greetr.prototype;
	// attach our Greetr to the global object, and provide a shorthand '$G' for ease on the length and our fingers :D
	global.Greetr = global.G$ = Greetr;

}(window, $));