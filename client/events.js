Template.building.events({
	"click .level-up": function  () {
		var selectedBuilding = this._id;
		var currentLevel = this.level;
		var resourcesOwed = getResourcesNeeded(getRatio(), currentLevel);
		var selectedResourcesEntry = Resources.findOne({})._id; // Temp until User accounts
		$.each(resourcesOwed, function(resource, amount) {
			var negativeAmount = amount*-1;
			var $inc = {};
			$inc[resource] = negativeAmount;
			Resources.update(selectedResourcesEntry, {$inc: $inc});
		});
		Buildings.update(selectedBuilding, {$inc: {level: 1}});
	}
});

Template.addVillageForm.events({
	"submit form": function (event) {
		event.preventDefault();
		var villageNameVar = event.target.villageName.value;
		Villages.insert({
			name: villageNameVar
		});
		event.target.villageName.value = "";
	}
});

Template.addBuildingForm.events({
	"submit form": function (event) {
		event.preventDefault();
		var buildingNameVar = event.target.buildingName.value;
		var villageVar = this._id;
		console.log(villageVar);
		Buildings.insert({
			name: buildingNameVar,
			village: villageVar,
			level: 1
		});
		event.target.buildingName.value = ""; 
	}
});
