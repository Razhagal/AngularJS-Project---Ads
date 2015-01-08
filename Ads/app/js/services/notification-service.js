app.factory('notificationService', function() {
	function showSuccess(msg) {
		noty({
			text: msg,
			type: 'success',
			layout: 'topCenter',
			timeout: 1000
		});
	}

	function showError(msg, errorData) {
		var errors = [];
        if (errorData && errorData.error_description) {
            errors.push(errorData.error_description);
        }

        if (errorData && errorData.modelState) {
            var modelStateErrors = errorData.modelState;
            for (var propertyName in modelStateErrors) {
                var errorMessages = modelStateErrors[propertyName];
                var trimmedName = propertyName.substr(propertyName.indexOf('.') + 1);
                for (var i = 0; i < errorMessages.length; i++) {
                    var currentError = errorMessages[i];
                    errors.push(trimmedName + ' - ' + currentError);
                }
            }
        }

        if (errors.length > 0) {
            msg = msg + ":<br />" + errors.join("<br />");
        }

        noty({
            text: msg,
            type: 'error',
            layout: 'topCenter',
            timeout: 5000}
        );
	}

	return {
		showSuccess: showSuccess,
		showError: showError
	}
});