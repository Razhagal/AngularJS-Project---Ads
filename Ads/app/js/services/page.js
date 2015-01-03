app.factory('Page', function() {
	var currentPageName = '';

	function getPageName() {
		return currentPageName;
	}

	function setPageName(newName) {
		currentPageName = newName;
	}

	return {
		getName: getPageName,
		setPageName: setPageName
	}
});