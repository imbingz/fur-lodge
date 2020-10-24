$(document).ready(function() {
	//Send a GET request and render the user email
	$.get('/api/user_data').then((data) => {
		$('.member-name').text(data.email);
	});
});
