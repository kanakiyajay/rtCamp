$(document).ready(function() {
	// Close dropdown on clicking anywhere else
	var notification = $('.notification-wrapper');
	$('body').on('click', function() {
		if (notification.hasClass('slideInUp')) {
			notification.removeClass('slideInUp');
		}
	});

	// Prevent closing of dropdown
	$('.notification-list').on('click', function(e) {
		e.stopPropagation();
	});

	// Open dropdown
	var notificationNumber = $('.notification-number');
	$('.icon').on('click', function(e) {
		notificationNumber.text('0');
		notification.toggleClass('slideInUp');
		e.stopPropagation();
	});

	// Dummy polling function calling random string at random intervals
	(function getNotification() {
		setTimeout(function() {
			getNotification();
			console.log(getRandomString());
		}, getRandomTime() * 60);
	})();

});

function getRandomTime() {
	return Math.round(50 * Math.random());
}

function getRandomString() {
	return Math.random().toString(36).substr(2, 5);
}