getResourcesNeeded = function (ratio, level) {
	// Returns array of resources needed [resource1: 120, resources2: 140, etc.]
	var resourcesNeeded = {};
	$.each(ratio, function(resource, scaler) {
		var amountNeeded = Math.pow(level*scaler, 2)*100;
		resourcesNeeded[resource] = amountNeeded;
	});
	return resourcesNeeded;
}

getRatio = function () {
	// Temporary function for getting building resource ratio
	return {resource1: 1, resource2: 2, resource3: 4, resource4: 2};
}