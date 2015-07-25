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
	hasResources: function (level) {
		var ratio = getRatio();
		var resources = Resources.findOne({}); // Temp
		var resourcesNeeded = getResourcesNeeded(ratio, level);
		var hasResourcesState = true;
		$.each(resourcesNeeded, function(resource, amount) {
			if (amount > resources[resource]) {
				hasResourcesState = false;
			}
		});
		return hasResourcesState;
	}
});