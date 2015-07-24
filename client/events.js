Template.building.events({
	"click .level-up": function  () {
		var selectedBuilding = this._id;
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
