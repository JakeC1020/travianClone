Template.body.helpers({
	villages: function  () {
		return Villages.find({});
	}
});

Template.village.helpers({
	buildings: function () {
		var currentVillage = this._id;
		return Buildings.find({village: currentVillage});
	}
});

Template.building.helpers({
	hasResources: function (buildingLevel) {
		var ratio = {resource1: 1, resource2: 2, resource3: 4, resource4: 2}
		var resources = Resources.findOne({});
		var hasResourcesState = true;
		console.log(resources);
		$.each(ratio, function(resource, scaler) {
			var resourcesNeeded = Math.pow(buildingLevel*scaler, 2)*100;
			console.log("Need: " + resourcesNeeded + resource);
			if (resourcesNeeded > resources[resource]) {
				hasResourcesState = false;
			}
		});
		return hasResourcesState;
	}
});