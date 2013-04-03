$(function(){

	$('#Field5').inputmask('mask', {'mask': '(999) 999-9999'});

	var metrics = [
				['#Field3','presence',''],
				['#Field5',/^\(?(\d{3})\)?[-\. ]?(\d{3})[-\. ]?(\d{4})$/,''],
				['#Field7','presence',''],
				['#Field7','email',''],
				['#Field9','presence','']
			],
			options = {
				'delay' : 300,
				'submitBtnSelector' : '#saveForm'
			};

	$('#form2').nod( metrics , options );

});