Villages = new Mongo.Collection("villages");
Buildings = new Mongo.Collection("buildings");
Resources = new Mongo.Collection("resources");

if (Meteor.isClient) {
	// counter starts at 0
	

	
}
	

if (Meteor.isServer) {
	Meteor.startup(function () {
		// code to run on server at startup
	});
}
